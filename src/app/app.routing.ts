import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { CubosMarcaComponent } from './components/cubos-marca/cubos-marca.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalles/:id', component: DetallesCuboComponent },
  { path: 'cubosmarca/:marca', component: CubosMarcaComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
