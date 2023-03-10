import { FC } from 'react';

import s from './CartList.module.scss';

import { CartItem } from '..';
import { useAppSelector } from '../../hooks';

interface Props {}

export const CartList: FC<Props> = () => {
  const pizzas = useAppSelector((state) => state.cart.pizzas);
  return (
    <div className={s.cartList}>
      {pizzas.map((pizza) => (
        <CartItem key={pizza.id} {...pizza} />
      ))}
    </div>
  );
};
