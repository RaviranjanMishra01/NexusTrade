import React, { useState } from 'react';
import "./Nexttradefooter.css"

export default function NextTradeFooter() {
  const [email, setEmail] = useState('');

  const footerData = {
    company: {
      name: 'NextTrade',
      tagline: 'Copyright ©2025 NextTrade. All rights reserved.',
      cta: 'Get Funded'
    },
    sections: [
      {
        title: 'Company',
        links: [
          { label: 'Home', href: '#' },
          { label: 'About Us', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact Us', href: '#' }
        ]
      },
      {
        title: 'Trading',
        links: [
          { label: 'Challenges', href: '#' },
          { label: 'Symbols', href: '#' },
          { label: 'What is Prop Trading', href: '#' },
          { label: 'Rewards', href: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '#' },
          { label: 'Reviews', href: '#' },
          { label: 'Affiliate Program', href: '#' },
          { label: 'FAQs', href: '#' }
        ]
      }
    ],
    newsletter: {
      title: 'Subscribe to our newsletter',
      placeholder: 'Your Email Address',
      buttonText: 'Get Started'
    },
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' }
    ],
    social: [
      { name: 'Discord', icon: 'discord', href: '#' },
      { name: 'Twitter', icon: 'twitter', href: '#' },
      { name: 'Instagram', icon: 'instagram', href: '#' }
    ]
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const getSocialIcon = (iconName) => {
    const iconMap = {
      discord: '💬',
      twitter: '𝕏',
      instagram: '📷'
    };
    return iconMap[iconName] || '';
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Header Section */}
        <div className="footer-header">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">N</div>
              {footerData.company.name}
            </div>
            <div className="footer-tagline">{footerData.company.tagline}</div>
          </div>
          <button className="footer-cta-button">{footerData.company.cta}</button>
        </div>

        {/* Main Content Section */}
        <div className="footer-content">
          {/* Regular Sections */}
          {footerData.sections.map((section, idx) => (
            <div key={idx} className="footer-section">
              <h3 className="footer-section-title">{section.title}</h3>
              <nav className="footer-section-links">
                {section.links.map((link, linkIdx) => (
                  <a key={linkIdx} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h3 className="newsletter-title">{footerData.newsletter.title}</h3>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder={footerData.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                {footerData.newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <nav className="footer-legal">
            {footerData.legal.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {footerData.social.map((social, idx) => (
              <a key={idx} href={social.href} className="social-icon" title={social.name}>
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}