const express = require('express');
const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

const router = express.Router();

router.post('/', async (req, res) => {
  const { industry, objectives } = req.body;

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
      prompt: `Generate a comprehensive business plan for a company in the ${industry} industry with the following objectives: ${objectives}`,
      max_tokens: 500,
      model: 'text-davinci-003',
    }, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const generatedBusinessPlan = openaiResponse.data.choices[0].text.trim();
    res.json({ generatedBusinessPlan });
  } catch (error) {
    console.error('Error generating business plan:', error);
    res.status(500).json({ error: 'Failed to generate business plan' });
  }
});

module.exports = router;
