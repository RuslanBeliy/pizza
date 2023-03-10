import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cart/cartSlice';

import { filterReducer } from './slices/filter/filterSlice';
import { pizzaReducer } from './slices/pizza/pizzaSlice';
import { pizzasReducer } from './slices/pizzas/pizzasSlice';

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
