import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { RegistroExtraccionListKendoComponent }   from '../registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component';
import { RegistroExtraccionCrudComponent }   from '../registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component';
import { RegistroExtraccionTableComponent }   from '../registro-extracciones/registro-extraccion-table/registro-extraccion-table.component';


const routes: Routes = [
  { path: 'registro-extraccion-list-kendo',  component: RegistroExtraccionListKendoComponent },
  { path: 'registro-extraccion-crud/:id',  component: RegistroExtraccionCrudComponent },
  { path: 'registro-extraccion-table',  component: RegistroExtraccionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroExtraccionRoutingModule { }
