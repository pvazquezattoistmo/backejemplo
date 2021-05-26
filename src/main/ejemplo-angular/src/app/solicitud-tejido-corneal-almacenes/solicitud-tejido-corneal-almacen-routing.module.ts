import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { SolicitudTejidoCornealAlmacenListKendoComponent }   from '../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component';
import { SolicitudTejidoCornealAlmacenCrudComponent }   from '../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component';
import { SolicitudTejidoCornealAlmacenTableComponent }   from '../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component';


const routes: Routes = [
  { path: 'solicitud-tejido-corneal-almacen-list-kendo',  component: SolicitudTejidoCornealAlmacenListKendoComponent },
  { path: 'solicitud-tejido-corneal-almacen-crud',  component: SolicitudTejidoCornealAlmacenCrudComponent },
  { path: 'solicitud-tejido-corneal-almacen-table',  component: SolicitudTejidoCornealAlmacenTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudTejidoCornealAlmacenRoutingModule { }
