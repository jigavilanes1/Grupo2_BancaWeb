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
import { ProductosComponent } from './productos/productos.component';
import { SolicitudCreditoComponent } from './solicitud-credito/solicitud-credito.component';
import { ConCreditoComponent } from './con-credito/con-credito.component';
import { DineroComponent } from './dinero/dinero.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionesComponent,
    RegistrarseComponent,
    DetallePagoCuentaComponent,
    HistorialCreditoComponent,
    InformacionCreditoComponent,
    LoginBwComponent,
    ProductoCreditoComponent,
    ProductosComponent,
    SolicitudCreditoComponent,
    ConCreditoComponent,
    DineroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
