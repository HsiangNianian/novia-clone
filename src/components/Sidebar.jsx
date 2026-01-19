import React, { useState } from 'react';
import { Newspaper, FileText, Database, Map, Settings, Play, FastForward, Clock, Plus, Star, Pause, Hexagon } from 'lucide-react';

const Sidebar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Parsing the label to separate number and text for better styling control if needed
  const menuItems = [
    { id: '01', text: '资讯速递', sub: 'SYSTEM DASHBOARD', active: true },
    { id: '02', text: '虚数档案馆', sub: 'IMAGINARY ARCHIVES' },
    { id: '03', text: '人事档案', sub: 'PERSONNEL FILES' },
    { id: '04', text: '全景地图', sub: 'GLOBAL PANOPTICON' },
    { id: '05', text: '终端设置', sub: 'CONFIGURATION' },
  ];

  return (
    <div className="flex h-full z-50 sticky top-0 shrink-0 h-screen">
      {/* Left Icon Rail - Dark as per original */}
      <div className="w-14 bg-[#0a0a0a] flex flex-col items-center py-6 border-r border-[#222]">
        <div className="mb-8 text-white/80 hover:text-white transition-colors cursor-pointer group">
            <div className="w-6 h-6 border border-current rotate-45 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <div className="w-2 h-2 bg-current rounded-full"></div>
            </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 w-full items-center">
             {/* Text Indicators */}
             {['C', 'G', 'T', '.'].map((char, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-[10px] font-mono font-bold text-gray-600 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer">
                    {char}
                </div>
             ))}
             
             {/* Colored Dots */}
             <div className="flex flex-col items-center gap-3 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-50"></div>
             </div>
        </div>

        <div className="mt-auto flex flex-col gap-6 text-gray-600 mb-2">
           <Plus size={18} className="hover:text-white transition-colors cursor-pointer" />
           <Star size={18} className="hover:text-white transition-colors cursor-pointer" />
           <Clock size={18} className="hover:text-white transition-colors cursor-pointer" />
           <Settings size={18} className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Main Sidebar Panel - Changed to Light Theme */}
      <div className="w-64 bg-[#f5f5f5] text-black flex flex-col h-full border-r border-gray-300 shadow-2xl relative">
        
        {/* Logo Section - Black Background */}
        <div className="h-28 bg-black text-white p-6 flex flex-col justify-center relative overflow-hidden shrink-0">
           <div className="absolute right-0 top-0 p-2 opacity-20">
              <Hexagon size={64} strokeWidth={1} />
           </div>
           
           <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 border-2 border-white rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <div className="w-5 h-5 bg-white rotate-45"></div>
              </div>
              <div>
                  <h1 className="text-2xl font-bold tracking-[0.2em] font-mono leading-none mb-1">C.G.T.</h1>
                  <div className="text-[10px] text-gray-400 tracking-[0.3em] uppercase whitespace-nowrap">Coalition Gov</div>
              </div>
           </div>
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-6 h-6 border-l border-b border-white/20"></div>
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 flex flex-col">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`
                group flex items-center px-6 py-4 cursor-pointer transition-all duration-200 relative
                border-l-4 
                ${item.active 
                  ? 'bg-black text-white border-black shadow-[rgba(0,0,0,0.2)_0px_5px_15px]' 
                  : 'border-transparent text-gray-400 hover:bg-gray-200 hover:text-black hover:border-gray-400'}
              `}
            >
              <div className="flex-1 relative z-10">
                 <div className="flex items-baseline gap-3 mb-1">
                    <span className={`font-mono text-xl font-bold ${item.active ? 'text-white' : 'text-gray-400 group-hover:text-black transition-colors'}`}>
                        {item.id}
                    </span>
                    <span className="font-bold tracking-wider text-sm font-sc">
                        {item.text}
                    </span>
                 </div>
                 <div className={`text-[10px] font-mono tracking-widest uppercase ${item.active ? 'text-gray-400' : 'text-gray-400/60'}`}>
                    {item.sub}
                 </div>
              </div>
              
              {/* Active Indicator Arrow */}
              {item.active && (
                <div className="absolute right-4 w-1.5 h-1.5 bg-white rotate-45 animate-pulse"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer / BGM Section */}
        <div className="p-6 bg-[#eaeaea] border-t border-gray-300 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white"></div>
          
          <div className="bg-white p-4 border border-gray-300 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
               <span className="text-[10px] font-bold font-mono tracking-widest text-black">BGM PLAYER</span>
               {/* Visualizer */}
               <div className="flex gap-0.5 items-end h-3">
                    <div className="w-0.5 h-full bg-black animate-[pulse_0.5s_ease-in-out_infinite]"></div>
                    <div className="w-0.5 h-2/3 bg-black/60 animate-[pulse_0.7s_ease-in-out_infinite]"></div>
                    <div className="w-0.5 h-1/3 bg-black/30 animate-[pulse_0.6s_ease-in-out_infinite]"></div>
                    <div className="w-0.5 h-1/2 bg-black/80 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                </div>
            </div>
            
            <div className="flex items-center justify-between gap-3 mb-1">
               <div className="flex gap-2">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95"
                  >
                     {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                  </button>
                  <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors active:scale-95">
                     <FastForward size={12} fill="currentColor" />
                  </button>
               </div>
               
               <div className="flex-1 text-right overflow-hidden">
                   <div className="text-[10px] font-mono truncate font-bold">
                     Lifelike-Action Ale.. 
                   </div>
               </div>
            </div>
          </div>
          
          <div className="mt-6 text-[8px] text-gray-500 font-mono text-center leading-relaxed opacity-70">
            © 2211 COALITION GOVERNMENT<br/>
            TERM_ID: LAPLACE-01
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
