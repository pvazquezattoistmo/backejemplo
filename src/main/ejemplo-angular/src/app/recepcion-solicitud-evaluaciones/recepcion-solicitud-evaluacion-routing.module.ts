import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { RecepcionSolicitudEvaluacionListKendoComponent }   from '../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component';
import { RecepcionSolicitudEvaluacionCrudComponent }   from '../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component';
import { RecepcionSolicitudEvaluacionTableComponent }   from '../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component';


const routes: Routes = [
  { path: 'recepcion-solicitud-evaluacion-list-kendo',  component: RecepcionSolicitudEvaluacionListKendoComponent },
  { path: 'recepcion-solicitud-evaluacion-crud/:id',  component: RecepcionSolicitudEvaluacionCrudComponent },
  { path: 'recepcion-solicitud-evaluacion-table',  component: RecepcionSolicitudEvaluacionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcionSolicitudEvaluacionRoutingModule { }
