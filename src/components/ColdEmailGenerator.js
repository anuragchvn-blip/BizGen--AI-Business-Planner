import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const ColdEmailGenerator = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const handleGenerateEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-email', {
        recipient,
        subject,
        body,
      });
      setGeneratedEmail(response.data.generatedEmail);
    } catch (error) {
      console.error('Error generating email:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cold Email Generator
      </Typography>
      <TextField
        label="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGenerateEmail}>
          Generate Email
        </Button>
      </Box>
      {generatedEmail && (
        <Box mt={4}>
          <Typography variant="h6">Generated Email:</Typography>
          <Typography>{generatedEmail}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default ColdEmailGenerator;
