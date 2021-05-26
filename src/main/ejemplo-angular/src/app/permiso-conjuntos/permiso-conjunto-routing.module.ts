import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { PermisoConjuntoListKendoComponent }   from '../permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component';
import { PermisoConjuntoCrudComponent }   from '../permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component';
import { PermisoConjuntoTableComponent }   from '../permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component';


const routes: Routes = [
  { path: 'permiso-conjunto-list-kendo',  component: PermisoConjuntoListKendoComponent },
  { path: 'permiso-conjunto-crud',  component: PermisoConjuntoCrudComponent },
  { path: 'permiso-conjunto-table',  component: PermisoConjuntoTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoConjuntoRoutingModule { }
