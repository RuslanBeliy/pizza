import { FC } from 'react';

import s from './HomePage.module.scss';

import { Container, PizzaList, Title, FilterBlock } from '../../components';
import { useAppSelector } from '../../hooks';

interface Props {}

export const HomePage: FC<Props> = () => {
  const activeCategory = useAppSelector((state) => state.filter.activeCategory);

  return (
    <Container className={s.wrap}>
      <FilterBlock />
      <Title className={s.title}>{activeCategory ?? 'Все'} пиццы</Title>
      <PizzaList />
    </Container>
  );
};
