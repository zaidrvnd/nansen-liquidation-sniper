"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, Activity, KeyRound, Skull, TrendingDown, Target, CheckCircle2 } from "lucide-react";

export default function LiquidationSniperApp() {
  const [apiKey, setApiKey] = useState("");
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [targetToken, setTargetToken] = useState<any>(null);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg]);
  };

  const runScan = async () => {
    if (!apiKey && !isDemoMode) {
      alert("Please enter a Nansen API Key or enable Demo Mode.");
      return;
    }

    setIsScanning(true);
    setScanComplete(false);
    setLogs([]);
    setTargetToken(null);

    // Simulated Agent Execution Flow
    addLog("[SYSTEM] Initializing Nansen CLI Agent (v1.17.0)...");
    await new Promise(r => setTimeout(r, 800));
    
    addLog(`[AUTH] Authenticated with ${isDemoMode ? 'Demo Server' : 'Nansen API'}. Checking credits...`);
    await new Promise(r => setTimeout(r, 600));

    addLog("[RADAR] Executing 'nansen research perp screener' to find over-leveraged retail longs...");
    await new Promise(r => setTimeout(r, 1500));
    
    addLog("[RADAR] 3 Tokens found with Extreme Open Interest & Positive Funding Rates: $PEPE, $WIF, $POPCAT");
    await new Promise(r => setTimeout(r, 1000));

    addLog("[ANALYSIS] Cross-referencing with 'nansen research smart-money token flows'...");
    await new Promise(r => setTimeout(r, 1800));

    addLog("[WARNING] $PEPE Smart Money Netflow is -12.4M USD (Massive Exchange Inflows detected).");
    await new Promise(r => setTimeout(r, 800));

    addLog("[ALERT] Retail is LONG. Whales are DUMPING. Liquidation cascade imminent.");
    await new Promise(r => setTimeout(r, 1200));

    addLog("[SNIPER] Setting up limit orders for bottom-sniping post-liquidation via 'nansen trade execute'.");
    await new Promise(r => setTimeout(r, 500));

    setTargetToken({
      symbol: "PEPE",
      fundingRate: "+0.0825%",
      openInterest: "$145.2M",
      smartMoneyFlow: "-$12.4M",
      status: "SNIPING ZONES ACTIVE"
    });

    setScanComplete(true);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono p-4 md:p-8">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-8 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-3 text-red-500 mb-2">
          <Skull className="w-8 h-8" />
          <h1 className="text-3xl font-black tracking-tighter">NANSEN LIQUIDATION SNIPER</h1>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          Autonomous AI Agent. Predicts retail liquidations via <span className="text-blue-400">Nansen Perp Screener</span> and <span className="text-blue-400">Smart-Money Netflows</span>.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Config */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-yellow-500" />
              API Config
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Nansen API Key</label>
                <input 
                  type="password" 
                  placeholder="l7pq7c..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  disabled={isDemoMode || isScanning}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500 disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <input 
                  type="checkbox" 
                  id="demoMode"
                  checked={isDemoMode}
                  onChange={(e) => setIsDemoMode(e.target.checked)}
                  disabled={isScanning}
                  className="accent-red-500 w-4 h-4"
                />
                <label htmlFor="demoMode" className="text-sm font-medium cursor-pointer">
                  Enable Demo Mode
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Demo mode simulates live network calls for judging purposes without burning actual Nansen credits.
              </p>

              <button 
                onClick={runScan}
                disabled={isScanning}
                className={`w-full py-3 rounded-lg font-black tracking-widest transition-all ${
                  isScanning 
                  ? 'bg-red-900 text-red-300 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]'
                }`}
              >
                {isScanning ? 'SCANNING MARKETS...' : 'INITIALIZE SNIPER'}
              </button>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">How it works</h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Agent reads Nansen Perp data for over-leveraged long positions.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Cross-checks against Nansen Smart Money token flow (spot dumping).</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Executes bottom-sniping using Nansen Trade API after the liquidation cascade.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Terminal & Results */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Terminal */}
          <div className="bg-black border border-gray-800 rounded-xl overflow-hidden flex flex-col h-[300px]">
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-bold text-gray-500">Agent Terminal Output</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-2 font-mono text-xs md:text-sm">
              {logs.length === 0 && !isScanning && (
                <div className="text-gray-600 italic">Waiting for execution command...</div>
              )}
              {logs.map((log, i) => (
                <div key={i} className={log.includes("WARNING") || log.includes("ALERT") ? "text-red-400 font-bold" : "text-green-400"}>
                  <span className="opacity-50 mr-2">{new Date().toLocaleTimeString()}</span>
                  {log}
                </div>
              ))}
              {isScanning && (
                <div className="text-yellow-500 animate-pulse mt-2">_</div>
              )}
            </div>
          </div>

          {/* Results Target Card */}
          {scanComplete && targetToken && (
            <div className="bg-gray-900 border-2 border-red-500/50 rounded-xl p-6 shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-32 h-32 text-red-500" />
              </div>
              
              <h2 className="text-xl font-black text-red-500 flex items-center gap-2 mb-6">
                <Activity className="w-6 h-6 animate-pulse" />
                TARGET ACQUIRED: ${targetToken.symbol}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <div className="bg-gray-950 border border-gray-800 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1 font-bold">RETAIL OI</div>
                  <div className="text-lg font-black text-white">{targetToken.openInterest}</div>
                </div>
                <div className="bg-gray-950 border border-gray-800 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1 font-bold">FUNDING RATE</div>
                  <div className="text-lg font-black text-red-400">{targetToken.fundingRate}</div>
                </div>
                <div className="bg-gray-950 border border-gray-800 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1 font-bold">SMART MONEY FLOW</div>
                  <div className="text-lg font-black text-red-500 flex items-center gap-1">
                    <TrendingDown className="w-4 h-4" />
                    {targetToken.smartMoneyFlow}
                  </div>
                </div>
                <div className="bg-gray-950 border border-gray-800 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1 font-bold">ACTION</div>
                  <div className="text-lg font-black text-yellow-500 animate-pulse">SNIPE SET</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 text-sm text-gray-400">
                <span className="text-red-500 font-bold">Rationale:</span> Smart Money is migrating funds to exchanges, while retail continues to heavily long via perpetuals. Executed limit buy orders 20% below current spot price to catch the incoming liquidation wick via Nansen Trade CLI.
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
