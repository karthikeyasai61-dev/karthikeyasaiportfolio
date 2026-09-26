import urllib.request
import json
import base64
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
}

def get_json(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def get_readme(repo_name):
    url = f"https://api.github.com/repos/karthikeyasai61-dev/{repo_name}/readme"
    data = get_json(url)
    if data and 'content' in data:
        try:
            return base64.b64decode(data['content']).decode('utf-8', errors='ignore')
        except Exception as e:
            return ""
    return ""

def get_contents(repo_name, path=""):
    url = f"https://api.github.com/repos/karthikeyasai61-dev/{repo_name}/contents/{path}"
    data = get_json(url)
    if isinstance(data, list):
        return [item['name'] for item in data]
    return []

def main():
    repos = get_json("https://api.github.com/users/karthikeyasai61-dev/repos?per_page=100")
    if not repos:
        print("Failed to fetch repos")
        return

    print(f"Total repos found: {len(repos)}")
    repo_details = []

    for r in repos:
        name = r.get('name')
        print(f"Inspecting {name}...")
        readme = get_readme(name)
        root_files = get_contents(name)
        languages = get_json(r.get('languages_url', '')) or {}
        
        repo_details.append({
            'id': r.get('id'),
            'name': name,
            'full_name': r.get('full_name'),
            'description': r.get('description'),
            'html_url': r.get('html_url'),
            'homepage': r.get('homepage'),
            'language': r.get('language'),
            'languages': list(languages.keys()),
            'stars': r.get('stargazers_count', 0),
            'forks': r.get('forks_count', 0),
            'updated_at': r.get('updated_at'),
            'created_at': r.get('created_at'),
            'topics': r.get('topics', []),
            'is_fork': r.get('fork', False),
            'readme': readme,
            'root_files': root_files
        })

    with open('discovered_repos.json', 'w', encoding='utf-8') as f:
        json.dump(repo_details, f, indent=2, ensure_ascii=False)

    print("Saved discovered_repos.json successfully!")

if __name__ == '__main__':
    main()
