import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, FileText, CheckSquare, Edit3, ArrowRight } from 'lucide-react';

const Home = () => {
    const features = [
        {
            title: 'Explain a Concept',
            description: 'Get clear, broken-down explanations for difficult complex topics.',
            icon: <Brain className="feature-icon text-blue" />
        },
        {
            title: 'Summarize Text',
            description: 'Condense long articles and papers into bite-sized summaries.',
            icon: <FileText className="feature-icon text-green" />
        },
        {
            title: 'Generate Quizzes',
            description: 'Test your knowledge with AI-generated multiple choice questions.',
            icon: <CheckSquare className="feature-icon text-purple" />
        },
        {
            title: 'Improve Writing',
            description: 'Enhance your essays and reports with professional editing suggestions.',
            icon: <Edit3 className="feature-icon text-orange" />
        }
    ];

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Your Personal <span className="highlight">AI Tutor</span></h1>
                    <p className="hero-subtitle">
                        Study smarter, not harder. Let AI help you explain concepts, summarize texts, test your knowledge, and perfect your writing in seconds.
                    </p>
                    <div className="hero-cta">
                        <Link to="/workspace" className="btn-primary hero-btn">
                            Get Started <ArrowRight className="hero-btn-icon" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="features-container">
                    <h2 className="section-title">Powerful Tools for Students</h2>
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card">
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
