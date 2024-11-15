import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { LoginComponent } from './components/login/login.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';
import { CubosMarcaComponent } from './components/cubos-marca/cubos-marca.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesCuboComponent,
    LoginComponent,
    CubosMarcaComponent,
    PerfilComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider, provideHttpClient(), ServiceCubos],
  bootstrap: [AppComponent],
})
export class AppModule {}
