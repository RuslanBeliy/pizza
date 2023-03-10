import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './EmptyCart.module.scss';

import { Button, Title } from '..';
import { routes } from '../../router/routes';

interface Props {}

export const EmptyCart: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div className={s.emptyCart}>
      <Title className={s.title}>Корзина пустая :(</Title>
      <div className={s.text}>
        Для того, что-бы оформить заказ, вернитесь на главную страницу и выберите интересующий вас
        товар
      </div>
      <Button onClick={() => navigate(routes.index)} variant='second'>
        Вернуться на главную
      </Button>
    </div>
  );
};
