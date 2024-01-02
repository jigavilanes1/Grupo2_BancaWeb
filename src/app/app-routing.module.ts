import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

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

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'detallePago', component: DetallePagoCuentaComponent},
  { path: 'historialCredito', component: HistorialCreditoComponent},
  { path: 'informacionCredito', component: InformacionCreditoComponent},
  { path: 'loginBW', component: LoginBwComponent},
  { path: 'productoCredito', component: ProductoCreditoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'solicitudCredito', component: SolicitudCreditoComponent},
  { path: 'conCredito', component: ConCreditoComponent},
  { path: 'dinero', component: DineroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
