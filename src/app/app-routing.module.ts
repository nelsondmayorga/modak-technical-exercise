import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [authGuard],
  },
  {
    path: 'artwork-detail',
    loadChildren: () => import('./artwork-detail/artwork-detail.module').then((m) => m.ArtworkDetailModule),
    canActivate: [authGuard],
  },
  {
    path: 'datatable',
    loadComponent: () => import('./datatable/containers/datatable-container/datatable-container.component'),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
