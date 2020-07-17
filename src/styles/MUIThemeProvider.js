import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

const stylesDark = {
  palette: {
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
};

const theme = (type) => {
  let styleObj = { ...styles };

  if (type === 'dark') {
    styleObj = {
      ...styleObj,
      palette: {
        ...styleObj.palette,
        ...stylesDark.palette,
        type: type,
      },
    };
  }

  return createMuiTheme({
    ...styleObj,
  });
};

const MUIThemeProvider = ({ type, children }) => {
  // console.log('[theme]', theme(type));
  return (
    <ThemeProvider theme={theme(type)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
