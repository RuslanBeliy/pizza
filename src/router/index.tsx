import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';

import { Layout } from '../components';
import { CartPage, HomePage, NotFound, OrderPage, PizzaPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: routes.index,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routes.cart, element: <CartPage /> },
      { path: routes.order, element: <OrderPage /> },
      { path: routes.pizza + '/:id', element: <PizzaPage /> },
    ],
  },
]);
