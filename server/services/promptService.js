exports.generatePrompt = (text, mode) => {
    switch (mode) {
        case 'Explain a Concept':
            return `You are an AI tutor.
Explain the concept clearly using:
1. Definition
2. Real-world example
3. Step-by-step breakdown
4. Short summary

Concept: ${text}`;

        case 'Summarize Text':
            return `You are an academic assistant.
Summarize the following text in:
- 5 bullet points
- One short paragraph summary

Text: ${text}`;

        case 'Generate Quiz Questions':
            return `You are a teacher.
Generate 5 multiple-choice questions (MCQs).
Each question must have:
- Question
- 4 options (A, B, C, D)
- Correct answer clearly marked

Topic: ${text}`;

        case 'Improve Writing':
            return `You are a professional editor.
Improve the writing for clarity, grammar, and professionalism.
Return:
- Improved version
- Key improvements made

Text: ${text}`;

        default:
            return null;
    }
};
