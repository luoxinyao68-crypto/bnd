import React from 'react';
import { Character } from '../types';

export const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="bg-stone-50 border border-stone-200 p-6 rounded shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold serif text-stone-800 mb-1">{character.name}</h3>
      <div className="text-xs uppercase tracking-wide text-red-700 font-semibold mb-3">{character.role}</div>
      <p className="text-stone-600 text-sm leading-relaxed">{character.description}</p>
    </div>
  );
};