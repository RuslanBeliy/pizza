import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './OrderForm.module.scss';

import iconCheck from '../../assets/check.png';

import { useAppDispatch } from '../../hooks';
import { routes } from '../../router/routes';
import { cartActions } from '../../store/slices/cart/cartSlice';
import { Button } from '../Button';
import { Input } from '../Input';
import { Title } from '../Title';

interface Props {}

export const OrderForm: FC<Props> = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [errors, setErrors] = useState<{ name: string; message: string }[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arrErr = [];

    if (!name.trim() || name.length <= 2) {
      arrErr.push({ name: 'name', message: 'Укажите корректное имя' });
    }

    if (!address.trim() || address.length <= 5) {
      arrErr.push({ name: 'address', message: 'Укажите корректный адресс' });
    }

    if (tel.length < 11 || tel.length > 11) {
      arrErr.push({ name: 'tel', message: 'Укажите корректный номер телефона' });
    }

    if (arrErr.length !== 0) {
      setErrors(arrErr);
      return;
    }
    setErrors([]);
    setIsComplete(true);
    dispatch(cartActions.clearCart());
  };

  useEffect(() => {
    if (!isComplete) return;
    setTimeout(() => navigate(routes.index), 5000);
  }, [isComplete]);

  return (
    <>
      <div className={clsx(s.complet, isComplete && s.showComplete)}>
        <div className={s.check}>
          <img src={iconCheck} alt='' />
        </div>
        <p>Ваш заказ принят, наш курьер свяжется с вами в ближайшее время</p>
      </div>

      {!isComplete && (
        <form className={s.orderForm} onSubmit={handleSubmit}>
          <Title className={s.title}>Оформление заказа</Title>
          <Input
            className={s.input}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Ваше имя'
            error={errors.reduce(
              (acc, el) => (el.name.includes('name') ? (acc = el.message) : acc),
              ''
            )}
          />
          <Input
            className={s.input}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder='Адресс доставки'
            error={errors.reduce(
              (acc, el) => (el.name.includes('address') ? (acc = el.message) : acc),
              ''
            )}
          />
          <Input
            className={s.input}
            onChange={(e) => setTel(e.target.value)}
            value={tel}
            placeholder='Номер телефона'
            type='number'
            error={errors.reduce(
              (acc, el) => (el.name.includes('tel') ? (acc = el.message) : acc),
              ''
            )}
          />
          <Button>Подтвердить</Button>
        </form>
      )}
    </>
  );
};
