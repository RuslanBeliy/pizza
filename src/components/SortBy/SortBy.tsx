import clsx from 'clsx';
import { FC, useState } from 'react';

import { MdOutlineArrowDropDown } from 'react-icons/md';

import s from './SortBy.module.scss';

import { SortIcons } from './SortIcons';
import { SortPopup } from './SortPopup';

import { useAppSelector } from '../../hooks';

interface Props {}

export const SortBy: FC<Props> = () => {
  const [isShow, setIsShow] = useState(false);
  const activeSort = useAppSelector((state) => state.filter.activeSort);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsShow((prev) => !prev);
  };

  return (
    <div className={s.sortBy}>
      <div className={s.title}>
        <MdOutlineArrowDropDown className={clsx(s.arrowIcon, isShow && s.arrowIconRotated)} />
        Сортировать по:
        <span onClick={handleClick} className={s.titleSpan}>
          <span>{activeSort.name}</span>
          <SortIcons order={activeSort.order} />
        </span>
      </div>
      {isShow && <SortPopup setIsShow={setIsShow} />}
    </div>
  );
};
