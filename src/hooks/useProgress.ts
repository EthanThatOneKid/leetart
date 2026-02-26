'use client';

import { useLocalStorage } from './useLocalStorage';

export function useProgress() {
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>('completed-challenges', []);

  const toggleComplete = (id: string) => {
    setCompletedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isCompleted = (id: string) => completedIds.includes(id);

  return { completedIds, toggleComplete, isCompleted };
}
