import { FC } from 'react';
import { BiRuble } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

import s from './OrderComplet.module.scss';

import { Button } from '..';
import { useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';
import { cartSelector } from '../../store/slices/cart/selectors';
import { declinationWord } from '../../utils';

interface Props {}

export const OrderComplet: FC<Props> = () => {
  const { countPizzas, pizzas, totalPrice } = useAppSelector(cartSelector);
  const correctWord = declinationWord(countPizzas, ['товар', 'товара', 'товаров']);
  const navigate = useNavigate();
  return (
    <div className={s.orderComplet}>
      <div className={s.top}>
        Итого{' '}
        <span>
          {totalPrice}
          <BiRuble />
        </span>
      </div>
      <div className={s.aboutList}>
        {pizzas.map((pizza) => (
          <div key={`${pizza.id}_${pizza.size}_${pizza.type}`} className={s.aboutItem}>
            {pizza.title} {pizza.size} см. {pizza.count !== 1 && `x ${pizza.count} шт.`}{' '}
            <span>
              {pizza.price * pizza.count}
              <BiRuble />
            </span>
          </div>
        ))}
      </div>

      <div className={s.bottom}>
        <div className={s.totalCount}>
          Всего {countPizzas} {correctWord}
        </div>
        <Button onClick={() => navigate(routes.order)}>Перейти к оформлению</Button>
      </div>
    </div>
  );
};
