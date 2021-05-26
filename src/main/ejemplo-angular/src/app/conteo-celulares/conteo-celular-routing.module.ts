import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { ConteoCelularListKendoComponent }   from '../conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component';
import { ConteoCelularCrudComponent }   from '../conteo-celulares/conteo-celular-crud/conteo-celular-crud.component';
import { ConteoCelularTableComponent }   from '../conteo-celulares/conteo-celular-table/conteo-celular-table.component';


const routes: Routes = [
  { path: 'conteo-celular-list-kendo',  component: ConteoCelularListKendoComponent },
  { path: 'conteo-celular-crud/:id',  component: ConteoCelularCrudComponent },
  { path: 'conteo-celular-table',  component: ConteoCelularTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteoCelularRoutingModule { }
