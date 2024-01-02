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
import { ProductoCuentasComponent } from './producto-cuentas/producto-cuentas.component';
import { ProductosComponent } from './productos/productos.component';
import { SolicitudCreditoComponent } from './solicitud-credito/solicitud-credito.component';

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'detallePago', component: DetallePagoCuentaComponent},
  { path: 'historialCredito', component: HistorialCreditoComponent},
  { path: 'informacionCredito', component: InformacionCreditoComponent},
  { path: 'loginBW', component: LoginBwComponent},
  { path: 'productoCredito', component: ProductoCreditoComponent},
  { path: 'productoCuentas', component: ProductoCuentasComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'solicitudCredito', component: SolicitudCreditoComponent}
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
