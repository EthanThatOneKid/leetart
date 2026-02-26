'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { skillTree } from '@/data/challenges';
import { DescriptionPanel } from '@/components/playground/DescriptionPanel';
import { EditorPanel } from '@/components/playground/EditorPanel';
import { CodeRunner } from '@/components/playground/CodeRunner';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useProgress } from '@/hooks/useProgress';
import { ArrowLeft, Play, Save, RotateCcw, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const challenge = skillTree
    .flatMap(node => node.challenges)
    .find(c => c.id === id);

  const [code, setCode, isStorageLoaded] = useLocalStorage<string>(`solution-${id}`, challenge?.starterCode || '');
  const { isCompleted, toggleComplete } = useProgress();

  useEffect(() => {
    if (!challenge) {
      router.push('/');
    }
  }, [challenge, router]);

  if (!challenge || !isStorageLoaded) return null;

  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">
      {/* Header */}
      <header className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-950">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-xs font-mono text-zinc-400">{challenge.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCode(challenge.starterCode)}
            className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all"
            title="Reset to Starter Code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleComplete(challenge.id)}
            className={`flex items-center gap-2 px-3 py-1 text-xs font-bold rounded transition-all ${
              isCompleted(challenge.id)
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            {isCompleted(challenge.id) ? (
              <CheckCircle className="w-3 h-3" />
            ) : (
              <Save className="w-3 h-3" />
            )}
            {isCompleted(challenge.id) ? 'COMPLETED' : 'MARK AS COMPLETE'}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Panel 1: Description */}
        <div className="w-1/4 min-w-[300px]">
          <DescriptionPanel
            title={challenge.title}
            description={challenge.description}
            artworkDescription={challenge.artworkDescription}
            difficulty={challenge.difficulty}
          />
        </div>

        {/* Panel 2: Editor */}
        <div className="flex-1 min-w-[400px]">
          <EditorPanel
            code={code}
            onChange={(val) => setCode(val || '')}
          />
        </div>

        {/* Panel 3: Canvas */}
        <div className="w-1/3 min-w-[350px] bg-zinc-900 p-4">
          <div className="h-full flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Play className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                Live Preview
              </span>
            </div>
            <div className="flex-1 relative">
              <CodeRunner code={code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
