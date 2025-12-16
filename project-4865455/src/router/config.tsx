import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const OrderPage = lazy(() => import('../pages/order/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const MenuPage = lazy(() => import('../pages/menu/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/order',
    element: <OrderPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;