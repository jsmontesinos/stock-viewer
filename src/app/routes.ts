import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  {
    path: 'stocks',
    loadChildren: './features/stocks/stocks.module#StocksModule'
  }
];
