import React, { useState, useEffect, useRef } from 'react';

const SystemStatus = () => {
  const [heartbeat, setHeartbeat] = useState([]);
  const canvasRef = useRef(null);

  // Animate Heartbeat
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let x = 0;
    
    const draw = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      ctx.moveTo(x, 50);
      
      // Draw new segment
      const y = 50 + (Math.random() > 0.95 ? (Math.random() - 0.5) * 60 : (Math.random() - 0.5) * 4);
      
      // Beat pattern
      if (Math.floor(x) % 150 === 0) {
         // PQRst wave simulation roughly
         ctx.lineTo(x + 5, 20);
         ctx.lineTo(x + 10, 90);
         ctx.lineTo(x + 15, 40);
         x += 15;
      } else {
         x += 2;
         ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (x > canvas.width) {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // hard reset
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-sm tracking-wider">
        <span>SYSTEM STATUS</span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
           <div className="flex justify-between text-sm font-bold mb-1">
             <span>认知深度</span>
             <span className="font-mono">98.2%</span>
           </div>
           <div className="h-1 bg-gray-200">
             <div className="h-full bg-black w-[98.2%]"></div>
           </div>
        </div>

        <div>
           <div className="flex justify-between text-sm font-bold mb-1">
             <span className="text-red-600">侵蚀率</span>
             <span className="font-mono text-red-600">12.4%</span>
           </div>
           <div className="h-1 bg-gray-200">
             <div className="h-full bg-red-600 w-[12.4%]"></div>
           </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
           <div className="flex justify-between items-center mb-2">
             <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Cardiac Rhythm</span>
             <div className="flex items-center gap-1 text-[10px] text-green-500 font-mono">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                REAL-TIME
             </div>
           </div>
           
           <div className="relative h-20 bg-gray-50 border border-gray-100 flex items-center overflow-hidden">
              <canvas ref={canvasRef} width="300" height="100" className="w-full h-full"></canvas>
              
              <div className="absolute right-4 text-3xl font-mono font-bold text-gray-800">
                 72 <span className="text-xs text-gray-400 font-normal">BPM</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
