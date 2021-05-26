import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DoctorProcuradorListKendoComponent }   from '../doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component';
import { DoctorProcuradorCrudComponent }   from '../doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component';
import { DoctorProcuradorTableComponent }   from '../doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component';


const routes: Routes = [
  { path: 'doctor-procurador-list-kendo',  component: DoctorProcuradorListKendoComponent },
  { path: 'doctor-procurador-crud',  component: DoctorProcuradorCrudComponent },
  { path: 'doctor-procurador-table',  component: DoctorProcuradorTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorProcuradorRoutingModule { }
