import React from 'react';
import type { Project } from '../types/project';
import { 
  Award, 
  Terminal, 
  Cpu, 
  Activity, 
  Video, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Scan, 
  Flame, 
  ShoppingBag, 
  Dumbbell, 
  Train, 
  CreditCard, 
  Coffee,
  Code2
} from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  detailed?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  switch (project.id) {
    case 'gramsetu-prototype1':
    case 'gramsetu-prototype2':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-emerald-500/20 relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Video className="w-3 h-3 text-emerald-400" />
              <span>Civic WebRTC Telehealth</span>
            </span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-400" />
              <span>3rd Prize Winner</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="bg-slate-900/80 border border-emerald-500/20 rounded-lg p-2 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Languages</div>
              <div className="text-xs font-bold text-slate-200">Multilingual</div>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-2 text-center">
              <div className="text-[10px] text-emerald-400 uppercase font-mono">Audio/Video</div>
              <div className="text-xs font-bold text-emerald-300">Live Call</div>
            </div>
            <div className="bg-slate-900/80 border border-emerald-500/20 rounded-lg p-2 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Panchayat</div>
              <div className="text-xs font-bold text-slate-200">Connected</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Low-Bandwidth Optimized
            </span>
            <span>2G/3G Ready</span>
          </div>
        </div>
      );

    case 'skillup-ai':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-indigo-500/20 relative overflow-hidden group-hover:border-indigo-500/40 transition-colors">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>SkillUp AI Engine</span>
            </span>
            <span className="text-indigo-400 text-[11px]">Adaptive Learning</span>
          </div>
          <div className="space-y-2 my-auto">
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Data Structures &amp; Algorithms</span>
                <span className="font-mono text-indigo-400 font-bold">92%</span>
              </div>
              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full w-[92%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Distributed System Design</span>
                <span className="font-mono text-cyan-400 font-bold">78%</span>
              </div>
              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[78%] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>Next: Distributed Caching</span>
            <span className="text-indigo-300 font-semibold">Generative Roadmap</span>
          </div>
        </div>
      );

    case 'skillbridge-p2':
    case 'skillbridge-p1':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-teal-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-teal-500/20 relative overflow-hidden group-hover:border-teal-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Cpu className="w-3 h-3 text-teal-400" />
              <span>SkillBridge &bull; Gemini AI</span>
            </span>
            <span className="text-slate-400 text-[11px]">Firebase + Express</span>
          </div>
          <div className="bg-slate-900/90 border border-teal-500/20 rounded-lg p-2.5 my-auto text-[11px] font-mono space-y-1">
            <div className="text-teal-400">// Gemini AI Mentorship Evaluation</div>
            <div className="text-slate-200">Goal: Full-Stack Developer Placement</div>
            <div className="text-slate-400">Action: Nodemailer dispatch queued</div>
            <div className="text-emerald-400">Match: 94% Skill Profile Alignment</div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>Nodemailer Engine</span>
            <span className="text-teal-300">Firebase Auth Active</span>
          </div>
        </div>
      );

    case 'bloodconnect':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-rose-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-rose-500/20 relative overflow-hidden group-hover:border-rose-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <HeartHandshake className="w-3 h-3 text-rose-400" />
              <span>BloodConnect Emergency</span>
            </span>
            <span className="text-rose-400 text-[11px] font-bold">Priority Match</span>
          </div>
          <div className="flex items-center justify-around my-auto">
            {['O-', 'A+', 'B+', 'AB+'].map((group, idx) => (
              <div 
                key={group}
                className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-mono border transition-all ${
                  idx === 0 
                    ? 'bg-rose-950/80 border-rose-500 text-rose-200 shadow-md shadow-rose-900/40 scale-105' 
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <span className="text-xs font-bold">{group}</span>
                <span className="text-[9px] text-slate-400">{idx === 0 ? 'Urgent' : 'Ready'}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>Drizzle ORM Query</span>
            <span className="text-rose-400">Radix UI Primitives</span>
          </div>
        </div>
      );

    case 'picscan-p1':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 flex flex-col justify-between border-b border-cyan-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Scan className="w-3 h-3 text-cyan-400" />
              <span>PicScan CV Engine</span>
            </span>
            <span className="text-cyan-400 text-[11px]">OpenCV &bull; Python</span>
          </div>
          <div className="relative border border-dashed border-cyan-500/50 bg-slate-900/60 rounded-xl p-3 my-auto flex items-center justify-between font-mono text-[11px]">
            <div className="space-y-0.5">
              <div className="text-cyan-300">Contour: 4-Point Box Locked</div>
              <div className="text-slate-300">Perspective: Unskewed 90°</div>
              <div className="text-slate-400">Filter: Adaptive Binarization</div>
            </div>
            <div className="w-10 h-10 border border-cyan-400/80 bg-cyan-500/10 rounded-lg flex items-center justify-center font-bold text-cyan-300 text-xs">
              OCR
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>Canny Edge Transform</span>
            <span className="text-cyan-300">High Contrast Extraction</span>
          </div>
        </div>
      );

    case 'cyberrisk-ai':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-cyan-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span>CyberRisk AI Telemetry</span>
            </span>
            <span className="text-amber-400 font-mono text-[11px]">Audit Engine</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-slate-900/90 border border-cyan-500/20 p-2.5 rounded-lg">
              <div className="text-[10px] text-slate-400 font-mono">Risk Index</div>
              <div className="text-lg font-bold text-amber-400 font-mono">2.4 <span className="text-[10px] text-slate-400 font-normal">/ Low</span></div>
            </div>
            <div className="bg-slate-900/90 border border-cyan-500/20 p-2.5 rounded-lg">
              <div className="text-[10px] text-slate-400 font-mono">Audit Checks</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">48 / 52 Passed</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>CVE Auto-Patching</span>
            <span className="text-cyan-300">Vite + React</span>
          </div>
        </div>
      );

    case 'flipkart-ui':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-blue-500/20 relative overflow-hidden group-hover:border-blue-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-bold">
              <ShoppingBag className="w-3 h-3 text-yellow-400" />
              <span>Flipkart Storefront Clone</span>
            </span>
            <span className="text-yellow-400 text-[11px]">Netlify Live</span>
          </div>
          <div className="bg-white/[0.05] border border-white/10 rounded-xl p-2.5 my-auto space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono text-yellow-200">
              <span>Super Deals Carousel</span>
              <span className="font-bold">Up to 70% Off</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-medium text-slate-300 pt-1">
              <div className="bg-blue-900/60 p-1 rounded">Electronics</div>
              <div className="bg-blue-900/60 p-1 rounded">Mobiles</div>
              <div className="bg-blue-900/60 p-1 rounded">Fashion</div>
              <div className="bg-blue-900/60 p-1 rounded">Grocery</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>HTML5 &bull; CSS3 &bull; JS</span>
            <span className="text-yellow-400">Mobile Responsive</span>
          </div>
        </div>
      );

    case 'skyfit':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-emerald-500/20 relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Dumbbell className="w-3 h-3 text-emerald-400" />
              <span>SkyFit Hub</span>
            </span>
            <span className="text-slate-400 text-[11px]">BMI Calculator</span>
          </div>
          <div className="bg-slate-900/80 border border-emerald-500/20 rounded-xl p-3 my-auto flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Interactive Formula</div>
              <div className="text-xs font-bold text-slate-200">weight(kg) / height(m)²</div>
              <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Status: Healthy BMI Range</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex flex-col items-center justify-center font-bold text-emerald-300 text-xs font-mono">
              <span>21.4</span>
              <span className="text-[8px] font-normal text-slate-400">BMI</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.06]">
            <span>Cardio &bull; Strength &bull; Yoga</span>
            <span className="text-emerald-300">Clean CSS3</span>
          </div>
        </div>
      );

    case 'zomato-c':
    case 'atm-using-c':
    case 'c-project':
      return (
        <div className="w-full h-44 bg-[#070B12] p-3.5 flex flex-col justify-between border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>{project.name}.c</span>
            </span>
            <span className="text-slate-500 text-[10px]">Pure C Runtime</span>
          </div>
          <div className="bg-black/60 rounded-lg p-2.5 my-auto text-[10px] space-y-1 text-slate-300 border border-slate-800/80">
            {project.id === 'zomato-c' ? (
              <>
                <div className="text-rose-400">&gt; Order #ZOM-408 confirmed: 3 items</div>
                <div className="text-slate-400">&gt; Subtotal: ₹450 | GST: 5% | Total: ₹472</div>
                <div className="text-emerald-400">&gt; ETA: 25 mins • Driver Dispatched</div>
              </>
            ) : project.id === 'atm-using-c' ? (
              <>
                <div className="text-emerald-400">&gt; PIN AUTH: SUCCESSFUL</div>
                <div className="text-slate-300">&gt; DISPENSE: ₹2,000 [2x ₹500, 1x ₹1000]</div>
                <div className="text-slate-400">&gt; REMAINING BALANCE: ₹24,850.00</div>
              </>
            ) : (
              <>
                <div className="text-amber-400">&gt; ORDER: Double Espresso + Oat Milk</div>
                <div className="text-slate-300">&gt; INVOICE: #POS-1049 | TOTAL: ₹220</div>
                <div className="text-slate-400">&gt; STOCK: 18g espresso beans deducted</div>
              </>
            )}
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-slate-800/80">
            <span>Memory Layout &bull; Struct Arrays</span>
            <span className="text-slate-400">Terminal I/O</span>
          </div>
        </div>
      );

    case 'irctc-using-java':
      return (
        <div className="w-full h-44 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-indigo-500/20 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Train className="w-3 h-3 text-indigo-400" />
              <span>IRCTC.java &bull; Enterprise</span>
            </span>
            <span className="text-indigo-400 text-[10px]">OOP Architecture</span>
          </div>
          <div className="bg-slate-900/90 border border-indigo-500/20 rounded-xl p-3 my-auto space-y-1 text-[11px]">
            <div className="flex justify-between text-indigo-300">
              <span>PNR: 824-9102847</span>
              <span>TRAIN: 12727</span>
            </div>
            <div className="text-slate-300">Coach: B2 &bull; Berth: 42 (MB) &bull; 3AC</div>
            <div className="text-emerald-400">Status: CONFIRMED &bull; Chart Prepared</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/[0.06]">
            <span>Passenger &amp; Booking Entities</span>
            <span className="text-indigo-400">Collections Framework</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 flex flex-col justify-between border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              <Code2 className="w-3 h-3 text-indigo-400" />
              <span>{project.primaryLanguage || project.language || 'Code'}</span>
            </span>
            <span className="text-slate-500 text-[10px]">{project.category}</span>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 my-auto">
            <div className="font-bold text-slate-200 text-xs truncate mb-1">{project.displayName}</div>
            <div className="text-slate-400 text-[11px] line-clamp-2">{project.tagline}</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-white/[0.06]">
            <span>Branch: main</span>
            <span className="text-slate-400">{project.technologies.slice(0, 2).join(' &bull; ')}</span>
          </div>
        </div>
      );
  }
};
