import React from 'react';
import './Footer.css'; 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our company and what we stand for.</p>
                </div>
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/returns">Returns</a></li>
                        <li><a href="/shipping">Shipping Info</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#" aria-label="Facebook">Facebook</a></li>
                        <li><a href="#" aria-label="Twitter">Twitter</a></li>
                        <li><a href="#" aria-label="Instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
