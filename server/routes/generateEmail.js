const express = require('express');
const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

const router = express.Router();

router.post('/', async (req, res) => {
  const { recipient, subject, body } = req.body;

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
      prompt: `Generate a cold email to ${recipient} with the subject "${subject}" and the body: "${body}"`,
      max_tokens: 200,
      model: 'text-davinci-003',
    }, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const generatedEmail = openaiResponse.data.choices[0].text.trim();
    res.json({ generatedEmail });
  } catch (error) {
    console.error('Error generating email:', error);
    res.status(500).json({ error: 'Failed to generate email' });
  }
});

module.exports = router;
