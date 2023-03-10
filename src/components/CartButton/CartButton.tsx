import { FC } from 'react';
import { BiRuble } from 'react-icons/bi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import s from './CartButton.module.scss';

import { useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';

interface Props {}

export const CartButton: FC<Props> = () => {
  const countPizzas = useAppSelector((state) => state.cart.countPizzas);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  return (
    <div className={s.cartButton}>
      <Link to={routes.cart} className={s.wrap}>
        <span className={s.totalCount}>{countPizzas}</span>
        <RiShoppingCartLine className={s.cartIcon} />
      </Link>
      <span className={s.price}>
        {totalPrice}
        <BiRuble />
      </span>
    </div>
  );
};
