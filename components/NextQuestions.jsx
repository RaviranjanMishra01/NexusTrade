'use client';

import { useState, useEffect } from 'react';
import "./NextQuestions.css"

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedId, setExpandedId] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = {
      general: [
        {
          id: 1,
          question: 'What is SharkFunded?',
          answer:
            'SharkFunded is a leading trading platform designed for professional traders. We provide advanced tools, real-time market data, and competitive spreads to help you trade effectively across multiple asset classes.',
        },
        {
          id: 2,
          question: 'How do I Get started with SharkFunded?',
          answer:
            "Getting started is simple! Sign up for an account, complete our KYC verification process, fund your account, and start trading immediately. Our onboarding team is ready to guide you through every step.",
        },
        {
          id: 3,
          question: 'What Trading Platforms do you support?',
          answer:
            'We support MetaTrader 4, MetaTrader 5, and our proprietary web-based platform. All platforms offer real-time charting, advanced order types, and seamless execution.',
        },
        {
          id: 4,
          question: 'Do you offer support to traders?',
          answer:
            'Absolutely! We offer 24/7 customer support via live chat, email, and phone. Our dedicated support team includes experienced traders who understand your needs.',
        },
        {
          id: 5,
          question: 'Can I withdraw my Profits?',
          answer:
            'Yes, withdrawing your profits is quick and easy. Withdrawals are typically processed within 1-2 business days. We support multiple payment methods for your convenience.',
        },
      ],
      rules: [
        {
          id: 6,
          question: 'What is the Minimum Deposit?',
          answer:
            'Our minimum deposit is $100 USD to get started. Different account tiers have different requirements, and promotional offers may vary.',
        },
        {
          id: 7,
          question: 'What are the Trading Hours?',
          answer:
            'We offer 24/5 trading across forex, commodities, and indices. Stocks are available during market hours. Check our trading calendar for specific market timings.',
        },
        {
          id: 8,
          question: 'What is the Maximum Leverage?',
          answer:
            'We offer leverage up to 1:500 on forex pairs. Leverage varies by account type and asset class. Always trade responsibly and manage your risk.',
        },
        {
          id: 9,
          question: 'Are there any hidden fees?',
          answer:
            'No hidden fees! All costs are transparent and displayed clearly. We charge competitive commissions and spreads with no surprise charges.',
        },
        {
          id: 10,
          question: 'Can I use automated trading?',
          answer:
            'Yes, we support Expert Advisors (EAs) and automated trading strategies on MetaTrader platforms. You can fully automate your trading if you prefer.',
        },
      ],
      challenges: [
        {
          id: 11,
          question: 'What are Trading Challenges?',
          answer:
            'Trading challenges are competitive events where traders test their skills and win real prizes. Participants trade according to specific rules and profit targets within set time frames.',
        },
        {
          id: 12,
          question: 'How do I Join a Challenge?',
          answer:
            "Simply navigate to the Challenges section, select your preferred challenge, and enroll. You'll receive a dedicated trading account with a challenge balance to trade with.",
        },
        {
          id: 13,
          question: 'What are the Prize Pools?',
          answer:
            'Prize pools vary by challenge and difficulty level, ranging from $1,000 to $100,000+. Winners receive real cash payouts based on their performance ranking.',
        },
        {
          id: 14,
          question: 'What is the time limit for challenges?',
          answer:
            'Challenge duration varies from 1 month to 3 months depending on the specific challenge. Check individual challenge details for exact timeframes.',
        },
        {
          id: 15,
          question: 'Can I withdraw challenge winnings?',
          answer:
            'Yes! All challenge winnings can be withdrawn to your bank account. Payouts are processed within 3-5 business days after challenge completion.',
        },
      ],
    };

    setFaqData(data);
    setLoading(false);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const currentItems = faqData?.[activeTab] || [];

  return (
    <div className="faqContainer">
      <div className="container">
        {/* Header */}
        <div className="faqHeader">
          <h1 className="faqTitle">Frequently Asked Questions</h1>
          <p className="faqSubtitle">
            The main reasons why traders choose to trade with SharkFunded.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tabNavigation">
          {['general', 'rules', 'challenges'].map((tab) => (
            <button
              key={tab}
              className={`tabButton ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faqContent">
          {currentItems.map((item) => (
            <div key={item.id} className="faqItem">
              <button
                className={`faqQuestion ${
                  expandedId === item.id ? 'active' : ''
                }`}
                onClick={() => toggleExpand(item.id)}
              >
                <span className="questionText">{item.question}</span>
                <svg
                  className="faqIcon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {expandedId === item.id && (
                <div className="faqAnswer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}