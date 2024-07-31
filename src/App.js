import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BusinessPlanGenerator from './pages/BusinessPlanGenerator';
import ColdEmailGenerator from './pages/ColdEmailGenerator';
import BusinessModelCreator from './pages/BusinessModelCreator';
import OffersAndLeadsScriptCreator from './pages/OffersAndLeadsScriptCreator';
import Theme from './theme';

function App() {
  return (
    <Theme>
      {({ theme, toggleTheme }) => (
        <Router>
          <CssBaseline />
          <Box display="flex" position="relative" height="100vh">
            <Sidebar />
            <Box flexGrow={1} p={3}>
              <Tooltip title="Toggle theme">
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                  }}
                  onClick={toggleTheme}
                  color="inherit"
                >
                  {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Tooltip>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/business-plan" element={<BusinessPlanGenerator />} />
                <Route path="/cold-email" element={<ColdEmailGenerator />} />
                <Route path="/business-model" element={<BusinessModelCreator />} />
                <Route path="/offers-leads" element={<OffersAndLeadsScriptCreator />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      )}
    </Theme>
  );
}

export default App;
