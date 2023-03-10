import clsx from 'clsx';
import { FC } from 'react';

import s from './PizzaCard.module.scss';

import { pizzaSizes, pizzaTypes } from '../../constants';

interface Props {
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
  setActiveSize: React.Dispatch<React.SetStateAction<number>>;
  activeType: string;
  activeSize: number;
  sizes: number[];
  types: string[];
}

export const ChoiseBlock: FC<Props> = ({
  setActiveType,
  setActiveSize,
  activeType,
  types,
  activeSize,
  sizes,
}) => {

  return (
    <div className={s.choiseBlock}>
      <div className={s.choiseTop}>
        {pizzaTypes.map((type, i) => (
          <div
            onClick={() => setActiveType(type)}
            key={i}
            className={clsx(
              s.choiseItem,
              type === activeType && s.active,
              !types.includes(type) && s.disabled
            )}
          >
            {type}
          </div>
        ))}
      </div>

      <div className={s.choiseBottom}>
        {pizzaSizes.map((size) => (
          <div
            onClick={() => setActiveSize(size)}
            key={size}
            className={clsx(
              s.choiseItem,
              activeSize === size && s.active,
              !sizes.includes(size) && s.disabled
            )}
          >
            {size} см.
          </div>
        ))}
      </div>
    </div>
  );
};
