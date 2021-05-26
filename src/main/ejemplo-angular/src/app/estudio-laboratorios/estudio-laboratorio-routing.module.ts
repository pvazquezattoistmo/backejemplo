import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { EstudioLaboratorioListKendoComponent }   from '../estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component';
import { EstudioLaboratorioCrudComponent }   from '../estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component';
import { EstudioLaboratorioTableComponent }   from '../estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component';


const routes: Routes = [
  { path: 'estudio-laboratorio-list-kendo',  component: EstudioLaboratorioListKendoComponent },
  { path: 'estudio-laboratorio-crud/:id',  component: EstudioLaboratorioCrudComponent },
  { path: 'estudio-laboratorio-table',  component: EstudioLaboratorioTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudioLaboratorioRoutingModule { }
