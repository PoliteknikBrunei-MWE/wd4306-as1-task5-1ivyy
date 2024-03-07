import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  {
    path: 'places',
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersPageModule),
  },
  {
    path: 'new-offer',
    loadChildren: () =>
      import('./new-offer/new-offer.module').then((m) => m.NewOfferPageModule),
  },
  {
    path: 'place-detail',
    loadChildren: () =>
      import('./place-detail/place-detail.module').then(
        (m) => m.PlaceDetailPageModule
      ),
  },
  {
    path: 'offer-bookings',
    loadChildren: () =>
      import('./offer-bookings/offer-bookings.module').then(
        (m) => m.OfferBookingsPageModule
      ),
  },
  {
    path: 'edit-offer',
    loadChildren: () =>
      import('./edit-offer/edit-offer.module').then(
        (m) => m.EditOfferPageModule
      ),
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./bookings/bookings.module').then((m) => m.BookingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
