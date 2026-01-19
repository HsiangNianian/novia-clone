import React, { useEffect, useRef, useState } from 'react';

const SystemLogs = () => {
  const [logs, setLogs] = useState([
    { time: '16:39:13', msg: 'REFRESHING_CACHE' },
    { time: '16:39:15', msg: 'PINGING_NODE_7' },
    { time: '16:39:17', msg: 'PINGING_NODE_7' },
    { time: '16:39:19', msg: 'PINGING_NODE_7' },
    { time: '16:39:21', msg: 'REFRESHING_CACHE' },
    { time: '16:39:22', msg: 'PINGING_NODE_7' },
    { time: '16:39:24', msg: 'REFRESHING_CACHE' },
  ]);
  
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = [
         'PINGING_NODE_7', 'REFRESHING_CACHE', 'CHECKING_INTEGRITY', 
         'SYNC_PACKET_RECEIVED', 'OPTIMIZING_ROUTE', 'HANDSHAKE_ACK'
      ];
      const newLog = {
         time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
         msg: actions[Math.floor(Math.random() * actions.length)]
      };
      
      setLogs(prev => [...prev.slice(-9), newLog]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-sm tracking-wider">
        <span>SYSTEM LOGS</span>
        <span className="text-[10px] opacity-50">RUNTIME</span>
      </div>
      
      <div className="p-4 bg-gray-50 h-[220px] font-mono text-xs overflow-hidden relative">
         <div className="space-y-2 absolute bottom-0 left-0 right-0 p-4 transition-all duration-300">
           {logs.map((log, i) => (
             <div key={i} className="flex gap-4 text-gray-500 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <span className="opacity-50">[{log.time}]</span>
               <span className="font-bold text-gray-700">{log.msg}</span>
             </div>
           ))}
           <div className="h-4 w-4 bg-black animate-pulse mt-2"></div>
         </div>
      </div>
    </div>
  );
};

export default SystemLogs;
