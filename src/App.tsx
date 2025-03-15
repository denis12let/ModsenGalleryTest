import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from '@components/AppRouter';
import { GlobalStyle } from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Layout } from '@components/Layout';
import { Provider } from 'react-redux';
import { store } from '@store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <AppRouter />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
