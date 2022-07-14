import './App.css';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme/theme';
import AppBar from './components/appbar/Index';
import Navbar from './components/navbar/Index';
import { Box } from '@mui/system';
import Page from './components/page/Page';
import Videos from './components/videos/Index';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <AppBar />
          <Navbar />
          <Videos />
    </ThemeProvider>
  );
}

export default App;
