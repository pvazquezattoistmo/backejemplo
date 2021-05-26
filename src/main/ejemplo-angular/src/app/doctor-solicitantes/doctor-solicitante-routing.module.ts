import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DoctorSolicitanteListKendoComponent }   from '../doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component';
import { DoctorSolicitanteCrudComponent }   from '../doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component';
import { DoctorSolicitanteTableComponent }   from '../doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component';


const routes: Routes = [
  { path: 'doctor-solicitante-list-kendo',  component: DoctorSolicitanteListKendoComponent },
  { path: 'doctor-solicitante-crud',  component: DoctorSolicitanteCrudComponent },
  { path: 'doctor-solicitante-table',  component: DoctorSolicitanteTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorSolicitanteRoutingModule { }
