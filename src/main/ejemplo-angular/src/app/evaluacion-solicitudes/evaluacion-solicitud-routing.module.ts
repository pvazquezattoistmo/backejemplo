import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { EvaluacionSolicitudListKendoComponent }   from '../evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component';
import { EvaluacionSolicitudCrudComponent }   from '../evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component';
import { EvaluacionSolicitudTableComponent }   from '../evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component';
import { EvaluacionSolicitudTableBandejaComponent } from './evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component';


const routes: Routes = [
  { path: 'evaluacion-solicitud-list-kendo',  component: EvaluacionSolicitudListKendoComponent },
  { path: 'evaluacion-solicitud-crud',  component: EvaluacionSolicitudCrudComponent },
  { path: 'evaluacion-solicitud-table',  component: EvaluacionSolicitudTableComponent },
  { path: 'evaluacion-solicitud-table-bandeja',  component: EvaluacionSolicitudTableBandejaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionSolicitudRoutingModule { }
