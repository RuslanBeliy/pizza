import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

import { Header } from '..';

interface Props {}

export const Layout: FC<Props> = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
