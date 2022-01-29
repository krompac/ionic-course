import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthPageRoutingModule),
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then((m) => m.BookingsPageModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
