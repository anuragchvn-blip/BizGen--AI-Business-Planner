import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <List>
        <ListItem button component={Link} to="/business-plan">
          <ListItemText primary="Business Plan Generator" />
        </ListItem>
        <ListItem button component={Link} to="/cold-email">
          <ListItemText primary="Cold Email Generator" />
        </ListItem>
        <ListItem button component={Link} to="/business-model">
          <ListItemText primary="Business Model Creator" />
        </ListItem>
        <ListItem button component={Link} to="/offers-leads">
          <ListItemText primary="Offers and Leads Script Creator" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
