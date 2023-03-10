import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cartSlice';

import { filterReducer } from './slices/filterSlice';
import { pizzaReducer } from './slices/pizzaSlice';
import { pizzasReducer } from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
