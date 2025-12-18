import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './cart/cart';

export const routes: Routes = [
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
];
