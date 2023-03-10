import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import s from './Title.module.scss';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3';
  variant?: 'fz38' | 'fz32' | 'fz20';
}

export const Title: FC<Props> = ({
  children,
  className,
  variant = 'fz38',
  tag = 'h1',
  ...props
}) => {
  const Tag = tag;

  return (
    <Tag className={clsx(s.title, s[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
