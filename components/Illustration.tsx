
import React from 'react';

interface IllustrationProps {
  visualStyle: 'bamboo' | 'paper-fluid' | 'paper-order' | 'woodblock' | 'commercial' | 'modern';
}

export const Illustration: React.FC<IllustrationProps> = ({ visualStyle }) => {
  const isBamboo = visualStyle === 'bamboo';
  const isFluid = visualStyle === 'paper-fluid';
  const isOrder = visualStyle === 'paper-order';
  const isWoodblock = visualStyle === 'woodblock';
  const isCommercial = visualStyle === 'commercial';
  const isModern = visualStyle === 'modern';

  return (
    <div className="w-full h-40 flex items-center justify-center overflow-hidden relative">
      <svg width="240" height="120" viewBox="0 0 240 120" className="transition-all duration-700">
        
        {/* Bamboo: Individual slips tied together */}
        <g className={`transition-opacity duration-500 ${isBamboo ? 'opacity-100' : 'opacity-0'}`} transform="translate(60, 10)">
             {[0, 1, 2, 3].map((i) => (
               <g key={i}>
                 <rect 
                  x={i * 30} 
                  y={5 + i%2 * 2} 
                  width="24" 
                  height="100" 
                  rx="1"
                  fill="#e8dec6" 
                  stroke="#8d7b68" 
                  strokeWidth="1"
                 />
                 {/* Text Simulation - Dashed lines */}
                 <line x1={i*30 + 12} y1="15" x2={i*30 + 12} y2="90" stroke="#57534e" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" />
               </g>
             ))}
             {/* Strings tying them */}
             <path d="M40 30 L150 30" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
             <path d="M40 80 L150 80" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </g>

        {/* Paper Fluid: Wei Jin Scrolls */}
        <g className={`transition-opacity duration-500 ${isFluid ? 'opacity-100' : 'opacity-0'}`} transform="translate(40, 20)">
            <path d="M10 10 Q 90 0, 170 10 L 170 80 Q 90 90, 10 80 Z" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />
            
            {/* Fluid strokes */}
            <path 
                d="M130 25 Q 120 45, 135 70" 
                stroke="#292524" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none"
            />
             <path 
                d="M90 20 Q 85 40, 100 60 T 90 85" 
                stroke="#292524" strokeWidth="3" strokeLinecap="round" opacity="0.7" fill="none"
            />
             {/* Red Seal */}
            <rect x="25" y="55" width="18" height="18" fill="#b91c1c" rx="1" className="opacity-70 mix-blend-multiply"/>
        </g>

        {/* Tang Order: Grid */}
        <g className={`transition-opacity duration-500 ${isOrder ? 'opacity-100' : 'opacity-0'}`} transform="translate(50, 15)">
             <rect x="0" y="0" width="140" height="90" fill="none" stroke="#e7e5e4" strokeWidth="1" />
             {/* Vertical Grid Lines */}
             <line x1="35" y1="0" x2="35" y2="90" stroke="#e7e5e4" strokeWidth="1" />
             <line x1="70" y1="0" x2="70" y2="90" stroke="#e7e5e4" strokeWidth="1" />
             <line x1="105" y1="0" x2="105" y2="90" stroke="#e7e5e4" strokeWidth="1" />
             
             {/* Text Blocks - Uniform */}
             {[17, 52, 87, 122].map((x) => (
                 <g key={x}>
                     <circle cx={x} cy="20" r="3" fill="#44403c" />
                     <circle cx={x} cy="35" r="3" fill="#44403c" />
                     <circle cx={x} cy="50" r="3" fill="#44403c" />
                     <circle cx={x} cy="65" r="3" fill="#44403c" />
                 </g>
             ))}
        </g>

        {/* Woodblock Song: Fish Tail */}
        <g className={`transition-opacity duration-500 ${isWoodblock ? 'opacity-100' : 'opacity-0'}`} transform="translate(60, 15)">
            <rect x="0" y="0" width="120" height="90" fill="none" stroke="#292524" strokeWidth="0.5" />
            {/* Banxin (Center Fold) */}
            <rect x="58" y="0" width="4" height="90" fill="#f5f5f4" stroke="#292524" strokeWidth="0.5" />
            {/* Fish Tail */}
            <path d="M60 20 L 52 28 L 60 28" fill="#292524" />
            <path d="M60 70 L 52 62 L 60 62" fill="#292524" />
            
            {/* Dense Text Simulation */}
            <path d="M10 10 L 10 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
            <path d="M25 10 L 25 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
            <path d="M40 10 L 40 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
            
            <path d="M80 10 L 80 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
            <path d="M95 10 L 95 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
            <path d="M110 10 L 110 80" stroke="#292524" strokeWidth="4" strokeDasharray="2 2" />
        </g>

        {/* Commercial Ming */}
        <g className={`transition-opacity duration-500 ${isCommercial ? 'opacity-100' : 'opacity-0'}`} transform="translate(50, 15)">
             {/* Rougher lines */}
             <path d="M20 10 L 20 80" stroke="#44403c" strokeWidth="6" strokeLinecap="square" strokeDasharray="15 5" />
             <path d="M50 10 L 50 80" stroke="#44403c" strokeWidth="7" strokeLinecap="square" strokeDasharray="10 8" />
             <path d="M80 10 L 80 80" stroke="#44403c" strokeWidth="5" strokeLinecap="square" strokeDasharray="20 4" />
             <path d="M110 10 L 110 80" stroke="#44403c" strokeWidth="6" strokeLinecap="square" strokeDasharray="12 6" />
        </g>

        {/* Qing/Modern: Airy */}
        <g className={`transition-opacity duration-500 ${isModern ? 'opacity-100' : 'opacity-0'}`} transform="translate(45, 15)">
             {/* Large widely spaced blocks */}
             <rect x="0" y="0" width="25" height="25" fill="#d6d3d1" rx="2" />
             <rect x="0" y="55" width="25" height="25" fill="#d6d3d1" rx="2" />
             
             <rect x="55" y="0" width="25" height="25" fill="#d6d3d1" rx="2" />
             <rect x="55" y="55" width="25" height="25" fill="#d6d3d1" rx="2" />

             <rect x="110" y="0" width="25" height="25" fill="#d6d3d1" rx="2" />
             <rect x="110" y="55" width="25" height="25" fill="#d6d3d1" rx="2" />
        </g>

      </svg>
    </div>
  );
};
