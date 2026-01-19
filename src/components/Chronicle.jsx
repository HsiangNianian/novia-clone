import React from 'react';

const Chronicle = () => {
   const events = [
      { year: '2187', sub: '月陨元年', title: '大崩塌', content: '地卫二「拉赫穆」碎裂，星骸坠落。生态圈遭遇毁灭性打击。《新曙光协议》签署，联合政府成立。茧城计划启动，建造直径200公里的封闭生态圈。' },
      { year: 'Y.03-05', sub: '复兴初期', title: '拉普拉斯上线', content: '第一茧城诺尔维亚竣工。拉普拉斯系统正式上线，接管各城资源整合与文明推演。' },
      { year: 'Y.08-10', sub: '武装化', title: '铁壁与白棺', content: '铁壁卫戍军团成立。「苍白摇篮」计划启动，成功植入星骸物质，诞生可控变异月裔士兵——白棺。' },
      { year: 'Y.13-24', sub: '动荡年代', title: '陷落与叛乱', content: 'NO.7 帕莱奥姆确认全员死亡(Y.13)。 NO.5 卢米诺斯爆发“深红天启”叛乱(Y.24)，达尔文拒绝接入中央系统，被定性为叛变。' },
   ];

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-sm tracking-wider">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 border border-white rotate-45"></div>
           <span>CHRONICLE</span>
        </div>
        <span className="text-[10px] opacity-50">VER.3.1</span>
      </div>
      
      <div className="p-6 relative">
          <div className="absolute left-[3.25rem] top-6 bottom-6 w-px bg-gray-200"></div>

          <div className="space-y-8">
             {events.map((ev, i) => (
                <div key={i} className="flex gap-4 group relative">
                   <div className="w-16 pt-1 text-right flex flex-col items-end z-10">
                      <div className="font-mono font-bold text-gray-900 leading-none">{ev.year}</div>
                      <div className="text-[9px] text-gray-400 font-normal mt-1">{ev.sub}</div>
                   </div>
                   
                   <div className="relative pt-1">
                      <div className="w-3 h-3 bg-white border-2 border-gray-300 rotate-45 group-hover:bg-black group-hover:border-black transition-colors mb-2 z-20 relative"></div>
                   </div>

                   <div className="flex-1 pb-4">
                      <h4 className="font-bold text-sm mb-1">{ev.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-mono text-justify">
                         {ev.content}
                      </p>
                   </div>
                </div>
             ))}

             <div className="flex gap-4 group relative">
                   <div className="w-16 pt-1 text-right flex flex-col items-end z-10">
                      <div className="font-mono font-bold text-gray-900 leading-none">Y.30-NOW</div>
                   </div>
                   
                   <div className="relative pt-1">
                      <div className="w-3 h-3 bg-black rotate-45 animate-pulse z-20 relative"></div>
                   </div>

                   <div className="flex-1">
                      <div className="bg-gray-100 p-3 rounded-sm">
                         <h4 className="font-bold text-xs mb-1">当前时间线</h4>
                         <p className="text-[10px] text-gray-500 font-mono">
                            拉普拉斯持续观测中... 等待新的变量输入。
                         </p>
                      </div>
                   </div>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Chronicle;
