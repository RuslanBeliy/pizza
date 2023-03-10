import { RootState } from '../..';

export const cartSelector = (state: RootState) => state.cart;
export const cartPizzasSelector = (state: RootState) => state.cart.pizzas;
export const countPizzasSelector = (state: RootState) => state.cart.countPizzas;
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;
export const findPizzaByIdSelector = (id: string) => (state: RootState) =>
  state.cart.pizzas.find((pizza) => pizza.id === id);
