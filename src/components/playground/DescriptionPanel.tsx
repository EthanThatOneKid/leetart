'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Difficulty } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface DescriptionPanelProps {
  title: string;
  description: string;
  artworkDescription: string;
  difficulty: Difficulty;
}

export const DescriptionPanel: React.FC<DescriptionPanelProps> = ({
  title,
  description,
  artworkDescription,
  difficulty
}) => {
  return (
    <div className="h-full flex flex-col bg-zinc-950 border-r border-white/10 p-6 overflow-y-auto">
      <div className="mb-6">
        <Badge difficulty={difficulty} />
        <h1 className="text-2xl font-bold text-white mt-2">{title}</h1>
      </div>

      <div className="prose prose-invert prose-sm max-w-none mb-8">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className="mt-auto">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Aesthetic Goal</h3>
        <p className="text-sm text-zinc-400 italic">
          {artworkDescription}
        </p>
      </div>
    </div>
  );
};
