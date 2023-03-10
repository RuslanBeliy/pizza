import { FC } from 'react';

import s from './OrderPage.module.scss';

import { Container, OrderForm } from '../../components';

interface Props {}

export const OrderPage: FC<Props> = () => {
  return (
    <Container className={s.orderPage}>
      <OrderForm />
    </Container>
  );
};
