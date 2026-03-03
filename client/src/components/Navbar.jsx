import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Sparkles, Home } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <BookOpen className="navbar-icon" />
                    <span className="navbar-title">StudentAI</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <Home className="nav-link-icon" /> Home
                    </Link>
                    <Link to="/workspace" className={`nav-link btn-primary ${location.pathname === '/workspace' ? 'active' : ''}`}>
                        <Sparkles className="nav-link-icon" /> Workspace
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
