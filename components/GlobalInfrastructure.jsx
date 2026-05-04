"use client"
import React from 'react';

import './GlobalInfrastructure.css';
import Image from 'next/image';

const GlobalPresence = () => {
  const data = {
    sections: [
      {
        id: 1,
        layout: 'hero',
        image: 'globe',
        title: 'Global Presence with Dedicated Team!',
        description: 'NexusTrade is powered by a global team of over 30 dedicated professionals with extensive experience at Central Banks and the world\'s leading proprietary trading firms.',
        stats: [
          {
            number: '30+',
            label: 'Dedicated Professionals'
          },
          {
            number: '2',
            label: 'Global Offices'
          },
          {
            number: '24/7',
            label: 'Customer Support'
          }
        ],
        ctaButton: 'Get Funded'
      },
      {
        id: 2,
        layout: 'spreads',
        image: 'spreads',
        titleSpread:"Spreads",
        title: ' from 0.0 pips.',
        description: 'Get in the trade at the price level you set with our platform. Our diverse liquidity mix keeps spreads tight 24/7.',
        features: [
          'Experience raw spreads from 0.0 Pips',
          'Commission from 2.55 per lot',
          'Low latency Trade Executions',
          'Global Data Centers'
        ]
      }
    ]
  };

  return (
    <div className="global-presence-wrapper">
      {/* Section 1: Global Team */}
      <section className="gp-section gp-section-team">
        <div className="gp-content gp-content-team">
          <div className="gp-team-left">
            <div className="gp-image-placeholder gp-globe-placeholder">
              <div className="gp-image-wrapper">
                <Image
                  src="/Images/GlobalInfrastructure02.webp"
                  alt="Global Team"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="gp-team-right">
            <h1 className="gp-title gp-title-main">{data.sections[0].title}</h1>
            <p className="gp-description">{data.sections[0].description}</p>

            <div className="gp-stats-grid">
              {data.sections[0].stats.map((stat, idx) => (
                <div key={idx} className="gp-stat-box">
                  <div className="gp-stat-number">{stat.number}</div>
                  <div className="gp-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="gp-btn gp-btn-primary">{data.sections[0].ctaButton}</button>
          </div>
        </div>
      </section>

      {/* Section 2: Spreads */}
      <section className="gp-section gp-section-spreads">
        <div className="gp-content gp-content-spreads">
          <div className="gp-spreads-left">
            <h2 className="gp-title gp-title-secondary">
              <span>{data.sections[1].titleSpread}</span> <br />
              {data.sections[1].title}
              </h2>
            <p className="gp-description">{data.sections[1].description}</p>

            <div className="gp-features-list">
              {data.sections[1].features.map((feature, idx) => (
                <div key={idx} className="gp-feature-item">
                  <span className="gp-feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="gp-spreads-right">
            <div className="gp-image-placeholder gp-spreads-placeholder">
              <div className="gp-image-wrapper">
                <Image
                  src="/Images/GlobalInfrastructure01.webp"
                  alt="Trading Spreads"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;