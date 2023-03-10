import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: FC<Props> = ({ className, error = '', ...props }) => {
  return (
    <label className={s.label}>
      <input className={clsx(s.input, className, error && s.error)} {...props} />
      {error && <span className={s.lableError}>{error}</span>}
    </label>
  );
};
