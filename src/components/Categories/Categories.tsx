import { FC } from 'react';

import s from './Categories.module.scss';

import { CategoriesItem } from '..';
import { categories } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterActions } from '../../store/slices/filter/filterSlice';
import { activeCategorySelector } from '../../store/slices/filter/selectors';

interface Props {}

export const Categories: FC<Props> = () => {
  const activeCategory = useAppSelector(activeCategorySelector);
  const dispatch = useAppDispatch();

  const handleClick = (category: string | null) => {
    dispatch(filterActions.setActiveCategory(category));
  };

  return (
    <ul className={s.list}>
      <CategoriesItem
        onClick={() => handleClick(null)}
        name='Все'
        isActive={activeCategory === null}
      />
      {categories.map((category, i) => (
        <CategoriesItem
          onClick={() => handleClick(category)}
          key={i}
          name={category}
          isActive={category === activeCategory}
        />
      ))}
    </ul>
  );
};
