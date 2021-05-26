import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
//import { PerfilBtcListKendoComponent }   from '../perfil-btcs/perfil-btc-list-kendo/perfil-btc-list-kendo.component';
//import { PerfilBtcCrudComponent }   from '../perfil-btcs/perfil-btc-crud/perfil-btc-crud.component';
//import { PerfilBtcTableComponent }   from '../perfil-btcs/perfil-btc-table/perfil-btc-table.component';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { UsuarioBtcListKendoComponent }   from '../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component';
import { UsuarioBtcCrudComponent }   from '../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component';
import { UsuarioBtcTableComponent }   from '../usuario-btcs/usuario-btc-table/usuario-btc-table.component';


const routes: Routes = [

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
export class PerfilBtcUsuarioUsuarioBtcRoutingModule { }
