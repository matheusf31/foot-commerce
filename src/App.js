import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
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
