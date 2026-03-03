import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const MODES = [
    'Explain a Concept',
    'Summarize Text',
    'Generate Quiz Questions',
    'Improve Writing'
];

const AssistantForm = ({ onSubmit, isLoading }) => {
    const [text, setText] = useState('');
    const [mode, setMode] = useState(MODES[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit(text, mode);
    };

    return (
        <form className="assistant-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="mode">Select Task</label>
                <select
                    id="mode"
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    disabled={isLoading}
                >
                    {MODES.map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="text">Your Input</label>
                <textarea
                    id="text"
                    rows="5"
                    placeholder="Enter text or a concept you want help with..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isLoading}
                ></textarea>
            </div>

            <button type="submit" disabled={isLoading || !text.trim()} className="submit-btn">
                {isLoading ? (
                    <>
                        <Loader2 className="spinner" /> Processing...
                    </>
                ) : (
                    <>
                        <Send className="btn-icon" /> Ask AI
                    </>
                )}
            </button>
        </form>
    );
};

export default AssistantForm;
