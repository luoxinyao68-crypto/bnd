import React from 'react';
import { Chapter } from '../types';

interface TimelineProps {
  chapters: Chapter[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ chapters, currentIndex, onSelect }) => {
  return (
    <div className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-50 h-[80vh] w-64">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-stone-400 to-transparent"></div>
      
      <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide py-10 space-y-6">
        {chapters.map((chapter, index) => {
          const isActive = index === currentIndex;
          const isPast = index < currentIndex;
          
          return (
            <button
              key={chapter.id}
              onClick={() => onSelect(index)}
              className={`group flex items-center w-full text-left transition-all duration-300 relative pl-8`}
            >
              <div 
                className={`
                  absolute left-[13px] w-3 h-3 rounded-full border-2 transition-all duration-300
                  ${isActive ? 'bg-red-600 border-red-600 scale-125' : isPast ? 'bg-stone-400 border-stone-400' : 'bg-transparent border-stone-300'}
                `}
              />
              <div className={`transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}>
                <span className={`block text-xs font-sans mb-1 transition-colors ${isActive ? 'text-red-600 font-bold' : 'text-stone-500'}`}>
                   {chapter.year.split(' ')[0]}
                </span>
                <span className={`block serif text-sm ${isActive ? 'text-stone-900 font-bold text-base' : 'text-stone-400 group-hover:text-stone-600'}`}>
                  {chapter.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};