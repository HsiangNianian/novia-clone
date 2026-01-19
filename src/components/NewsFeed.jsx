import React from 'react';

const NewsFeed = () => {
  const news = [
    { date: '01.03', category: 'POLICY', title: '联合政府新闻办公室 暨 "锚点永恒"计划（A.E.P.）新闻处 联合声明——关于报丧鸟近来不实报道的严正澄清', content: '针对报丧鸟刊发的不实报道，联合政府新闻办公室与"锚点永恒"计划新闻处发布联合声明，严正澄清事实，指出报道存在多处事实性错误与曲解。', type: 'normal' },
    { date: '01.02', category: 'ALERT', title: '科研特权？惊爆！"锚点永恒"团队大言不惭——工人全年血汗=研究员两分钟？内城死活与我无关！', content: '近日聚餐会场下，"锚点永恒"计划相关负责人在回应公众质疑时的争议言论引发舆论哗然，被指漠视基层劳动者付出，无视内城治理矛盾。', type: 'danger' },
    { date: '01.01', category: 'CIVIL', title: '"超现实"游戏工坊——您的私人"现实修正"终端', content: '重装开业！提供最纯正的"离线"游戏体验，独家定制插件让您在游戏里体验"茧城"顶层的权力快感或底层的刺激生活。', type: 'normal' },
    { date: '12.29', category: 'SCIENCE', title: 'D-13区"医疗生命线"受袭事件已平息，物资局承诺加大边境援助', content: '官方通报：D-13区深夜特运事故处置完毕，涉事武装暴徒已被"全员肃清"，核心医疗组件确认无损。', type: 'normal' },
    { date: '11.03', category: 'ALERT', title: '感染者再就业指南【爆】', content: '感染度破表？别慌！三条"黄金出路"助您重启人生！', type: 'normal' },
  ];

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
           <div className="w-6 h-6 bg-black text-white font-mono font-bold flex items-center justify-center text-xs">N</div>
           <h3 className="font-bold tracking-wider font-mono uppercase">Breaking News</h3>
        </div>
        <div className="text-xs font-mono text-red-500 animate-pulse flex items-center gap-2">
           LIVE FEED // SECURE CHANNEL
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {news.map((item, index) => (
          <div key={index} className="p-6 hover:bg-gray-50 transition-colors group cursor-pointer">
             <div className="flex gap-4">
                {/* Date */}
                <div className="font-mono text-gray-300 text-xl font-bold border-r border-gray-100 pr-4 min-w-[80px]">
                   {item.date}
                </div>
                
                <div className="flex-1">
                   <div className="mb-2">
                      <span className={`
                        text-[10px] font-mono px-1.5 py-0.5 font-bold uppercase tracking-wider
                        ${item.category === 'ALERT' ? 'bg-red-600 text-white' : 
                          item.category === 'POLICY' ? 'bg-gray-800 text-white' : 
                          'bg-gray-200 text-gray-600'}
                      `}>
                        {item.category}
                      </span>
                   </div>
                   <h4 className={`font-bold text-lg mb-2 group-hover:underline decoration-1 underline-offset-4 ${item.type==='danger' ? 'text-red-800' : 'text-gray-900'}`}>
                      {item.title}
                   </h4>
                   <p className="text-sm text-gray-500 leading-relaxed font-mono text-justify">
                      {item.content}
                   </p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
