import React from 'react';
import { Newspaper, FileText, Database, Map, Settings, Play, FastForward, Clock, Plus, Star, Pause } from 'lucide-react';

const Sidebar = () => {
  // Parsing the label to separate number and text for better styling control if needed
  const menuItems = [
    { id: '01', text: '资讯速递', sub: 'NEWS EXPRESS', active: true },
    { id: '02', text: '虚数档案馆', sub: 'IMAGINARY ARCHIVES' },
    { id: '03', text: '人事档案', sub: 'PERSONNEL FILES' },
    { id: '04', text: '全景地图', sub: 'GLOBAL PANOPTICON' },
    { id: '05', text: '终端设置', sub: 'CONFIGURATION' },
  ];

  return (
    <div className="flex h-full z-20 sticky top-0">
      {/* Left Icon Rail - Dark as per original */}
      <div className="w-12 bg-[#0d0d0d] flex flex-col items-center py-6 border-r border-[#222]">
        <div className="mb-8 text-white/50 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-current rotate-45"></div>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 text-[10px] font-mono font-bold select-none">
             {/* Text Indicators */}
             {['C', 'C', 'C', 'C'].map((char, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center text-gray-600 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer">
                    {char}
                </div>
             ))}
             
             {/* Colored Dots */}
             <div className="flex flex-col items-center gap-4 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
             </div>
        </div>

        <div className="mt-auto flex flex-col gap-6 text-gray-600 mb-2">
           <Plus size={16} className="hover:text-white transition-colors cursor-pointer" />
           <Star size={16} className="hover:text-white transition-colors cursor-pointer" />
           <Clock size={16} className="hover:text-white transition-colors cursor-pointer" />
           <Settings size={16} className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Main Sidebar Panel - Changed to Light Theme */}
      <div className="w-64 bg-[#f0f0f0] text-black flex flex-col h-full border-r border-gray-200">
        
        {/* Logo Section - Black Background */}
        <div className="h-24 bg-black text-white p-6 flex flex-col justify-center relative overflow-hidden">
           <div className="flex items-center gap-3 relative z-10">
              <div className="w-8 h-8 border-2 border-white rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rotate-45"></div>
              </div>
              <div>
                  <h1 className="text-xl font-bold tracking-widest font-mono">C.G.T.</h1>
                  <div className="text-[9px] text-gray-400 tracking-[0.2em] uppercase">Coalition Gov</div>
              </div>
           </div>
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-4 h-4 border-l border-b border-white/20"></div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-8 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`
                group flex items-center px-8 py-5 cursor-pointer transition-all duration-300 relative
                ${item.active ? 'bg-[#1a1a1a] text-white shadow-lg z-10' : 'text-gray-400 hover:text-black hover:bg-black/5'}
              `}
            >
              <div className="flex-1">
                 <div className="flex items-baseline gap-3 mb-1">
                    <span className={`font-mono text-xl font-bold ${item.active ? 'text-white' : 'text-gray-300 group-hover:text-gray-500 transition-colors'}`}>
                        {item.id}
                    </span>
                    <span className="font-bold tracking-wide text-lg font-sc">
                        {item.text}
                    </span>
                 </div>
                 <div className={`text-[10px] font-mono tracking-widest uppercase ${item.active ? 'opacity-60' : 'opacity-40'}`}>
                    {item.sub}
                 </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Footer / BGM Section */}
        <div className="p-6 border-t border-gray-200 bg-[#e5e5e5]/30">
          <div className="bg-white p-3 border border-gray-300 shadow-sm relative group">
            <div className="flex justify-between items-center mb-3">
               <span className="text-[10px] font-bold font-mono tracking-widest text-black">BGM PLAYER</span>
               {/* Visualizer */}
               <div className="flex gap-0.5 items-end h-3">
                    <div className="w-0.5 h-full bg-black animate-pulse"></div>
                    <div className="w-0.5 h-2/3 bg-black/60"></div>
                    <div className="w-0.5 h-1/3 bg-black/30"></div>
                    <div className="w-0.5 h-1/2 bg-black/80"></div>
                </div>
            </div>
            
            <div className="flex items-center justify-between gap-3 mb-2">
               <div className="flex gap-2">
                  <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                     <Pause size={12} fill="currentColor" />
                  </button>
                  <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                     <FastForward size={12} fill="currentColor" />
                  </button>
               </div>
               
               <div className="flex-1 text-right overflow-hidden">
                  <div className="text-[10px] font-mono truncate">
                     Lifelike-Action Alexi
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mt-6 text-[9px] text-gray-400 font-mono text-center leading-relaxed">
            © 2211 COALITION GOVERNMENT<br/>
            TERM_ID: LAPLACE-01
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
