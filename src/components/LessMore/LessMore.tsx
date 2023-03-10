import clsx from 'clsx';
import { FC } from 'react';

import s from './LessMore.module.scss';

interface Props {
  count: number;
  decrementPizza: () => void;
  incrementPizza: () => void;
}

export const LessMore: FC<Props> = ({ count, decrementPizza, incrementPizza }) => {
  return (
    <div className={s.lessMore}>
      <span
        onClick={decrementPizza}
        className={clsx(s.control, s.controlLeft, count === 1 && s.disabled)}
      >
        -
      </span>
      <span>{count}</span>
      <span onClick={incrementPizza} className={clsx(s.control, s.controlRight)}>
        +
      </span>
    </div>
  );
};
