import { FC } from 'react';

import s from './FilterBlock.module.scss';

import { Categories, SortBy } from '..';

interface Props {}

export const FilterBlock: FC<Props> = () => {
  return (
    <div className={s.filterBlock}>
      <Categories />
      <div className={s.sort}>
        <SortBy />
      </div>
    </div>
  );
};
