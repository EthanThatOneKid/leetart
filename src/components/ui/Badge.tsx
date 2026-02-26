import React from 'react';
import { Difficulty } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Badge = ({ difficulty }: { difficulty: Difficulty }) => {
  return (
    <span className={cn(
      "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
      difficulty === 'Easy' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
      difficulty === 'Medium' ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
      "bg-rose-500/10 text-rose-500 border border-rose-500/20"
    )}>
      {difficulty}
    </span>
  );
};
