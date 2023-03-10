import clsx from 'clsx';
import { FC } from 'react';

import s from './PizzaCard.module.scss';

import veganIcon from '../../assets/vegan.svg';

interface Props {
  category: string;
  isNew: boolean;
}

export const IconsDecor: FC<Props> = ({ category, isNew }) => {
  return (
    <div className={s.iconsBox}>
      {category === 'Вегетарианские' && (
        <div className={s.iconHelp}>
          <img src={veganIcon} alt='vegan' />
        </div>
      )}
      {isNew && <div className={clsx(s.iconHelp, s.iconNew)}>new</div>}
    </div>
  );
};
