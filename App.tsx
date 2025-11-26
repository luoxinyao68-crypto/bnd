import React, { useState, useEffect } from 'react';
import { Timeline } from './components/Timeline';
import { ChapterCard } from './components/ChapterCard';
import { CharacterCard as CharCard } from './components/CharacterCard';
import { chapters, characters } from './data';
import { ViewMode } from './types';
import { Book, Map, Users, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.STORY);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Handle scroll to update active chapter
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowScrollHint(false);
      
      // Simple logic to find the visible chapter based on scroll position
      // In a production app, IntersectionObserver is better
      const chapterElements = document.querySelectorAll('[data-chapter-index]');
      let activeIndex = 0;
      
      chapterElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          activeIndex = Number(el.getAttribute('data-chapter-index'));
        }
      });
      
      // Only update if we are in Story mode and scrolling manually
      // We rely on the button click to set state, this is just for sync visual
      if(viewMode === ViewMode.STORY) {
          // Sync logic can be tricky with two-way binding, relying on click for main nav
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const scrollToChapter = (index: number) => {
    setCurrentChapterIndex(index);
    const element = document.getElementById(`chapter-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-red-200 selection:text-red-900">
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-[#fdfbf7]/90 backdrop-blur-sm z-40 border-b border-stone-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-white font-serif font-bold">
            灯
          </div>
          <h1 className="text-xl font-bold tracking-tight text-stone-900 serif">百年灯 <span className="text-sm font-normal text-stone-500 hidden sm:inline">| 跨越百年的精神对话</span></h1>
        </div>

        <div className="flex gap-2 bg-stone-100 p-1 rounded-lg">
          <button 
            onClick={() => setViewMode(ViewMode.STORY)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === ViewMode.STORY ? 'bg-white shadow text-red-800' : 'text-stone-500 hover:text-stone-800'}`}
          >
            <Book size={16} /> 故事
          </button>
          <button 
            onClick={() => setViewMode(ViewMode.CHARACTERS)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === ViewMode.CHARACTERS ? 'bg-white shadow text-red-800' : 'text-stone-500 hover:text-stone-800'}`}
          >
            <Users size={16} /> 人物
          </button>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        
        {/* Story View */}
        {viewMode === ViewMode.STORY && (
          <div className="relative">
            <Timeline 
              chapters={chapters} 
              currentIndex={currentChapterIndex} 
              onSelect={scrollToChapter} 
            />

            <div className="lg:pl-80 px-4 md:px-8 max-w-6xl mx-auto">
              {/* Intro Hero */}
              <div className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-20 relative">
                 <h1 className="text-6xl md:text-8xl font-black serif text-stone-900 mb-6 tracking-wider">
                   百年灯
                 </h1>
                 <p className="text-xl md:text-2xl text-stone-600 font-serif max-w-2xl leading-relaxed">
                   从 <span className="text-red-800 font-bold">1907</span> 到 <span className="text-blue-800 font-bold">2025</span><br/>
                   一场关于“德”与“力”，私恩与大义的跨时空对话。
                 </p>
                 
                 {showScrollHint && (
                   <div className="absolute bottom-10 animate-bounce flex flex-col items-center text-stone-400">
                     <span className="text-sm mb-2">向下滚动开始</span>
                     <ChevronDown />
                   </div>
                 )}
              </div>

              {/* Chapters List */}
              <div className="space-y-24">
                {chapters.map((chapter, index) => (
                  <div 
                    key={chapter.id} 
                    id={`chapter-${index}`}
                    data-chapter-index={index}
                    className="scroll-mt-32"
                    onMouseEnter={() => setCurrentChapterIndex(index)}
                  >
                    <ChapterCard 
                      chapter={chapter} 
                      isActive={currentChapterIndex === index}
                    />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-32 text-center py-12 border-t border-stone-200">
                <p className="text-stone-500 font-serif italic text-lg">
                  “革命不死，火种不灭。人间已醒，精神永存。”
                </p>
                <div className="mt-8 text-sm text-stone-400">
                  基于小说《百年灯》改编可视化
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Characters View */}
        {viewMode === ViewMode.CHARACTERS && (
          <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold serif text-stone-900 mb-4">历史群像</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                在这场跨越百年的对话中，每一个名字都代表着一种抉择，一种信仰。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((char, idx) => (
                <CharCard key={idx} character={char} />
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;