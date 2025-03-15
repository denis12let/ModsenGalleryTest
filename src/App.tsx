import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from '@components/AppRouter';
import { GlobalStyle } from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Layout } from '@components/Layout';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
