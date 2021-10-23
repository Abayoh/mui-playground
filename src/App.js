import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffcae7',
      dark: '#ca6885',
    },
    secondary: {
      main: '#98ffc8',
    },
    text: {
      primary: 'rgb(0,0,0,0.75)',
      secondary: 'rgb(0,0,0,0.50)',
    },
    common: {
      gray: '#F9F9FC',
      pink: '#ff98b5',
    },
  },
});

function App() {
  return (
    <div className='App '>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'common.pink',
            height: '200px',
            width: '200px',
          }}
        >
          hey there
        </Box>
        <ButtonBase
          sx={{
            backgroundColor: 'common.pink',
            height: '40px',
            p: 2,
            width: '200px',
          }}
        >
          Button
        </ButtonBase>
      </ThemeProvider>
    </div>
  );
}

export default App;
