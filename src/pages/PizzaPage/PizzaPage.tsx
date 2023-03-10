import { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import s from './PizzaPage.module.scss';

import { Button, Container, FullPizzaCard, Spinner, Title } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';
import { getOnePizza } from '../../store/slices/pizza/pizzaSlice';
import { pizzaSelector } from '../../store/slices/pizza/selectors';

interface Props {}

export const PizzaPage: FC<Props> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pizza, status } = useAppSelector(pizzaSelector);

  useEffect(() => {
    if (!id) return;
    dispatch(getOnePizza(id));
  }, []);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Container className={s.pizzaPage}>
      {status === 'error' && (
        <div className={s.error}>
          <Title variant='fz32' tag='h2' className={s.title}>
            Пицца не найдена...
          </Title>
          <Button variant='second' onClick={() => navigate(routes.index)}>
            Вернуться на главную
          </Button>
        </div>
      )}
      {pizza && <FullPizzaCard {...pizza} />}
    </Container>
  );
};
