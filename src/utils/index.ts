import { CartPizza } from '../models/Pizza';

export const declinationWord = (num: number, words: string[]) => {
  num = num % 10;
  if (num > 10 && num < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
};

export const setCartToLS = (pizzas: CartPizza[]) => {
  localStorage.setItem('pizzas', JSON.stringify(pizzas));
};

export const getCartFromLS = () => {
  const data = localStorage.getItem('pizzas');
  const pizzas = data ? (JSON.parse(data) as CartPizza[]) : [];
  const totalPrice = pizzas.reduce((acc, pizza) => (acc += pizza.price * pizza.count), 0);
  const totalCount = pizzas.reduce((acc, pizza) => (acc += pizza.count), 0);
  return {
    pizzas,
    totalPrice,
    totalCount,
  };
};
