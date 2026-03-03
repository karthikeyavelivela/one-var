import React, { useState } from 'react';
import AssistantForm from '../components/AssistantForm';
import ResponseDisplay from '../components/ResponseDisplay';
import { askAssistant } from '../api';

const Workspace = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAsk = async (text, mode) => {
        setIsLoading(true);
        setResponse(null);
        setError(null);

        try {
            const result = await askAssistant(text, mode);
            setResponse(result.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="workspace-page">
            <div className="workspace-container main-content">
                <section className="interaction-section">
                    <div className="card">
                        <h2>Select Assistant Task</h2>
                        <AssistantForm onSubmit={handleAsk} isLoading={isLoading} />
                    </div>
                </section>

                <section className="response-section">
                    <ResponseDisplay response={response} error={error} />
                </section>
            </div>
        </div>
    );
};

export default Workspace;
