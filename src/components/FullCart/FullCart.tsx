import { FC } from 'react';

import s from './FullCart.module.scss';

import { CartList, OrderComplet } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cartActions } from '../../store/slices/cart/cartSlice';
import { countPizzasSelector } from '../../store/slices/cart/selectors';
import { declinationWord } from '../../utils';

interface Props {}

export const FullCart: FC<Props> = () => {
  const countPizzas = useAppSelector(countPizzasSelector);
  const correctWord = declinationWord(countPizzas, ['товар', 'товара', 'товаров']);
  const dispatch = useAppDispatch();
  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <div className={s.wrap}>
      <div className={s.left}>
        <div className={s.leftTop}>
          <div className={s.goodsCount}>
            {countPizzas} {correctWord}
          </div>
          <div className={s.clearCart} onClick={clearCart}>
            Очистить корзину
          </div>
        </div>
        <CartList />
      </div>
      <div className={s.right}>
        <OrderComplet />
      </div>
    </div>
  );
};
