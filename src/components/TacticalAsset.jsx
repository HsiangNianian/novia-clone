import React from 'react';

const TacticalAsset = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-sm tracking-wider">
        <span>TACTICAL ASSET</span>
        <span className="opacity-50">CONFIDENTIAL // FIG.09</span>
      </div>
      
      <div className="p-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 relative group overflow-hidden bg-gray-100 min-h-[200px]">
           {/* Image Overlay UI */}
           <div className="absolute top-2 left-2 z-10">
             <div className="bg-white/80 backdrop-blur px-2 py-0.5 text-[10px] font-bold border border-black/10">HUNTER-IV</div>
           </div>
           
           <div className="absolute bottom-4 left-4 z-10 space-y-1 font-mono text-[10px]">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-white drop-shadow-md">ONLINE</span>
             </div>
             <div className="text-white/80 drop-shadow-md">402nd DIV</div>
             <div className="text-white/80 drop-shadow-md font-bold">94.5%</div>
           </div>

           <div className="absolute inset-0 bg-[url('https://novia.asia/82186d160f2be243e4d70fff3e9a822b%20(1).jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"></div>
           
           {/* Scanline overlay on image */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center relative">
          <div className="absolute right-0 top-0 text-9xl font-bold text-gray-50 pointer-events-none -z-10 select-none">04</div>
          
          <div className="flex gap-2 mb-4">
             <span className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold">ASSAULT</span>
             <span className="border border-black text-black px-2 py-0.5 text-xs font-mono font-bold">ELITE</span>
          </div>

          <h3 className="text-2xl font-bold mb-2">型号：猎手-IV型 战术人形</h3>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-6 font-mono text-justify">
            边境统御庭最新列装的自律作战单元。该型号优化了近战格斗模组，同时配备第三代辐射屏蔽模块，可在高浓度星骸污染区持续作战48小时。
          </p>

          <div className="border-t border-gray-200 pt-4 mt-auto">
             <div className="flex justify-between items-end">
                <div className="text-xs text-gray-400 font-mono">
                  STATUS<br/>
                  <span className="text-green-600 font-bold text-sm">● ONLINE</span>
                </div>
                 <div className="text-xs text-gray-400 font-mono">
                  AFFILIATION<br/>
                  <span className="text-black font-bold text-sm">402nd DIV</span>
                </div>
                 <div className="text-xs text-gray-400 font-mono text-right">
                  SYNC RATE<br/>
                  <span className="text-black font-bold text-xl">94.5%</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TacticalAsset;
