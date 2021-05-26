import { DetalleTejidoCornealComponent } from './../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component';
import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { SolicitudTejidoCornealRecepcionListKendoComponent }   from '../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component';
import { SolicitudTejidoCornealRecepcionCrudComponent }   from '../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component';
import { SolicitudTejidoCornealRecepcionTableBandejaComponent }   from '../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component';
import { SolicitudTejidoCornealRecepcionTableComponent }   from '../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component';


const routes: Routes = [
  { path: 'solicitud-tejido-corneal-recepcion-list-kendo',  component: SolicitudTejidoCornealRecepcionListKendoComponent },
  { path: 'solicitud-tejido-corneal-recepcion-crud',  component: SolicitudTejidoCornealRecepcionCrudComponent },
  { path: 'solicitud-tejido-corneal-recepcion-table-bandeja',  component: SolicitudTejidoCornealRecepcionTableBandejaComponent },
  { path: 'solicitud-tejido-corneal-recepcion-table',  component: SolicitudTejidoCornealRecepcionTableComponent },
  { path: 'detalle-tejido-corneal/:id', component: DetalleTejidoCornealComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudTejidoCornealRecepcionRoutingModule { }
