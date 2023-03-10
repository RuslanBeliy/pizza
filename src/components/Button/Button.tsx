import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import s from './Button.module.scss';

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'add' | 'second' | 'main';
  count?: number;
}

export const Button: FC<Props> = ({
  children,
  className,
  count = 0,
  variant = 'main',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <button onClick={handleClick} className={clsx(s.button, s[variant], className)} {...props}>
      {variant === 'add' && <AiOutlinePlus className={s.icon} />}
      {variant === 'add' && count > 0 && <span className={s.totalCount}>{count}</span>}
      {children}
    </button>
  );
};
