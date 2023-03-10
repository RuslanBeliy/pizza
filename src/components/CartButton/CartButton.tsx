import { FC, useEffect, useRef } from 'react';
import { BiRuble } from 'react-icons/bi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import s from './CartButton.module.scss';

import { useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';
import { cartSelector } from '../../store/slices/cart/selectors';
import { setCartToLS } from '../../utils';

interface Props {}

export const CartButton: FC<Props> = () => {
  const { countPizzas, pizzas, totalPrice } = useAppSelector(cartSelector);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCartToLS(pizzas);
  }, [pizzas]);

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
