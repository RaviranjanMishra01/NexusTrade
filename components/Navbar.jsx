"use client"
import { useState } from "react";
import ButtonUI from "./ui/ButtonUI";
import "./Navbar.css"
const navbarData = {
  logo: {
    main: "Nexus",
    highlight: "Trade"
  },
  links: [
    { name: "Markets", href: "#" },
    { name: "Trade", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Earn", href: "#" },
    { name: "News", href: "#" }
  ],
  actions: [
    { text: "Log In", className: "btn-outline" },
    { text: "Get Started", className: "btn-primary" }
  ]
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          {navbarData.logo.main}
          <span>{navbarData.logo.highlight}</span>
        </a>
        
        <ul className="nav-links">
          {navbarData.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {navbarData.actions.map((btn, index) => (
            <ButtonUI key={index} text={btn.text} className={btn.className} />
          ))}
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        > 
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={toggleMenu}
        ></div>
      )}

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {navbarData.links.map((link, index) => (
          <a key={index} href={link.href} onClick={closeMenu}>
            {link.name}
          </a>
        ))}

        <div className="mobile-menu-actions">
          {navbarData.actions.map((btn, index) => (
            <ButtonUI key={index} text={btn.text} className={btn.className} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;