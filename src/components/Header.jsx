import React, { useState, useEffect } from 'react';
import { Wifi, Activity, Battery } from 'lucide-react';

const Header = () => {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(8, Math.min(25, prev + (Math.random() - 0.5) * 5)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 sticky top-0 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-8 w-1 bg-black"></div>
        <h2 className="text-xl font-bold tracking-[0.2em] uppercase font-mono">System Dashboard</h2>
      </div>

      <div className="flex items-center gap-8 font-mono text-xs text-gray-400">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-gray-200">
          <span className="mr-2 text-gray-500">&gt;&gt; SEARCH DATABASE //</span>
          <input type="text" placeholder="检索数据库..." className="bg-transparent border-none outline-none text-black w-32 placeholder-gray-400" />
          <span className="ml-2 border border-gray-300 px-1 rounded text-[10px]">RET</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-600 font-bold">ONLINE</span>
            <span className="ml-2">LATENCY: {Math.floor(latency)}ms</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
