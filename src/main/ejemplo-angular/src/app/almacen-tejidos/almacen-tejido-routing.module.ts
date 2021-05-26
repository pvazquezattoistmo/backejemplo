import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { AlmacenTejidoListKendoComponent }   from '../almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component';
import { AlmacenTejidoCrudComponent }   from '../almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component';
import { AlmacenTejidoTableComponent }   from '../almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component';


const routes: Routes = [
  { path: 'almacen-tejido-list-kendo',  component: AlmacenTejidoListKendoComponent },
  { path: 'almacen-tejido-crud',  component: AlmacenTejidoCrudComponent },
  { path: 'almacen-tejido-table',  component: AlmacenTejidoTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenTejidoRoutingModule { }
