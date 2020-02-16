import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// ele vai deixar disponível o store da aplicação para todos os componentes
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/**
 * Como o Header vai se manter em todas as rotas
 * precisamos deixar o BrowserRouter aqui no App.js
 * já que o Header precisa ter acesso a parte de navegação,
 * ele será clicável.
 *
 * Se o Header não estiver dentro do BrowserRouter ele não
 * tem acesso à parte de navegação
 */
