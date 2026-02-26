import { SkillTree } from '@/components/skill-tree/SkillTree';
import { Trophy, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-6">
          <Sparkles className="w-3 h-3 text-cyan-500" />
          <span>Synthesized Pedagogical Framework</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          GENERATIVE ALGORITHMS
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
          Master computer science fundamentals through the lens of generative art.
          A curated quest tree designed to optimize conceptual serendipity.
        </p>
      </div>

      {/* Skill Tree Section */}
      <div className="max-w-6xl mx-auto border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative">
        <div className="absolute top-8 left-8 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Easy</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500" /> Medium</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500" /> Hard</div>
        </div>
        <SkillTree />
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-500 border-t border-white/5">
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            Progression Tracking
          </h4>
          <p className="text-sm leading-relaxed">
            Your solutions and progress are stored locally. Advance through the nodes to unlock complex emergent simulations.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-500" />
            Live Playground
          </h4>
          <p className="text-sm leading-relaxed">
            A three-panel immersive environment with a high-performance editor and real-time p5.js canvas rendering.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Aesthetic Debugging
          </h4>
          <p className="text-sm leading-relaxed">
            Validate your logic through visual phenomena. If the algorithm is broken, the art will show it.
          </p>
        </div>
      </div>
    </main>
  );
}

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
