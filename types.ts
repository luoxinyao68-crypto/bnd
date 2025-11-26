export interface Chapter {
  id: number;
  title: string;
  year: string;
  location: string;
  summary: string;
  content: string;
  quote: string;
  themeColor: 'modern' | 'historical-calm' | 'historical-tense' | 'historical-tragic';
  icon: string;
}

export interface Character {
  name: string;
  role: string;
  description: string;
}

export enum ViewMode {
  STORY = 'STORY',
  CHARACTERS = 'CHARACTERS',
  MAP = 'MAP'
}