import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AnimatedCard = ({ title, content }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2, borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;
