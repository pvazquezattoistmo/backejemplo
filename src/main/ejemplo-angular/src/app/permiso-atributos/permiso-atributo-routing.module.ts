import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { PermisoAtributoListKendoComponent }   from '../permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component';
import { PermisoAtributoCrudComponent }   from '../permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component';
import { PermisoAtributoTableComponent }   from '../permiso-atributos/permiso-atributo-table/permiso-atributo-table.component';


const routes: Routes = [
  { path: 'permiso-atributo-list-kendo',  component: PermisoAtributoListKendoComponent },
  { path: 'permiso-atributo-crud',  component: PermisoAtributoCrudComponent },
  { path: 'permiso-atributo-table',  component: PermisoAtributoTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoAtributoRoutingModule { }
