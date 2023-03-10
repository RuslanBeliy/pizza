import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import s from './Container.module.scss';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(s.container, className)} {...props}>
      {children}
    </div>
  );
};
