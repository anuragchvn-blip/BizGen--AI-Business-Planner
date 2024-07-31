import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const OffersAndLeadsScriptCreator = () => {
  const [product, setProduct] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');

  const handleGenerateScript = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-offer-script', {
        product,
        targetAudience,
      });
      setGeneratedScript(response.data.generatedOfferScript);
    } catch (error) {
      console.error('Error generating offer script:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Offers and Leads Script Creator
      </Typography>
      <TextField
        label="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Target Audience"
        value={targetAudience}
        onChange={(e) => setTargetAudience(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGenerateScript}>
          Generate Script
        </Button>
      </Box>
      {generatedScript && (
        <Box mt={4}>
          <Typography variant="h6">Generated Offer Script:</Typography>
          <Typography>{generatedScript}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default OffersAndLeadsScriptCreator;
