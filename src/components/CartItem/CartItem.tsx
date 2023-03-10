import { FC } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiRuble } from 'react-icons/bi';

import s from './CartItem.module.scss';

import { useAppDispatch } from '../../hooks';
import { CartPizza } from '../../models/Pizza';
import { cartActions } from '../../store/slices/cartSlice';
import { LessMore } from '../LessMore';
import { Title } from '../Title';

interface Props extends CartPizza {}

export const CartItem: FC<Props> = ({ id, imageUrl, price, size, title, type, count }) => {
  const dispatch = useAppDispatch();

  const incrementPizza = () => {
    dispatch(cartActions.incrementPizza(id));
  };
  const decrementPizza = () => {
    dispatch(cartActions.decrementPizza(id));
  };
  const deletePizza = () => {
    dispatch(cartActions.deletePizza(id));
  };
  return (
    <div className={s.cartItem}>
      <AiOutlineCloseCircle onClick={deletePizza} className={s.closeIcon} />
      <div className={s.img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={s.info}>
        <Title className={s.title} tag='h3' variant='fz20'>
          {title}
        </Title>
        <div className={s.about}>
          <span>Диаметр:</span> {size} см., {type.toLowerCase()} тесто
        </div>
        <LessMore count={count} incrementPizza={incrementPizza} decrementPizza={decrementPizza} />
        <div className={s.price}>
          {price * count}
          <BiRuble />
        </div>
      </div>
    </div>
  );
};
