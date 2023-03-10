import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';

import s from './CategoriesItem.module.scss';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  isActive: boolean;
}

export const CategoriesItem: FC<Props> = ({ name, isActive, className, ...props }) => {
  return (
    <li className={clsx(s.filterItem, isActive && s.active, className)} {...props}>
      {name}
    </li>
  );
};
