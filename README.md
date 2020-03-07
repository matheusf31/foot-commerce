<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Arquitetura Flux
</h3>

<blockquote align="center">“Não espere resultados brilhantes se suas metas não forem claras”!</blockquote>

<p align="center">
  <a href="#sobre-o-app">Sobre o app</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#resultado">Resultado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Sobre o app

  Aplicação feita utilizando ReactJS, Redux e Redux Saga como principais ferramentas, e consiste em uma página de e-commerce de tênis. O Redux e o Redux Saga foram utilizados para manter um acesso global ao estado da aplicação, para que o estado possa ser acessado e/ou manipulado tanto pela página principal da aplicação, quanto no header e na página de carrinho. Além disso,  a aplicação consome uma API fake, apenas para popula-lá com dados reais.

## Resultado

Imagens/Gif da aplicação.

## Ferramentas

- [React-router-dom](https://www.npmjs.com/package/react-router-dom): biblioteca para fazer o roteamento da aplicação;
- [Styled-components](https://styled-components.com/): biblioteca para fazer a estilização da aplicação;
- [React-icons](https://www.npmjs.com/package/react-icons): biblioteca que dispónibiliza ícones;
- [Axios](https://github.com/axios/axios): para consumirmos uma API externa;
- [Redux](https://redux.js.org/): para utilizarmos um 'estado global' na aplicação;
- [Reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md): para fazer o debug da aplicação integrando com as funcionalidades do redux;
- [Immer](https://github.com/immerjs/immer): ferramenta que lida com objetos e arrays imutáveis dentro do react ou qualquer aplicação js;
- [Redux-saga](https://redux-saga.js.org/): biblioteca para realizar chamadas com efeitos colaterais, ou seja, chamadas a API, banco de dados, etc, ao disparar uma action do redux;
- [Reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md): plugin para fazer uma integração do saga com o reactotron (para monitoriar de uma forma mais eficiente nossa aplicação);
- [React-toastify](https://github.com/fkhadra/react-toastify): para envio de mensgens de erro para o usuário da aplicação;
- [History](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md): biblioteca javascript que serve para controlarmos a parte de history API do navegador

## :rocket: Como rodar

### Yarn

Com o yarn instalado no computador, baixe ou clone o repositório e no terminal rode:

`$ yarn`

Em seguida, para rodar a API fake:

`$ yarn json-server server.json -p 3333`

E por fim:

`$ yarn start`
