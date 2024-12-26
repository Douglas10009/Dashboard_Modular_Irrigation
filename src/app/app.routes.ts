import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsSystemComponent } from './pages/details-system/details-system.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:device', component: DetailsSystemComponent },
];
