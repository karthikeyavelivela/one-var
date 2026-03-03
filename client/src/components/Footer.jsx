import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>StudentAI</h3>
                    <p>Empowering students with AI-driven learning tools.</p>
                </div>
                <div className="footer-links">
                    <a href="#" aria-label="Github"><Github /></a>
                    <a href="#" aria-label="Twitter"><Twitter /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AI-Powered Student Assistant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
