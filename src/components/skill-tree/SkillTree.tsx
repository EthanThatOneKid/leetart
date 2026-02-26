'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { skillTree } from '@/data/challenges';
import { useProgress } from '@/hooks/useProgress';
import { Code, Trophy, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connections = [
  ['node-1', 'node-2'],
  ['node-2', 'node-3'],
  ['node-2', 'node-4'],
  ['node-3', 'node-5'],
  ['node-4', 'node-5'],
  ['node-5', 'node-6'],
  ['node-6', 'node-7'],
  ['node-6', 'node-8'],
];

export const SkillTree: React.FC = () => {
  const { isCompleted } = useProgress();

  return (
    <div className="relative w-full min-h-[800px] p-20 bg-black overflow-hidden flex justify-center">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map(([fromId, toId], i) => {
          const from = skillTree.find((n) => n.id === fromId);
          const to = skillTree.find((n) => n.id === toId);
          if (!from || !to) return null;

          return (
            <motion.line
              key={`${fromId}-${toId}`}
              x1={from.position.x}
              y1={from.position.y}
              x2={to.position.x}
              y2={to.position.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      <div className="relative w-full h-full">
        {skillTree.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: node.position.x, top: node.position.y }}
          >
            <div className="relative flex flex-col items-center">
              <div className={cn(
                "w-16 h-16 rounded-full bg-zinc-900 border-2 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-black/50 z-10 overflow-hidden relative",
                node.challenges.every(c => isCompleted(c.id)) ? "border-emerald-500/50" : "border-white/20"
              )}>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {node.challenges.every(c => isCompleted(c.id)) ? (
                  <Trophy className="w-8 h-8 text-emerald-500" />
                ) : (
                  <Code className="w-8 h-8 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                )}
              </div>

              <div className="mt-4 absolute top-full w-48 text-center pointer-events-none">
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{node.title}</h3>
                <div className="flex justify-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {node.challenges.map((c) => (
                    <Link
                      key={c.id}
                      href={`/challenge/${c.id}`}
                      className="pointer-events-auto relative"
                    >
                      <div
                        className={cn(
                          "w-3 h-3 rounded-full border hover:scale-125 transition-all flex items-center justify-center",
                          isCompleted(c.id) ? "bg-emerald-500 border-emerald-400" : (
                            c.difficulty === 'Easy' ? 'bg-emerald-500/20 border-emerald-500/40 hover:bg-emerald-500/50' :
                            c.difficulty === 'Medium' ? 'bg-amber-500/20 border-amber-500/40 hover:bg-amber-500/50' :
                            'bg-rose-500/20 border-rose-500/40 hover:bg-rose-500/50'
                          )
                        )}
                        title={c.title}
                      >
                        {isCompleted(c.id) && <CheckCircle2 className="w-2 h-2 text-white" />}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
