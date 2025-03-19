import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { imagesActions, store } from '@store';
import { AppRouter, Layout } from '@components';
import { GlobalStyle, theme } from '@styles';
import { useAppDispatch } from '@hooks';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <AppRouter />
          </Layout>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
}

export default App;
