// backend/controllers/interviewController.js
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI API
const openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })
);

// Call Python AI engine for Face Detection
const runFaceDetection = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.PYTHON_AI_ENGINE}/run-face`);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Face detection error:", error.message);
        res.status(500).json({ error: "Face detection failed" });
    }
};

// Call Python AI engine for Voice Analysis
const runVoiceAnalysis = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.PYTHON_AI_ENGINE}/run-voice`);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Voice analysis error:", error.message);
        res.status(500).json({ error: "Voice analysis failed" });
    }
};

// Generate AI-based Interview Question using OpenAI
const generateQuestion = async (req, res) => {
    try {
        const role = req.body.role || "Software Engineer";
        const prompt = `Generate one challenging and relevant interview question for a ${role}.`;

        const completion = await openai.createChatCompletion({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });

        res.json({ question: completion.data.choices[0].message.content });
    } catch (error) {
        console.error("❌ Question generation error:", error.message);
        res.status(500).json({ error: "Failed to generate question" });
    }
};

module.exports = { runFaceDetection, runVoiceAnalysis, generateQuestion };
