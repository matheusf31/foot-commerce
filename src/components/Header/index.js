import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

/**
 * posso passar parâmetros dentro do connect
 * o primeiro parâmetro é uma função que
 * recebe o estado inteiro do redux e retorna
 * as informações que quero acessar dentro desse componente
 *
 * state.cart -> onde .cart é o nome do reducer que quero acessar
 *
 * toda vez que o estado que colocamos no connect mudar
 * nosso Header será renderizado do zero
 */

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);

// assim eu recebo tudo que está no cart;
// export default connect(state => ({
//   cart: state.cart,
// }))(Header);
