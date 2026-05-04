"use client";
import "./Banner.css"
export default function Banner(){

    return (<>
        {/* TICKER BAR */}
      <div className="ticker-bar">
        <div className="ticker-track">
          <div className="ticker-item">
            <span className="ticker-sym">BTC/USD</span>
            <span className="ticker-price">$67,482.30</span>
            <span className="badge up">+2.34%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">ETH/USD</span>
            <span className="ticker-price">$3,512.88</span>
            <span className="badge up">+1.78%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">SOL/USD</span>
            <span className="ticker-price">$182.44</span>
            <span className="badge down">−0.92%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">AAPL</span>
            <span className="ticker-price">$198.72</span>
            <span className="badge up">+0.55%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">TSLA</span>
            <span className="ticker-price">$244.10</span>
            <span className="badge down">−1.40%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">NVDA</span>
            <span className="ticker-price">$875.32</span>
            <span className="badge up">+3.12%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">EUR/USD</span>
            <span className="ticker-price">1.0842</span>
            <span className="badge down">−0.18%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">GOLD</span>
            <span className="ticker-price">$2,341.50</span>
            <span className="badge up">+0.72%</span>
          </div>
          {/* duplicate for seamless loop */}
          <div className="ticker-item">
            <span className="ticker-sym">BTC/USD</span>
            <span className="ticker-price">$67,482.30</span>
            <span className="badge up">+2.34%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">ETH/USD</span>
            <span className="ticker-price">$3,512.88</span>
            <span className="badge up">+1.78%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">SOL/USD</span>
            <span className="ticker-price">$182.44</span>
            <span className="badge down">−0.92%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">AAPL</span>
            <span className="ticker-price">$198.72</span>
            <span className="badge up">+0.55%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">TSLA</span>
            <span className="ticker-price">$244.10</span>
            <span className="badge down">−1.40%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">NVDA</span>
            <span className="ticker-price">$875.32</span>
            <span className="badge up">+3.12%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">EUR/USD</span>
            <span className="ticker-price">1.0842</span>
            <span className="badge down">−0.18%</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-sym">GOLD</span>
            <span className="ticker-price">$2,341.50</span>
            <span className="badge up">+0.72%</span>
          </div>
        </div>
      </div>
    </>)
}