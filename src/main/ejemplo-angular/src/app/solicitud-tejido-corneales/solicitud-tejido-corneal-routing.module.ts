import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { SolicitudTejidoCornealListKendoComponent }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component';
import { SolicitudTejidoCornealCrudComponent }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component';
import { SolicitudTejidoCornealTableBandejaComponent }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component';
import { SolicitudTejidoCornealTableComponent }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component';
import { DetalleTejidoCornealComponent} from '../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component';


const routes: Routes = [
  { path: 'solicitud-tejido-corneal-list-kendo',  component: SolicitudTejidoCornealListKendoComponent },
  { path: 'solicitud-tejido-corneal-crud/:id',  component: SolicitudTejidoCornealCrudComponent },
  { path: 'solicitud-tejido-corneal-crud',  component: SolicitudTejidoCornealCrudComponent },
  { path: 'solicitud-tejido-corneal-table-bandeja',  component: SolicitudTejidoCornealTableBandejaComponent },
  { path: 'solicitud-tejido-corneal-table',  component: SolicitudTejidoCornealTableComponent },
{ path: 'detalle-tejido-corneal/:id',  component: DetalleTejidoCornealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudTejidoCornealRoutingModule { }
