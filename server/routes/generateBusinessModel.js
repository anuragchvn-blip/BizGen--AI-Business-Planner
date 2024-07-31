const express = require('express');
const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

const router = express.Router();

router.post('/', async (req, res) => {
  const { businessType, targetMarket } = req.body;

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
      prompt: `Create a business model for a ${businessType} targeting ${targetMarket}`,
      max_tokens: 500,
      model: 'text-davinci-003',
    }, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const generatedBusinessModel = openaiResponse.data.choices[0].text.trim();
    res.json({ generatedBusinessModel });
  } catch (error) {
    console.error('Error generating business model:', error);
    res.status(500).json({ error: 'Failed to generate business model' });
  }
});

module.exports = router;
