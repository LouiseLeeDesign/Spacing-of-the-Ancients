
import React from 'react';

interface VerticalTextProps {
  text: string;
  lineHeight: number;
  visualStyle: 'bamboo' | 'paper-fluid' | 'paper-order' | 'woodblock' | 'commercial' | 'modern';
}

export const VerticalText: React.FC<VerticalTextProps> = ({ text, lineHeight, visualStyle }) => {
  const isBamboo = visualStyle === 'bamboo';
  const isSong = visualStyle === 'woodblock';
  const isModern = visualStyle === 'modern';
  
  // Calculate dynamic font settings based on style
  let fontFamily = 'font-serif';
  let opacity = 'opacity-100';
  let letterSpacing = '0em';
  let fontWeight = 'font-normal';
  let scale = 'scale-100';

  if (isBamboo) {
    fontFamily = 'font-[Zhi_Mang_Xing]'; 
    scale = 'scale-[0.9] origin-top'; // Bamboo slips often had slightly smaller characters relative to strip
  } else if (visualStyle === 'paper-fluid') {
    fontFamily = 'font-[Ma_Shan_Zheng]'; 
    opacity = 'opacity-80'; // Ink absorbs into paper
  } else if (visualStyle === 'paper-order') {
    fontFamily = 'font-[Noto_Serif_SC]'; 
    fontWeight = 'font-medium';
    letterSpacing = '0.05em';
  } else if (isSong) {
    fontFamily = 'font-[Noto_Serif_SC]'; 
    fontWeight = 'font-bold';
    letterSpacing = '-0.02em'; 
    scale = 'scale-x-[0.95]'; // Song style often slightly condensed
  } else if (visualStyle === 'commercial') {
    fontFamily = 'font-serif';
    fontWeight = 'font-bold';
    opacity = 'opacity-90';
  } else {
    fontFamily = 'font-[Noto_Serif_SC]'; 
    fontWeight = 'font-light';
    letterSpacing = '0.15em';
  }

  return (
    <div 
      className={`
        relative h-full w-full overflow-x-auto overflow-y-hidden 
        p-8 md:p-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isBamboo ? 'bg-[#e8dec6]' : 'bg-transparent'}
      `}
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
      }}
    >
        {/* === Background Textures === */}
        
        {/* Bamboo Slips Gradient */}
        <div 
            className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ${isBamboo ? 'opacity-100' : 'opacity-0'}`}
            style={{
                 backgroundImage: `repeating-linear-gradient(to left, transparent, transparent ${lineHeight - 0.2}em, rgba(0,0,0,0.1) ${lineHeight - 0.1}em, rgba(0,0,0,0.15) ${lineHeight}em)`,
            }}
        />

        {/* Song Dynasty Fold Line (Banxin) */}
        <div className={`absolute inset-y-0 right-12 w-px border-r border-dashed border-stone-300 pointer-events-none transition-opacity duration-500 ${isSong ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1/2 -right-1.5 w-3 h-3 border border-stone-800 rotate-45 transform -translate-y-1/2 bg-transparent" />
        </div>

        {/* === Credits Seal (Louise Lee) === */}
        <div className="fixed bottom-8 left-8 z-20 pointer-events-none opacity-80 mix-blend-multiply transition-all duration-1000">
             <div className="w-12 h-12 border-2 border-red-800 rounded-sm p-1 flex items-center justify-center bg-red-900/5 rotate-[-2deg]">
                <div className="w-full h-full border border-red-800 flex flex-col items-center justify-center leading-none text-[8px] text-red-900 font-bold font-serif shadow-sm">
                    <span>LOU</span>
                    <span>ISE</span>
                    <span>LEE</span>
                </div>
             </div>
        </div>


        {/* === Main Text Layer === */}
        <div
            className={`
                relative z-10 text-2xl md:text-4xl text-stone-800/90
                transition-all duration-700
                ${fontFamily} ${opacity} ${fontWeight} ${scale}
            `}
            style={{
                lineHeight: `${lineHeight}`,
                letterSpacing: letterSpacing,
                textShadow: isBamboo ? 'none' : '0 0 1px rgba(0,0,0,0.05)' // Subtle ink bleed simulation
            }}
        >
            {text}
        </div>
    </div>
  );
};
