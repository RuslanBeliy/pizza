import qs from 'qs';
import { FC, useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import s from './PizzaList.module.scss';

import { Skeleton, Title } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterActions } from '../../store/slices/filterSlice';
import { getPizzas } from '../../store/slices/pizzasSlice';
import { PizzaCard } from '../PizzaCard';

interface Props {}

export const PizzaList: FC<Props> = () => {
  const { pizzas, status } = useAppSelector((state) => state.pizzas);
  const { activeCategory, activeSort, searchString } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isExistQueryString = useRef(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!searchParams.toString()) return;
    isExistQueryString.current = true;
    const params = qs.parse(searchParams.toString()) as Record<string, string>;
    dispatch(filterActions.handleQueryString(params));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const params = {
      category: activeCategory,
      sortBy: activeSort.sortBy,
      order: activeSort.order,
    };
    const queryString = qs.stringify(params);
    setSearchParams(queryString);
  }, [activeCategory, activeSort]);

  useEffect(() => {
    if (isExistQueryString.current) {
      isExistQueryString.current = false;
      return;
    }
    const params = {
      category: activeCategory,
      sortBy: activeSort.sortBy,
      order: activeSort.order,
    };
    dispatch(getPizzas(params));
  }, [activeCategory, activeSort]);

  const filteredPizzas = pizzas
    .filter((pizza) => pizza.title.toLowerCase().includes(searchString.toLowerCase()))
    .map((pizza) => <PizzaCard key={pizza.id} {...pizza} />);

  if (status === 'error') {
    return (
      <Title tag='h3' variant='fz20' className={s.errorTitle}>
        При получении пицц произошла ошибка, попробуйте перезагрузить страницу...
      </Title>
    );
  }

  return (
    <div className={s.pizzaList}>
      {status === 'loading'
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : filteredPizzas}

      {status === 'success' && !filteredPizzas.length && (
        <Title className={s.notFound} tag='h2' variant='fz32'>
          Пицца по вашему запросу не найдена :(
        </Title>
      )}
    </div>
  );
};
