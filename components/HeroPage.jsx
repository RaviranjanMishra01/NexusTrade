"use client"
import { useState } from "react"
import ButtonUI from "./ui/ButtonUI";
import FeatureCard from "../components/ui/FeatureCard"
import "./HeroPage.css"

const heroPageData = {
  "liveIndicator": {
    "text": "Live Markets Open",
    "icon": "●"
  },
  "heading": {
    "line1": "Trade Smarter.",
    "line2": "Grow ",
    "accent": "Faster.",
    "line3": "Win Bigger."
  },
  "description": "Access crypto, stocks, forex, and commodities from one unified platform. Real-time data, zero hidden fees, and institutional-grade tools for every trader.",
  "cta": {
    "text": "Get Start",
    "className": "btn-cta"
  },
  "tradeCard": {
    "coinPair": {
      "btcSymbol": "₿",
      "usdtSymbol": "$",
      "pairName": "BTC / USD",
      "pairSub": "Bitcoin · Spot"
    },
    "liveTag": "● LIVE",
    "price": {
      "main": "$176,482.30",
      "change": "+2.34%",
      "changeType": "up",
      "delta": "+$1,547.80 today"
    },
    "chartImage": "/images/img.svg",
    "tabs": [
      {
        "id": "buy",
        "label": "Buy"
      },
      {
        "id": "sell",
        "label": "Sell"
      },
      {
        "id": "limit",
        "label": "Limit"
      }
    ],
    "inputs": [
      {
        "id": "usd",
        "label": "Amount (USD)",
        "placeholder": "Enter USD amount",
        "readOnly": false
      },
      {
        "id": "btc",
        "label": "Receive (BTC)",
        "placeholder": "BTC amount",
        "readOnly": true
      }
    ],
    "buyButton": "Buy Bitcoin →",
    "orderMeta": [
      {
        "label": "Fee",
        "value": "$0.00 (0%)"
      },
      {
        "label": "Rate",
        "value": "$67,482 / BTC"
      }
    ]
  },
  "floatingBadge": {
    "image": "/images/clock-two-svgrepo-com.svg",
    "text": "Order filled in ",
    "time": "0.3s"
  },
  "btcRate": 67482
};

function HeroPage() {
  const [activeTab, setActiveTab] = useState("buy");
  const [usdValue, setUsdValue] = useState("1000.00");

  const {
    liveIndicator,
    heading,
    description,
    cta,
    tradeCard,
    floatingBadge,
    btcRate
  } = heroPageData;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const btcValue = (parseFloat(usdValue) || 0) / btcRate;

  const handleUsdChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts[1];
    }

    setUsdValue(value);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="live-pill">
            <span className="pulse-dot"></span> {liveIndicator.text}
          </div>
          <h1>
            {heading.line1}
            <br />
            {heading.line2}<span className="accent">{heading.accent}</span>
            <br />
            {heading.line3}
          </h1>
          <p>
            {description}
          </p>
          <div className="hero-actions">
            <ButtonUI text={cta.text} className={cta.className} />
          </div>
          <FeatureCard />
        </div>

        <div className="hero-right">
          <div className="trade-card">
            <div className="card-header">
              <div className="coin-pair">
                <div className="coin-stack">
                  <div className="coin coin-btc">{tradeCard.coinPair.btcSymbol}</div>
                  <div className="coin coin-usdt">{tradeCard.coinPair.usdtSymbol}</div>
                </div>
                <div>
                  <div className="pair-name">{tradeCard.coinPair.pairName}</div>
                  <div className="pair-sub">{tradeCard.coinPair.pairSub}</div>
                </div>
              </div>
              <span className="live-tag">{tradeCard.liveTag}</span>
            </div>

            <div className="price-block">
              <div className="price-main">{tradeCard.price.main}</div>
              <div className="price-sub-row">
                <span className={`badge ${tradeCard.price.changeType}`}>{tradeCard.price.change}</span>
                <span className="price-delta">{tradeCard.price.delta}</span>
              </div>
            </div>

            <div className="chart-wrap">
              <img src={tradeCard.chartImage} alt="" />
            </div>

            <div className="tab-row">
              {tradeCard.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label>{tradeCard.inputs[0].label}</label>
                <input
                  type="text"
                  value={usdValue}
                  onChange={handleUsdChange}
                  placeholder={tradeCard.inputs[0].placeholder}
                />
              </div>

              <div className="input-group">
                <label>{tradeCard.inputs[1].label}</label>
                <input
                  type="text"
                  value={`${btcValue.toFixed(5)} BTC`}
                  readOnly={tradeCard.inputs[1].readOnly}
                />
              </div>
            </div>

            <button className="btn-buy">{tradeCard.buyButton}</button>

            <div className="order-meta">
              {tradeCard.orderMeta.map((meta, idx) => (
                <span key={idx}>{meta.label}: {meta.value}</span>
              ))}
            </div>
          </div>

          <div className="floating-badge badge-right">
            <img src={floatingBadge.image} alt="" />
            <span>
              {floatingBadge.text}<strong>{floatingBadge.time}</strong>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;