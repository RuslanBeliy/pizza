import { FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

import s from './SearchInput.module.scss';

import { Input } from '..';
import { useAppDispatch, useDebounce } from '../../hooks';
import { routes } from '../../router/routes';
import { filterActions } from '../../store/slices/filter/filterSlice';

interface Props {}

export const SearchInput: FC<Props> = () => {
  const location = useLocation();
  const [textField, setTextField] = useState('');
  const dispatch = useAppDispatch();
  const debounce = useDebounce();

  const handleChange = (str: string) => {
    setTextField(str);

    debounce(() => {
      dispatch(filterActions.setSearchString(str));
    }, 300);
  };

  return (
    <>
      {location.pathname === routes.index && (
        <div className={s.input}>
          <BiSearch className={s.searchIcon} />
          <Input
            onChange={(e) => handleChange(e.target.value)}
            value={textField}
            placeholder='Поиск пиццы...'
          />
        </div>
      )}
    </>
  );
};
