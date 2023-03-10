import clsx from 'clsx';
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';

import s from './SortBy.module.scss';

import { SortIcons } from './SortIcons';

import { sortList } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SortBy } from '../../models/SortBy';
import { filterActions } from '../../store/slices/filterSlice';

interface Props {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const SortPopup: FC<Props> = ({ setIsShow }) => {
  const { activeSort } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClick = (obj: SortBy) => {
    dispatch(filterActions.setActiveSort(obj));
    setIsShow(false);
  };

  const globalListener = useCallback((e: MouseEvent) => {
    if (popupRef.current && !e.composedPath().includes(popupRef.current)) {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', globalListener);
    return () => {
      document.body.removeEventListener('click', globalListener);
    };
  }, []);

  return (
    <div ref={popupRef} className={s.popup}>
      {sortList.map((el) => (
        <div
          onClick={() => handleClick(el)}
          className={clsx(s.item, activeSort.id === el.id && s.active)}
          key={el.id}
        >
          <span>{el.name}</span>
          <SortIcons order={el.order} />
        </div>
      ))}
    </div>
  );
};
