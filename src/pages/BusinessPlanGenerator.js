import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const BusinessPlanGenerator = () => {
  const [industry, setIndustry] = useState('');
  const [objectives, setObjectives] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');

  const handleGeneratePlan = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-business-plan', {
        industry,
        objectives,
      });
      setGeneratedPlan(response.data.generatedBusinessPlan);
    } catch (error) {
      console.error('Error generating business plan:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Business Plan Generator
      </Typography>
      <TextField
        label="Industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Objectives"
        value={objectives}
        onChange={(e) => setObjectives(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGeneratePlan}>
          Generate Plan
        </Button>
      </Box>
      {generatedPlan && (
        <Box mt={4}>
          <Typography variant="h6">Generated Business Plan:</Typography>
          <Typography>{generatedPlan}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default BusinessPlanGenerator;
