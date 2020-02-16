/**
 * o call é responsável por chamar métodos assíncronos que retornam promises
 * o put dispara uma action
 * o all cadastra vários listeners (ficar ouvindo quando uma action é disparada)
 */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSucess } from './actions';

/**
 * o * após o function quer dizer que é uma funcionalidade do JS
 * que se chama generator, que funciona semelhantemnte ao async
 *
 * faremos um passo a mais entre a action e o reducer
 */
function* addToCart({ id }) {
  // yield -> como se fosse o await
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucess(response.data));
}

// 1° parâmetro -> qual action queremos ouvir
// 2° parâmetro -> qual action queremos disparar
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/**
 * adc carrinho
 * total carrinho
 * calc frete
 * etc
 */
