
import React, { useState, useMemo, useEffect } from 'react';
import { ScrollText, Info, Sparkles, Feather, History, Copyright } from 'lucide-react';
import { ERAS, INITIAL_GENERATED_CONTENT } from './constants';
import { VerticalText } from './components/VerticalText';
import { Illustration } from './components/Illustration';
import { generateEraText } from './services/geminiService';
import { GeneratedContent } from './types';

function App() {
  // Slider now represents the Timeline (0 to 100)
  const [timelineProgress, setTimelineProgress] = useState<number>(0);
  const [content, setContent] = useState<GeneratedContent>(INITIAL_GENERATED_CONTENT);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [debouncedProgress, setDebouncedProgress] = useState(0);

  // Smooth animation lag for values
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedProgress(timelineProgress), 20);
    return () => clearTimeout(timer);
  }, [timelineProgress]);

  // Determine current era
  const currentEraIndex = useMemo(() => {
    const totalEras = ERAS.length;
    const index = Math.min(Math.floor((timelineProgress / 100) * totalEras), totalEras - 1);
    return index;
  }, [timelineProgress]);

  const currentEra = ERAS[currentEraIndex];

  const handleGenerateText = async () => {
    setIsGenerating(true);
    const newContent = await generateEraText(currentEra.nameCN);
    if (newContent) {
      setContent(newContent);
    }
    setIsGenerating(false);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimelineProgress(parseFloat(e.target.value));
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center p-4 lg:p-6 font-serif bg-gradient-to-br from-[#fdfbf7] to-[#f5f0e6]">
      
      {/* Header Section - Compact */}
      <header className="flex-none w-full max-w-[1400px] mb-4 flex flex-row justify-between items-end border-b border-stone-300/60 pb-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-900 text-[#fdfbf7] rounded-sm shadow-md flex items-center justify-center border-2 border-[#fdfbf7] ring-1 ring-red-900/30">
            <span className="font-[Ma_Shan_Zheng] text-xl leading-none pt-0.5">文</span>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-stone-900 font-[Noto_Serif_SC] tracking-wide leading-none mb-0.5">
              古籍行距器
            </h1>
            <p className="text-stone-500 text-[10px] tracking-[0.2em] font-light uppercase font-[Cinzel]">
              Spacing of the Ancients
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-0.5 text-right">
             <div className="flex items-center gap-2 text-[10px] text-stone-400 font-[Cinzel] tracking-widest uppercase">
                <span>Designed & Developed by</span>
                <span className="text-red-900 font-bold border-b border-red-900/30">Louise Lee</span>
             </div>
             <button 
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-stone-500 hover:text-stone-800 transition-colors text-[10px] flex items-center gap-1 uppercase tracking-wider font-sans font-bold"
            >
              {showTranslation ? 'Hide Translation' : 'View Translation'}
              <Info size={12} />
            </button>
        </div>
      </header>

      {/* Main Content - Flex/Grid to fit screen */}
      <main className="flex-1 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 pb-2">
        
        {/* Left Column: Controls & History */}
        <div className="lg:col-span-5 flex flex-col h-full gap-4 min-h-0">
          
          {/* Era Card - Scrollable Content */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-t-sm rounded-b-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white ring-1 ring-stone-200 transition-all duration-500 flex flex-col min-h-0 relative overflow-hidden group hover:shadow-lg">
             {/* Decorative Corner */}
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <History size={64} className="text-stone-900" />
             </div>

             {/* Era Title */}
             <div className="flex-none relative z-10 border-b border-stone-100 pb-3 mb-4">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] font-bold text-red-900/70 tracking-widest uppercase font-[Cinzel]">
                        Historical Era {currentEraIndex + 1} / {ERAS.length}
                    </span>
                    <span className="font-mono text-2xl text-stone-200 font-black tracking-tighter opacity-50">
                        {currentEra.spacingValue.toFixed(1)}
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-stone-800 font-[Ma_Shan_Zheng] leading-tight mb-0.5">
                    {currentEra.nameCN}
                </h2>
                <h3 className="text-xs text-stone-500 font-[Cinzel] tracking-wide">
                    {currentEra.nameEN}
                </h3>
             </div>
            
            {/* Visual Illustration of Era */}
            <div className="flex-none mb-4 rounded border border-stone-100 bg-stone-50/50 p-2 shadow-inner flex justify-center">
               <div className="transform scale-90">
                 <Illustration visualStyle={currentEra.visualStyle} />
               </div>
            </div>

            {/* Description Text - Scrollable */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-0">
              <p className="text-stone-700 leading-loose text-justify font-light text-sm mb-4">
                {currentEra.descriptionCN}
              </p>
              <p className="text-stone-500 text-xs italic border-l-2 border-red-900/20 pl-3 leading-relaxed">
                {currentEra.descriptionEN}
              </p>
            </div>
            
            {/* Credits Footer inside card */}
            <div className="flex-none mt-4 pt-3 border-t border-dashed border-stone-200 text-[9px] text-stone-300 flex justify-between uppercase tracking-widest font-[Cinzel]">
                <span>Typographic Research</span>
                <span className="flex items-center gap-1">
                    <Copyright size={10} /> Louise Lee
                </span>
            </div>
          </div>

          {/* Controls Container - Fixed Height */}
          <div className="flex-none bg-stone-900 text-[#f5f5f4] p-5 rounded-xl shadow-xl flex flex-col gap-5 relative overflow-hidden">
             
             {/* Subtle Texture on Control Panel */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

             {/* Timeline Slider */}
             <div className="relative z-10">
                <label className="flex justify-between text-[10px] font-bold tracking-[0.2em] text-stone-400 mb-3 uppercase font-[Cinzel]">
                    <span>Timeline Control</span>
                    <span className="text-red-400">Drag to Travel</span>
                </label>
                
                <div className="relative h-12 flex items-center select-none touch-none">
                    {/* Track */}
                    <div className="absolute w-full h-1 bg-stone-700 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-stone-600 to-red-600 transition-all duration-75" 
                            style={{width: `${timelineProgress}%`}} 
                        />
                    </div>
                    
                    {/* Ticks */}
                    <div className="absolute w-full flex justify-between px-1 pointer-events-none">
                        {ERAS.map((era, idx) => (
                            <div key={era.id} className="flex flex-col items-center gap-2">
                                <div className={`w-0.5 h-2 ${idx <= currentEraIndex ? 'bg-red-500/50' : 'bg-stone-600'} transition-colors duration-300`} />
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <input
                        type="range"
                        min="0"
                        max="99.9"
                        step="0.1"
                        value={timelineProgress}
                        onChange={handleSliderChange}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    
                    {/* Thumb */}
                    <div 
                        className="absolute h-6 w-6 bg-stone-100 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] pointer-events-none transition-all duration-75 ease-out flex items-center justify-center z-10 border-4 border-stone-800"
                        style={{left: `calc(${timelineProgress}% - 12px)`}}
                    >
                        <div className="w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                    </div>
                </div>
                
                <div className="flex justify-between text-[9px] text-stone-500 font-mono tracking-widest mt-1">
                    <span>QIN DYNASTY</span>
                    <span>QING DYNASTY</span>
                </div>
             </div>

             {/* AI Button */}
             <button
                onClick={handleGenerateText}
                disabled={isGenerating}
                className={`
                    relative group w-full py-3 px-4 rounded border border-stone-700
                    flex items-center justify-between
                    transition-all duration-300 overflow-hidden
                    ${isGenerating ? 'opacity-50 cursor-wait' : 'hover:bg-stone-800 hover:border-stone-600 hover:shadow-lg'}
                `}
            >
                <div className="flex flex-col items-start relative z-10">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0.5 font-[Cinzel]">
                        AI Content Generation
                    </span>
                    <span className="text-xs font-bold text-stone-200 flex items-center gap-2">
                        {isGenerating ? 'Inscribing...' : 'Generate New Text'} 
                        {!isGenerating && <Sparkles size={12} className="text-yellow-500/80" />}
                    </span>
                </div>
                <Feather className={`text-stone-600 transition-transform duration-500 ${isGenerating ? 'animate-bounce' : 'group-hover:rotate-12 group-hover:scale-110'}`} size={18} />
            </button>
          </div>

        </div>

        {/* Right Column: The "Book" Preview */}
        {/* Adjusted col-span to 7 to be narrower, reducing whitespace */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-0 relative group perspective-1000">
            
            {/* Main Paper Container */}
            <div className="flex-1 w-full bg-[#fdfcf8] rounded shadow-2xl overflow-hidden relative border border-stone-200/50 transition-all duration-700 ease-out transform origin-left hover:scale-[1.002]">
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] z-10"></div>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(120,113,108,0.15)] z-20"></div>

                {/* Vertical Text Component */}
                <div className="w-full h-full relative z-0">
                    <VerticalText 
                        text={content.body} 
                        lineHeight={currentEra.spacingValue}
                        visualStyle={currentEra.visualStyle}
                    />
                </div>

                {/* Metadata Overlay (Title & Seal) */}
                <div className="absolute top-6 right-6 z-30 flex flex-col items-end pointer-events-none mix-blend-multiply opacity-80">
                    <div className="flex flex-col items-center gap-2 writing-vertical-rl">
                         <div className="border-l border-r border-stone-800/80 px-1 py-3 font-serif text-stone-900 tracking-[0.2em] font-bold shadow-sm bg-[#fdfcf8] text-sm">
                            {content.title}
                         </div>
                    </div>
                </div>

                {/* Translation Overlay */}
                <div className={`
                    absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 z-40 
                    transition-all duration-500 ease-in-out px-6 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]
                    ${showTranslation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                `}>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 mb-1 text-red-900/60 uppercase tracking-widest text-[10px] font-bold font-[Cinzel]">
                            <Info size={10} />
                            English Translation
                        </div>
                        <p className="text-stone-700 text-sm leading-relaxed font-[Noto_Serif_SC]">
                            {content.translation}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom decoration/shadow */}
            <div className="h-4 w-[90%] mx-auto bg-stone-900/5 rounded-[50%] blur-xl mt-[-8px]"></div>

        </div>

      </main>
    </div>
  );
}

export default App;
