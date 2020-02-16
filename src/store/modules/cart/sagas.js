/**
 * o call é responsável por chamar métodos assíncronos que retornam promises
 * o put dispara uma action
 * o all cadastra vários listeners (ficar ouvindo quando uma action é disparada)
 * o select busca informações dentro do estado
 */
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSucess, updateAmount } from './actions';

/**
 * o * após o function quer dizer que é uma funcionalidade do JS
 * que se chama generator, que funciona semelhantemnte ao async
 *
 * faremos um passo a mais entre a action e o reducer
 */
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  /** consultar o estoque antes de prosseguir */
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmount(id, amount));
  } else {
    // yield -> como se fosse o await
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormmatted: formatPrice(response.data.price),
    };

    yield put(addToCartSucess(data));
  }
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
