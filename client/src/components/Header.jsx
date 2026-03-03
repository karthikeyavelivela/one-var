import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <BookOpen className="header-icon" />
                <h1 className="header-title">AI-Powered Student Assistant</h1>
            </div>
        </header>
    );
};

export default Header;
