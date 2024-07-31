import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const BusinessModelCreator = () => {
  const [businessType, setBusinessType] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [generatedModel, setGeneratedModel] = useState('');

  const handleGenerateModel = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-business-model', {
        businessType,
        targetMarket,
      });
      setGeneratedModel(response.data.generatedBusinessModel);
    } catch (error) {
      console.error('Error generating business model:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Business Model Creator
      </Typography>
      <TextField
        label="Business Type"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Target Market"
        value={targetMarket}
        onChange={(e) => setTargetMarket(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGenerateModel}>
          Generate Model
        </Button>
      </Box>
      {generatedModel && (
        <Box mt={4}>
          <Typography variant="h6">Generated Business Model:</Typography>
          <Typography>{generatedModel}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default BusinessModelCreator;
