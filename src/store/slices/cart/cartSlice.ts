import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartPizza } from '../../../models/Pizza';
import { getCartFromLS } from '../../../utils';

interface State {
  pizzas: CartPizza[];
  countPizzas: number;
  totalPrice: number;
}

const { pizzas, totalCount, totalPrice } = getCartFromLS();

const initialState: State = {
  pizzas,
  countPizzas: totalCount,
  totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, { payload }: PayloadAction<CartPizza>) {
      const findPizza = state.pizzas.find(
        (pizza) =>
          pizza.title.includes(payload.title) &&
          pizza.size === payload.size &&
          pizza.type === payload.type
      );

      state.countPizzas++;
      state.totalPrice += payload.price;

      if (!findPizza) {
        state.pizzas.push(payload);
        return;
      }

      findPizza.count++;
    },
    incrementPizza(state, { payload }: PayloadAction<string>) {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      if (!pizza) return;
      pizza.count++;
      state.countPizzas++;
      state.totalPrice += pizza.price;
    },
    decrementPizza(state, { payload }: PayloadAction<string>) {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      if (!pizza) return;
      pizza.count--;
      state.countPizzas--;
      state.totalPrice -= pizza.price;
    },
    deletePizza(state, { payload }: PayloadAction<string>) {
      const index = state.pizzas.findIndex((pizza) => pizza.id === payload);
      if (index === -1) return;
      state.countPizzas -= state.pizzas[index].count;
      state.totalPrice -= state.pizzas[index].price * state.pizzas[index].count;
      state.pizzas.splice(index, 1);
    },
    clearCart(state) {
      state.pizzas = [];
      state.countPizzas = 0;
      state.totalPrice = 0;
    },
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
