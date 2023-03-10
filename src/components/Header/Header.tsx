import { FC } from 'react';

import s from './Header.module.scss';

import { CartButton, Container,  Logo, SearchInput } from '..';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className={s.header}>
      <Container className={s.wrap}>
        <Logo className={s.logo} />
        <SearchInput />
        <CartButton />
      </Container>
    </header>
  );
};
