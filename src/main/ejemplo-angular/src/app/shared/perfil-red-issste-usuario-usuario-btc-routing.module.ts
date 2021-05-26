import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { PerfilRedIsssteListKendoComponent }   from '../perfil-red-issstes/perfil-red-issste-list-kendo/perfil-red-issste-list-kendo.component';
import { PerfilRedIsssteCrudComponent }   from '../perfil-red-issstes/perfil-red-issste-crud/perfil-red-issste-crud.component';
import { PerfilRedIsssteTableComponent }   from '../perfil-red-issstes/perfil-red-issste-table/perfil-red-issste-table.component';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { UsuarioBtcListKendoComponent }   from '../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component';
import { UsuarioBtcCrudComponent }   from '../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component';
import { UsuarioBtcTableComponent }   from '../usuario-btcs/usuario-btc-table/usuario-btc-table.component';


const routes: Routes = [
  { path: 'perfil-red-issste-list-kendo',  component: PerfilRedIsssteListKendoComponent },
  { path: 'perfil-red-issste-crud',  component: PerfilRedIsssteCrudComponent },
  { path: 'perfil-red-issste-table',  component: PerfilRedIsssteTableComponent },
  { path: 'usuario-list-kendo',  component: UsuarioListKendoComponent },
  { path: 'usuario-crud',  component: UsuarioCrudComponent },
  { path: 'usuario-table',  component: UsuarioTableComponent },
  { path: 'usuario-btc-list-kendo',  component: UsuarioBtcListKendoComponent },
  { path: 'usuario-btc-crud',  component: UsuarioBtcCrudComponent },
  { path: 'usuario-btc-table',  component: UsuarioBtcTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRedIsssteUsuarioUsuarioBtcRoutingModule { }
