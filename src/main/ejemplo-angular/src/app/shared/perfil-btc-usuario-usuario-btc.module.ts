import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
//import { PerfilBtcUsuarioUsuarioBtcRoutingModule }   from './perfil-btc-usuario-usuario-btc-routing.module';
//import { PerfilBtcListKendoComponent }   from '../perfil-btcs/perfil-btc-list-kendo/perfil-btc-list-kendo.component';
//import { PerfilBtcComponent }   from '../perfil-btcs/perfil-btc/perfil-btc.component';
//import { PerfilBtcConjuntoComponent }   from '../perfil-btcs/perfil-btc-conjunto/perfil-btc-conjunto.component';
//import { PerfilBtcCrudComponent }   from '../perfil-btcs/perfil-btc-crud/perfil-btc-crud.component';
//import { PerfilBtcTableComponent }   from '../perfil-btcs/perfil-btc-table/perfil-btc-table.component';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioComponent }   from '../usuarios/usuario/usuario.component';
import { UsuarioConjuntoComponent }   from '../usuarios/usuario-conjunto/usuario-conjunto.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { UsuarioBtcListKendoComponent }   from '../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component';
import { UsuarioBtcComponent }   from '../usuario-btcs/usuario-btc/usuario-btc.component';
import { UsuarioBtcConjuntoComponent }   from '../usuario-btcs/usuario-btc-conjunto/usuario-btc-conjunto.component';
import { UsuarioBtcCrudComponent }   from '../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component';
import { UsuarioBtcTableComponent }   from '../usuario-btcs/usuario-btc-table/usuario-btc-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EntidadFederativaUsuarioUsuarioBtcHospitalModule }   from '../shared/entidad-federativa-usuario-usuario-btc-hospital.module';
import { PerfilRedIsssteUsuarioUsuarioBtcModule }   from '../shared/perfil-red-issste-usuario-usuario-btc.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule
, UsuarioPerfilModule.forRoot()
, EntidadFederativaUsuarioUsuarioBtcHospitalModule.forRoot()
//, PerfilRedIsssteUsuarioUsuarioBtcModule.forRoot()

  ],
  declarations: [


  ],
  exports:[

  ]
})
export class PerfilBtcUsuarioUsuarioBtcModule {


    static forRoot() {
        return {
            ngModule: PerfilBtcUsuarioUsuarioBtcModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: PerfilBtcUsuarioUsuarioBtcModule) {
		if (parentModule) {
			throw new Error(
					'PerfilBtcUsuarioUsuarioBtcModule is already loaded. Import it in the AppModule only');
		}
	}

}
