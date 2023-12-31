import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

/************************* COMPONENTS ************************************** */
import { OpcionesComponent } from './opciones/opciones.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'registrarse', component: RegistrarseComponent}
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
