import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { GestionMuestraMicrobiologiaListKendoComponent }   from '../gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component';
import { GestionMuestraMicrobiologiaCrudComponent }   from '../gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component';
import { GestionMuestraMicrobiologiaTableComponent }   from '../gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component';


const routes: Routes = [
  { path: 'gestion-muestra-microbiologia-list-kendo',  component: GestionMuestraMicrobiologiaListKendoComponent },
  { path: 'gestion-muestra-microbiologia-crud',  component: GestionMuestraMicrobiologiaCrudComponent },
  { path: 'gestion-muestra-microbiologia-table',  component: GestionMuestraMicrobiologiaTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMuestraMicrobiologiaRoutingModule { }
