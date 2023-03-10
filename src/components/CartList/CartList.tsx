import { FC } from 'react';

import s from './CartList.module.scss';

import { CartItem } from '..';
import { useAppSelector } from '../../hooks';
import { cartPizzasSelector } from '../../store/slices/cart/selectors';

interface Props {}

export const CartList: FC<Props> = () => {
  const pizzas = useAppSelector(cartPizzasSelector);
  return (
    <div className={s.cartList}>
      {pizzas.map((pizza) => (
        <CartItem key={`${pizza.id}_${pizza.size}_${pizza.type}`} {...pizza} />
      ))}
    </div>
  );
};
