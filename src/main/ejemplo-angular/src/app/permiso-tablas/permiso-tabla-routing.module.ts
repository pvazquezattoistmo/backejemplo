import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { PermisoTablaListKendoComponent }   from '../permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component';
import { PermisoTablaCrudComponent }   from '../permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component';
import { PermisoTablaTableComponent }   from '../permiso-tablas/permiso-tabla-table/permiso-tabla-table.component';


const routes: Routes = [
  { path: 'permiso-tabla-list-kendo',  component: PermisoTablaListKendoComponent },
  { path: 'permiso-tabla-crud',  component: PermisoTablaCrudComponent },
  { path: 'permiso-tabla-table',  component: PermisoTablaTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoTablaRoutingModule { }
