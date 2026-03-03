const { generatePrompt } = require('../services/promptService');
const { callLLM } = require('../services/llmService');

exports.handleAskRequest = async (req, res, next) => {
    try {
        const { text, mode } = req.body;

        if (!text || !mode) {
            return res.status(400).json({ error: 'Missing required fields: text or mode' });
        }

        // Generate structured prompt based on mode
        const prompt = generatePrompt(text, mode);

        if (!prompt) {
            return res.status(400).json({ error: 'Invalid mode selected' });
        }

        // Call LLM
        const responseText = await callLLM(prompt);

        res.json({
            success: true,
            data: responseText
        });
    } catch (error) {
        next(error);
    }
};
