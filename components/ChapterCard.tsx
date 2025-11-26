import React, { useRef, useEffect } from 'react';
import { Chapter } from '../types';
import { Monitor, Coffee, BookOpen, Swords, Building, Flame, ShieldAlert, Skull, Sun } from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
  isActive: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Monitor, Coffee, BookOpen, Sword: Swords, Building, Flame, ShieldAlert, Skull, Sun
};

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, isActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[chapter.icon] || BookOpen;

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'modern':
        return 'bg-blue-50 border-blue-200 text-slate-800';
      case 'historical-calm':
        return 'bg-[#f4ebd9] border-[#d4c5a9] text-stone-800 sepia-[.3]'; // Parchment look
      case 'historical-tense':
        return 'bg-stone-200 border-stone-400 text-stone-900';
      case 'historical-tragic':
        return 'bg-gradient-to-br from-stone-900 to-red-950 border-red-900 text-stone-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  const isDark = chapter.themeColor === 'historical-tragic';

  return (
    <div 
      ref={cardRef}
      className={`
        relative w-full max-w-4xl mx-auto my-12 p-8 rounded-lg shadow-xl border-2 transition-all duration-700
        ${getThemeStyles(chapter.themeColor)}
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50 blur-[1px]'}
      `}
    >
      <div className="flex items-center justify-between mb-6 border-b border-current pb-4 border-opacity-30">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${isDark ? 'bg-red-900/50' : 'bg-black/5'}`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest opacity-70 font-sans">{chapter.year} | {chapter.location}</h3>
            <h2 className="text-3xl font-bold serif">{chapter.title}</h2>
          </div>
        </div>
        <div className="text-4xl font-serif opacity-20">
          {String(chapter.id).padStart(2, '0')}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
           <p className={`text-lg leading-relaxed font-sans ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {chapter.content}
           </p>
        </div>
        
        <div className={`flex flex-col justify-center p-6 rounded italic serif border-l-4 ${isDark ? 'bg-black/30 border-red-600' : 'bg-black/5 border-stone-500'}`}>
          <p className="text-xl font-medium mb-4">
            “{chapter.quote}”
          </p>
          <span className="text-sm opacity-60 text-right">— 关键台词</span>
        </div>
      </div>

      {/* Visual Decoration for Historical Themes */}
      {chapter.themeColor.includes('historical') && (
        <div className="absolute top-0 right-0 pointer-events-none opacity-10 mix-blend-multiply">
           <svg width="200" height="200" viewBox="0 0 100 100">
             <path d="M10,10 Q50,50 90,10 T90,90 T10,90" fill="none" stroke="currentColor" strokeWidth="2" />
           </svg>
        </div>
      )}
    </div>
  );
};