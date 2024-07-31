import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
  },
});

const Theme = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === 'light' ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children({ theme, toggleTheme })}
    </ThemeProvider>
  );
};

export default Theme;
