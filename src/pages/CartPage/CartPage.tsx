import { FC, useEffect } from 'react';

import s from './CartPage.module.scss';

import { Container, EmptyCart, FullCart, Title } from '../../components';
import { useAppSelector } from '../../hooks';
import { countPizzasSelector } from '../../store/slices/cart/selectors';

interface Props {}

export const CartPage: FC<Props> = () => {
  const countPizzas = useAppSelector(countPizzasSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className={s.cartPage}>
      <Title className={s.title} tag='h2' variant='fz32'>
        Корзина
      </Title>
      {countPizzas ? <FullCart /> : <EmptyCart />}
    </Container>
  );
};
