import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalles/:id', component: DetallesCuboComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
