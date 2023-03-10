import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux/es/exports';

import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = () => {
  const ref = useRef<number | null>(null);

  return useCallback((cb: () => void, delay: number) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }

    ref.current = setTimeout(cb, delay);
  }, []);
};

