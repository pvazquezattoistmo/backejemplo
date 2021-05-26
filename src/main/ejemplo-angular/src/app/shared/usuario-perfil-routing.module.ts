import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { PerfilListKendoComponent }   from '../perfiles/perfil-list-kendo/perfil-list-kendo.component';
import { PerfilCrudComponent }   from '../perfiles/perfil-crud/perfil-crud.component';
import { PerfilTableComponent }   from '../perfiles/perfil-table/perfil-table.component';


const routes: Routes = [
  { path: 'usuario-list-kendo',  component: UsuarioListKendoComponent },
  { path: 'usuario-crud',  component: UsuarioCrudComponent },
  { path: 'usuario-table',  component: UsuarioTableComponent },
  { path: 'perfil-list-kendo',  component: PerfilListKendoComponent },
  { path: 'perfil-crud',  component: PerfilCrudComponent },
  { path: 'perfil-table',  component: PerfilTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioPerfilRoutingModule { }
