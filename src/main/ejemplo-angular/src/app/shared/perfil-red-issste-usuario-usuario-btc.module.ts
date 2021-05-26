import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { PerfilRedIsssteUsuarioUsuarioBtcRoutingModule }   from './perfil-red-issste-usuario-usuario-btc-routing.module';
import { PerfilRedIsssteListKendoComponent }   from '../perfil-red-issstes/perfil-red-issste-list-kendo/perfil-red-issste-list-kendo.component';
import { PerfilRedIsssteComponent }   from '../perfil-red-issstes/perfil-red-issste/perfil-red-issste.component';
import { PerfilRedIsssteConjuntoComponent }   from '../perfil-red-issstes/perfil-red-issste-conjunto/perfil-red-issste-conjunto.component';
import { PerfilRedIsssteCrudComponent }   from '../perfil-red-issstes/perfil-red-issste-crud/perfil-red-issste-crud.component';
import { PerfilRedIsssteTableComponent }   from '../perfil-red-issstes/perfil-red-issste-table/perfil-red-issste-table.component';
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
//import { PerfilBtcUsuarioUsuarioBtcModule }   from '../shared/perfil-btc-usuario-usuario-btc.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , PerfilRedIsssteUsuarioUsuarioBtcRoutingModule
, UsuarioPerfilModule.forRoot()
, EntidadFederativaUsuarioUsuarioBtcHospitalModule.forRoot()
//, PerfilBtcUsuarioUsuarioBtcModule.forRoot()

  ],
  declarations: [ 
      

  ],
  exports:[

  ]
})
export class PerfilRedIsssteUsuarioUsuarioBtcModule { 


    static forRoot() {
        return {
            ngModule: PerfilRedIsssteUsuarioUsuarioBtcModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: PerfilRedIsssteUsuarioUsuarioBtcModule) {
		if (parentModule) {
			throw new Error(
					'PerfilRedIsssteUsuarioUsuarioBtcModule is already loaded. Import it in the AppModule only');
		}
	}

}
