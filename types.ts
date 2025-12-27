
export type Language = 'en' | 'zh';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  tags: string[];
  link: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}
