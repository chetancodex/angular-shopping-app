import { Routes } from "@angular/router";

import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UserComponent } from './user.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { ProfileComponent } from './components/profile/profile.component';

export const UserRoutes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/detail/:number', component: OrderDetailComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'favorite-products', component: FavoriteProductsComponent },
  { path: 'profile', component: ProfileComponent }
];
