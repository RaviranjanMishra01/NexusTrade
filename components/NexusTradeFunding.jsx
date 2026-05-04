import React, { useState } from 'react';
import './NexusTradeFunding.css';
import Image from 'next/image';

const nexustradeData = {
  "page": {
    "title": "Bukle Up, your Journey Starts Here !",
    "subtitle": "Learn to trade on our stimulated trading platform, develop real skills, and get rewarded for your performance."
  },
  "features": [
    {
      "icon": "$",
      "title": "Forex",
      "subtitle": "Tight spreads"
    },
    {
      "icon": "⚙️",
      "title": "Features",
      "subtitle": "Coming Soon"
    }
  ],
  "fundingPlans": [
    {
      "id": "prime",
      "name": "NexusTrade Prime",
      "badge": "POPULAR",
      "badgeColor": "blue"
    },
    {
      "id": "lite",
      "name": "NexusTrade Lite",
      "badge": "FREE",
      "badgeColor": "gray"
    },
    {
      "id": "bolt",
      "name": "NexusTrade Bolt",
      "badge": null,
      "badgeColor": null
    }
  ],
  "pricingPlans": [
    {
      "id": "instant",
      "name": "Instant Funding",
      "badge": "INSTANT",
      "features": [
        "No evaluation",
        "Instant Step"
      ]
    },
    {
      "id": "daily",
      "name": "Daily Payouts!",
      "badge": "PAID",
      "features": [
        "Instant evaluation",
        "Daily Payouts"
      ]
    }
  ],
  "accountSizes": [
    "$5,000",
    "$10,000",
    "$25,000",
    "$50,000",
    "$100,000"
  ],
  "fundingDetails": [
    {
      "label": "Profit Split",
      "value": "80%"
    },
    {
      "label": "Daily Drawdown",
      "value": "4%"
    },
    {
      "label": "Max Drawdown",
      "value": "7%"
    },
    {
      "label": "Payout Frequency",
      "value": "Weekly"
    },
    {
      "label": "Trading Leverage",
      "value": "1:50"
    },
    {
      "label": "Instruments",
      "value": "Fx, Commodities, Indices, Stock, Crypto"
    },
    {
      "label": "Weekend Trading",
      "value": "Allowed"
    },
    {
      "label": "Consistency Rule",
      "value": "Yes"
    },
    {
      "label": "1% Max Floating Ratio",
      "value": "Yes"
    }
  ],
  "pricing": {
    "originalPrice": "$49",
    "discountPrice": "$34",
    "label": "DISCOUNT RATE"
  },
  "ctaButton": {
    "text": "Get Funded",
    "link": "http://localhost:3000/#"
  },
  "footer": {
    "disclaimer": "actual trader capital is placed under individual company's risk. Trading Instances only.",
    "paymentLabel": "Payment Options:",
    "paymentMethods": [
      {
        "name": "Visa",
        "icon": "💳"
      },
      {
        "name": "Mastercard",
        "icon": "💳"
      },
      {
        "name": "Bank Transfer",
        "icon": "🏦"
      },
      {
        "name": "Crypto 1",
        "icon": "₿"
      },
      {
        "name": "Crypto 2",
        "icon": "Ξ"
      },
      {
        "name": "Crypto 3",
        "icon": "◇"
      },
      {
        "name": "Crypto 4",
        "icon": "₹"
      }
    ]
  },
  "details": {
    "targetModuleLabel": "Target Module:",
    "fundedStageLabel": "Funded Stage",
    "accountSizeLabel": "SELECT ACCOUNT SIZE",
    "termsLink": "Terms Included"
  }
};

const NexusTradeFunding = () => {
  const [activeTab, setActiveTab] = useState('prime');
  const [selectedAccountSize, setSelectedAccountSize] = useState('$5,000');
  const [selectedPlan, setSelectedPlan] = useState('instant');

  // ✅ FIXED: Direct destructuring - NO useState for data, NO useEffect
  const {
    page,
    features,
    fundingPlans,
    pricingPlans,
    accountSizes,
    fundingDetails,
    pricing,
    ctaButton,
    footer,
    details
  } = nexustradeData;

  return (
    <div className="nt-funding-container">
      {/* Hero Section */}
      <section className="nt-hero-section">
        <div className="nt-hero-content">
          {/* Left Content */}
          <div className="nt-hero-left">
            <h1 className="nt-hero-title">{page.title}</h1>
            <p className="nt-hero-subtitle">
              {page.subtitle}
            </p>

            {/* Features Grid */}
            <div className="nt-features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="nt-feature-item">
                  <div className="nt-feature-icon">{feature.icon}</div>
                  <div className="nt-feature-text">
                    <div className="nt-feature-title">{feature.title}</div>
                    <div className="nt-feature-subtitle">{feature.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Funding Plans Tabs */}
            <div className="nt-funding-tabs">
              {fundingPlans.map((plan) => (
                <button
                  key={plan.id}
                  className={`nt-tab ${activeTab === plan.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(plan.id)}
                >
                  {plan.badge && <span className={`nt-badge nt-badge-${plan.badgeColor}`}>{plan.badge}</span>}
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="nt-pricing-cards">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`nt-pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.badge && <span className="nt-card-badge">{plan.badge}</span>}
                  <h3 className="nt-card-title">{plan.name}</h3>
                  <ul className="nt-card-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="nt-checkmark">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Details Section */}
          <div className="nt-hero-right">
            {/* Account Size Selection */}
            <div className="nt-account-section">
              <label className="nt-section-label">{details.accountSizeLabel}</label>
              <div className="nt-size-buttons">
                {accountSizes.map((size, idx) => (
                  <button
                    key={idx}
                    className={`nt-size-btn ${selectedAccountSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedAccountSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Funded Stage Details */}
            <div className="nt-details-table">
              <div className="nt-details-header">
                <span>{details.targetModuleLabel}</span>
                <span className="nt-funded-label">{details.fundedStageLabel}</span>
              </div>

              {fundingDetails.map((detail, idx) => (
                <div key={idx} className="nt-detail-row">
                  <span className="nt-detail-label">{detail.label}</span>
                  <span className="nt-detail-value">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="nt-pricing-section">
              <div className="nt-price-row">
                <span className="nt-price-label">{pricing.label}</span>
                <div className="nt-price-amount">
                  <span className="nt-original-price">{pricing.originalPrice}</span>
                  <span className="nt-final-price">{pricing.discountPrice}</span>
                </div>
              </div>
              <a href={ctaButton.link} className="nt-cta-button">{ctaButton.text}</a>
              <div className="nt-footer-link">
                <a href="#terms">{details.termsLink}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="nt-bg-decoration"></div>
      </section>

      {/* Bottom Section - Legal & Payments */}
      <div className="nt-bottom-section">
        <p className="nt-disclaimer">
          {footer.disclaimer}
        </p>

        <div className="nt-payment-section">
          <span className="nt-payment-label">{footer.paymentLabel}</span>
          <div className="nt-payment-methods">
            {footer.paymentMethods.map((method, idx) => (
              <div key={idx} className="nt-payment-method">
                <span className="nt-payment-icon">{method.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexusTradeFunding;