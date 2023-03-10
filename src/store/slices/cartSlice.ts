import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartPizza } from '../../models/Pizza';
import { getLocalStorage, setLocalStorage } from '../../utils';

interface State {
  pizzas: CartPizza[];
  countPizzas: number;
  totalPrice: number;
}

const initialState: State = {
  pizzas: [],
  countPizzas: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPizzas(state) {
      state.pizzas = getLocalStorage('pizzas');
      state.countPizzas = state.pizzas.reduce((acc, pizza) => (acc += pizza.count), 0);
      state.totalPrice = state.pizzas.reduce((acc, pizza) => (acc += pizza.price * pizza.count), 0);
    },
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
        setLocalStorage('pizzas', state.pizzas);
        return;
      }

      findPizza.count++;
      setLocalStorage('pizzas', state.pizzas);
    },
    incrementPizza(state, { payload }: PayloadAction<string>) {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      if (!pizza) return;
      pizza.count++;
      state.countPizzas++;
      state.totalPrice += pizza.price;
      setLocalStorage('pizzas', state.pizzas);
    },
    decrementPizza(state, { payload }: PayloadAction<string>) {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      if (!pizza) return;
      pizza.count--;
      state.countPizzas--;
      state.totalPrice -= pizza.price;
      setLocalStorage('pizzas', state.pizzas);
    },
    deletePizza(state, { payload }: PayloadAction<string>) {
      const index = state.pizzas.findIndex((pizza) => pizza.id === payload);
      if (index === -1) return;
      state.countPizzas -= state.pizzas[index].count;
      state.totalPrice -= state.pizzas[index].price * state.pizzas[index].count;
      state.pizzas.splice(index, 1);
      setLocalStorage('pizzas', state.pizzas);
    },
    clearCart(state) {
      state.pizzas = [];
      state.countPizzas = 0;
      state.totalPrice = 0;
      setLocalStorage('pizzas', state.pizzas);
    },
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
