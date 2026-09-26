const https = require('https');
const fs = require('fs');

const repos = JSON.parse(fs.readFileSync('all_repos_raw.json', 'utf8'));

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Portfolio-Inspection' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, data });
        } else {
          resolve({ status: res.statusCode, data: null });
        }
      });
    }).on('error', () => resolve({ status: 500, data: null }));
  });
}

async function inspectRepo(repo) {
  const branches = [repo.default_branch || 'main', 'master'];
  let readme = '';
  for (const b of branches) {
    const r1 = await fetchUrl(`https://raw.githubusercontent.com/karthikeyasai61-dev/${repo.name}/${b}/README.md`);
    if (r1.data) { readme = r1.data; break; }
    const r2 = await fetchUrl(`https://raw.githubusercontent.com/karthikeyasai61-dev/${repo.name}/${b}/readme.md`);
    if (r2.data) { readme = r2.data; break; }
  }

  // Also check package.json if exists
  let pkgJson = null;
  for (const b of branches) {
    const p = await fetchUrl(`https://raw.githubusercontent.com/karthikeyasai61-dev/${repo.name}/${b}/package.json`);
    if (p.data) {
      try {
        pkgJson = JSON.parse(p.data);
        break;
      } catch (e) {}
    }
  }

  // Check git tree via api
  const treeRes = await fetchUrl(`https://api.github.com/repos/karthikeyasai61-dev/${repo.name}/git/trees/${repo.default_branch || 'main'}?recursive=1`);
  let fileList = [];
  if (treeRes.data) {
    try {
      const treeData = JSON.parse(treeRes.data);
      if (treeData.tree) {
        fileList = treeData.tree.map(t => t.path);
      }
    } catch(e) {}
  }

  return {
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated_at: repo.updated_at,
    created_at: repo.created_at,
    topics: repo.topics || [],
    has_readme: !!readme,
    readme_snippet: readme ? readme.slice(0, 500) : '',
    readme_full: readme,
    pkg_dependencies: pkgJson ? Object.keys(pkgJson.dependencies || {}) : [],
    pkg_devDependencies: pkgJson ? Object.keys(pkgJson.devDependencies || {}) : [],
    files: fileList.slice(0, 30)
  };
}

async function run() {
  const results = [];
  for (const r of repos) {
    console.log('Inspecting:', r.name);
    const details = await inspectRepo(r);
    results.push(details);
    // tiny delay
    await new Promise(res => setTimeout(res, 200));
  }
  fs.writeFileSync('detailed_repos.json', JSON.stringify(results, null, 2));
  console.log('Finished! Saved to detailed_repos.json');
}

run();
