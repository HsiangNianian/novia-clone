import React from 'react';
import { User } from 'lucide-react';

const WelcomeBanner = () => {
  return (
    <div className="bg-white p-6 border border-gray-200 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="w-24 h-24 border-4 border-black rounded-full grid place-items-center">
          <div className="w-16 h-16 bg-black rotate-45"></div>
        </div>
      </div>
      
      <div className="flex items-center gap-6 relative z-10">
        <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-sm">
          <User size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-wide">欢迎回来，幸存者</h1>
          <p className="text-gray-500 font-mono text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            身份验证通过，拉普拉斯系统已就绪。
            <span className="text-gray-300">///</span>
            <span className="text-gray-400">——此系统目前为测试版，使用大量网络图源，正式版将会进行删改。</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
