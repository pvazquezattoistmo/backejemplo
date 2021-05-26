import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { SolicitudEvaluacionCornealListKendoComponent }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component';
import { SolicitudEvaluacionCornealCrudComponent }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component';
import { SolicitudEvaluacionCornealTableComponent }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component';
import { DetalleDonanteExtraccionComponent} from '../solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component'

const routes: Routes = [
  { path: 'solicitud-evaluacion-corneal-list-kendo',  component: SolicitudEvaluacionCornealListKendoComponent },
  { path: 'solicitud-evaluacion-corneal-crud',  component: SolicitudEvaluacionCornealCrudComponent },
  { path: 'solicitud-evaluacion-corneal-crud/:id',  component: SolicitudEvaluacionCornealCrudComponent },
  { path: 'detalle-donante-extraccion/:id',  component: DetalleDonanteExtraccionComponent },
  { path: 'solicitud-evaluacion-corneal-table',  component: SolicitudEvaluacionCornealTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudEvaluacionCornealRoutingModule { }
