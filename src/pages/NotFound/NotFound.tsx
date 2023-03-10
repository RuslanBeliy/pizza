import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './NotFound.module.scss';

import { Button, Container, Header, Title } from '../../components';
import { routes } from '../../router/routes';

interface Props {}

export const NotFound: FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container className={s.wrap}>
        <Title className={s.title}>Такой страницы не существует :(</Title>
        <Button onClick={() => navigate(routes.index)} variant='second'>
          Вернуться на главную
        </Button>
      </Container>
    </>
  );
};
