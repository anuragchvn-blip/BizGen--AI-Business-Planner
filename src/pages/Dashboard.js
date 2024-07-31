import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AnimatedCard from '../components/AnimatedCard';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box>
        <AnimatedCard title="Business Plan Generator" content="Generate detailed business plans" />
        <AnimatedCard title="Cold Email Generator" content="Create engaging cold emails" />
        <AnimatedCard title="Business Model Creator" content="Design effective business models" />
        <AnimatedCard title="Offers & Leads Script Creator" content="Generate compelling offers and leads scripts" />
      </Box>
    </Container>
  );
};

export default Dashboard;
