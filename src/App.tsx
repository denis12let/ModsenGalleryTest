import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from '@components/AppRouter';
import { GlobalStyle } from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
