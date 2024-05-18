import React from 'react';
import './Footer.css';
import Logo from "../../logo.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />
          <p>&copy; 2024 Holy Word. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/daily-bible-verse">Daily Bible Verse</a></li>
            <li><a href="/songsapp">Songs App</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/holy_word2023/"><i className="fab fa-instagram" style={{color:'white',width:'30px'}}></i></a>
            <a href="https://www.youtube.com/@holyword_2023"><i className="fab fa-youtube"  style={{color:'white'}}></i></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
