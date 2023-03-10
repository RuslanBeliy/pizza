import clsx from 'clsx';
import { AnchorHTMLAttributes, FC } from 'react';

import { Link } from 'react-router-dom';

import s from './Logo.module.scss';

import LogoIcon from '../../assets/logo.svg';
import { routes } from '../../router/routes';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Logo: FC<Props> = ({ className, ...props }) => {
  return (
    <Link to={routes.index} className={clsx(s.logo, className)} {...props}>
      <img src={LogoIcon} alt='logo' />
    </Link>
  );
};
