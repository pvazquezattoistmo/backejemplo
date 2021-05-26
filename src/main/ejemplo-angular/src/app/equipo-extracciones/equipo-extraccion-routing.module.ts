import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { EquipoExtraccionListKendoComponent }   from '../equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component';
import { EquipoExtraccionCrudComponent }   from '../equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component';
import { EquipoExtraccionTableComponent }   from '../equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component';


const routes: Routes = [
  { path: 'equipo-extraccion-list-kendo',  component: EquipoExtraccionListKendoComponent },
  { path: 'equipo-extraccion-crud',  component: EquipoExtraccionCrudComponent },
  { path: 'equipo-extraccion-table',  component: EquipoExtraccionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoExtraccionRoutingModule { }
