import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import TacticalAsset from './components/TacticalAsset';
import SystemStatus from './components/SystemStatus';
import NewsFeed from './components/NewsFeed';
import SystemLogs from './components/SystemLogs';
import Chronicle from './components/Chronicle';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system boot
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center font-mono">
        <div className="text-2xl animate-pulse">INITIALIZING LAPLACE SYSTEM...</div>
        <div className="mt-4 w-64 h-1 bg-gray-800">
          <div className="h-full bg-white animate-progress" style={{width: '100%', transition: 'width 1.5s ease-in-out'}}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f0f0f0] text-[#1a1a1a] relative overflow-hidden">
      <div className="scanlines"></div>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 relative">
          {/* Background grid/dots */}
          <div className="absolute inset-0 pointer-events-none opacity-10" 
               style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
          </div>

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <WelcomeBanner />

            <div className="grid grid-cols-12 gap-6">
              {/* Left Column (Main Stats) */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                <TacticalAsset />
                <NewsFeed />
              </div>

              {/* Right Column (Side Stats) */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <SystemStatus />
                <SystemLogs />
                <Chronicle />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
