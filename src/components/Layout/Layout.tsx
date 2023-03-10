import { FC, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

import { Header } from '..';
import { useAppDispatch } from '../../hooks';
import { cartActions } from '../../store/slices/cartSlice';

interface Props {}

export const Layout: FC<Props> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cartActions.setPizzas());
  }, []);
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
