import React from 'react';
import { AlertCircle } from 'lucide-react';

const ResponseDisplay = ({ response, error }) => {
    if (error) {
        return (
            <div className="error-card">
                <AlertCircle className="error-icon" />
                <div className="error-content">
                    <h4>Error</h4>
                    <p>{error.message || 'An unexpected error occurred.'}</p>
                </div>
            </div>
        );
    }

    if (!response) {
        return (
            <div className="placeholder-card">
                Select a task and enter your input above to see the AI's response.
            </div>
        );
    }

    return (
        <div className="response-card">
            <h3 className="response-title">AI Assistant Response</h3>
            <div className="response-body">
                {response.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default ResponseDisplay;
