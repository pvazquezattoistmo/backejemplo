import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DatoCorneaExtraccionListKendoComponent }   from '../dato-cornea-extracciones/dato-cornea-extraccion-list-kendo/dato-cornea-extraccion-list-kendo.component';
import { DatoCorneaExtraccionCrudComponent }   from '../dato-cornea-extracciones/dato-cornea-extraccion-crud/dato-cornea-extraccion-crud.component';
import { DatoCorneaExtraccionTableComponent }   from '../dato-cornea-extracciones/dato-cornea-extraccion-table/dato-cornea-extraccion-table.component';


const routes: Routes = [
  { path: 'dato-cornea-extraccion-list-kendo',  component: DatoCorneaExtraccionListKendoComponent },
  { path: 'dato-cornea-extraccion-crud',  component: DatoCorneaExtraccionCrudComponent },
  { path: 'dato-cornea-extraccion-table',  component: DatoCorneaExtraccionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatoCorneaExtraccionRoutingModule { }
