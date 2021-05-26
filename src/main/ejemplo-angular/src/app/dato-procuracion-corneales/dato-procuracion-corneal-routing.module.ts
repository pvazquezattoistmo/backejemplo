import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DatoProcuracionCornealListKendoComponent }   from '../dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component';
import { DatoProcuracionCornealCrudComponent }   from '../dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component';
import { DatoProcuracionCornealTableComponent }   from '../dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component';


const routes: Routes = [
  { path: 'dato-procuracion-corneal-list-kendo',  component: DatoProcuracionCornealListKendoComponent },
  { path: 'dato-procuracion-corneal-crud',  component: DatoProcuracionCornealCrudComponent },
  { path: 'dato-procuracion-corneal-table',  component: DatoProcuracionCornealTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatoProcuracionCornealRoutingModule { }
