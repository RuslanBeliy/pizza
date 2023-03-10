import { FC } from 'react';

import s from './CartPage.module.scss';

import { Container, EmptyCart, FullCart, Title } from '../../components';
import { useAppSelector } from '../../hooks';

interface Props {}

export const CartPage: FC<Props> = () => {
  const countPizzas = useAppSelector((state) => state.cart.countPizzas);
  return (
    <Container className={s.cartPage}>
      <Title className={s.title} tag='h2' variant='fz32'>
        Корзина
      </Title>
      {countPizzas ? <FullCart /> : <EmptyCart />}
    </Container>
  );
};
