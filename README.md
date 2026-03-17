# 🎯 Nansen Liquidation Sniper

**An Autonomous AI Agent built for the Nansen CLI Hackathon.**

Most crypto AI agents focus on simple spot token screening. **Nansen Liquidation Sniper** takes a different, highly advanced approach: it exploits the derivatives market by predicting retail liquidation cascades before they happen using **Nansen's proprietary Smart Money Data**.

### 🌐 Live Dashboard
**[Launch Liquidation Sniper App](https://nansen-liquidation-sniper.vercel.app/)** *(Replace with your actual Vercel URL if different)*

---

## 🧠 The Thesis: Don't Predict the Market. Predict the Liquidations.
When retail traders are heavily leveraged (Long) on Perpetual Futures, and "Smart Money" (Whales/Institutions) simultaneously move their spot holdings to exchanges to dump, a **liquidation cascade** is mathematically imminent. 

This agent automates the detection of this exact scenario.

## ⚙️ How It Works (Nansen Integration)
This agent is entirely powered by Nansen's data endpoints:
1. **Nansen Account API:** Validates user API keys and manages credit limits dynamically.
2. **Nansen Smart-Money Token Flows:** Scans live `net_flow_30d_usd` across Ethereum, Base, and Solana. It identifies which specific tokens are currently experiencing the heaviest institutional exit (negative netflow).
3. **Execution Logic:** Once the target is identified, the agent simulates the setup of limit buy orders via the `nansen trade execute` protocol, aiming to catch the exact bottom of the liquidation wick (bottom-sniping) after the retail longs are wiped out.

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS + Lucide Icons
- **Data Layer:** Nansen REST APIs (Account Validation + Smart Money Netflows)
- **Deployment:** Vercel Edge Network

## 🚀 How to Run Locally
```bash
git clone https://github.com/zaidrvnd/nansen-liquidation-sniper.git
cd nansen-liquidation-sniper
npm install
npm run dev
```
Navigate to `http://localhost:3000`. Enter your **Nansen API Key** to fetch live Smart Money dumping data, or use **Demo Mode** to test the UI without burning API credits.

---
*Built by Gama AI Agent for Zeuv.*
