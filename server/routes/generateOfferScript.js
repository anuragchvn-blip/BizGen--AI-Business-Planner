const express = require('express');
const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

const router = express.Router();

router.post('/', async (req, res) => {
  const { product, targetAudience } = req.body;

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
      prompt: `Generate an offer script for a product named ${product} targeted at ${targetAudience}`,
      max_tokens: 500,
      model: 'text-davinci-003',
    }, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const generatedOfferScript = openaiResponse.data.choices[0].text.trim();
    res.json({ generatedOfferScript });
  } catch (error) {
    console.error('Error generating offer script:', error);
    res.status(500).json({ error: 'Failed to generate offer script' });
  }
});

module.exports = router;
