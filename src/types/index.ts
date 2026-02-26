export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Challenge {
  id: string;
  title: string;
  level: number;
  difficulty: Difficulty;
  description: string;
  starterCode: string;
  artworkDescription: string;
}

export interface SkillNode {
  id: string;
  title: string;
  description: string;
  challenges: Challenge[];
  position: { x: number; y: number };
}
