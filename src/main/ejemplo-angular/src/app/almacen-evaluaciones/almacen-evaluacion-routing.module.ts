import { AlmacenEvaluacionCrudComponent } from './almacen-evaluacion-crud/almacen-evaluacion-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenEvaluacionTableBandejaComponent } from './almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component';
import { IngresoSolictudTejidoComponent } from './ingreso-solictud-tejido/ingreso-solictud-tejido.component';

const routes: Routes = [
  { path: 'almacen-evaluacion-crud/:id',  component: AlmacenEvaluacionCrudComponent },
  { path: 'almacen-bandeja',  component: AlmacenEvaluacionTableBandejaComponent },
  { path: 'ingreso-solictud-tejido/:id',  component: IngresoSolictudTejidoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenEvaluacionRoutingModule { }
