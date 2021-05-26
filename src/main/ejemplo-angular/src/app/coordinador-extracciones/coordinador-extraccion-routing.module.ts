import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { CoordinadorExtraccionListKendoComponent }   from '../coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component';
import { CoordinadorExtraccionCrudComponent }   from '../coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component';
import { CoordinadorExtraccionTableComponent }   from '../coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component';


const routes: Routes = [
  { path: 'coordinador-extraccion-list-kendo',  component: CoordinadorExtraccionListKendoComponent },
  { path: 'coordinador-extraccion-crud',  component: CoordinadorExtraccionCrudComponent },
  { path: 'coordinador-extraccion-table',  component: CoordinadorExtraccionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorExtraccionRoutingModule { }
