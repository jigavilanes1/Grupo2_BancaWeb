<<<<<<< HEAD:src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

/************************* COMPONENTS ************************************** */
import { OpcionesComponent } from './opciones/opciones.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { DetallePagoCuentaComponent } from './detalle-pago-cuenta/detalle-pago-cuenta.component';
import { HistorialCreditoComponent } from './historial-credito/historial-credito.component';
import { InformacionCreditoComponent } from './informacion-credito/informacion-credito.component';
import { LoginBwComponent } from './login-bw/login-bw.component';
import { ProductoCreditoComponent } from './producto-credito/producto-credito.component';
import { ProductoCuentasComponent } from './producto-cuentas/producto-cuentas.component';
import { ProductosComponent } from './productos/productos.component';
import { SolicitudCreditoComponent } from './solicitud-credito/solicitud-credito.component';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 057b748fc7ead57965575b5ce8964536fc499e58:bancaWeb/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD:src/app/app.module.ts
    OpcionesComponent,
    RegistrarseComponent,
    DetallePagoCuentaComponent,
    HistorialCreditoComponent,
    InformacionCreditoComponent,
    LoginBwComponent,
    ProductoCreditoComponent,
    ProductoCuentasComponent,
    ProductosComponent,
    SolicitudCreditoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
=======
    RegistroComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
>>>>>>> 057b748fc7ead57965575b5ce8964536fc499e58:bancaWeb/src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
