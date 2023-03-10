import { FC } from 'react';

import { BiRuble } from 'react-icons/bi';

import s from './PizzaCard.module.scss';

import { Button } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CartPizza } from '../../models/Pizza';
import { cartActions } from '../../store/slices/cart/cartSlice';
import { findPizzaByIdSelector } from '../../store/slices/cart/selectors';

interface Props extends CartPizza {}

export const AddToCart: FC<Props> = ({ id, imageUrl, price, size, title, type, count }) => {
  const findPizza = useAppSelector(findPizzaByIdSelector(id));
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const pizza = {
      id,
      imageUrl,
      price,
      size,
      title,
      type,
      count,
    };
    dispatch(cartActions.addPizza(pizza));
  };
  return (
    <div className={s.addToCart}>
      <div className={s.price}>
        {price}
        <BiRuble />
      </div>
      <Button onClick={handleClick} variant='add' count={findPizza?.count}>
        Добавить
      </Button>
    </div>
  );
};
