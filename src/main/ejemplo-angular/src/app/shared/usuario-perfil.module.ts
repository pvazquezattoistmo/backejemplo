import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { UsuarioPerfilRoutingModule }   from './usuario-perfil-routing.module';

import { EntidadFederativaUsuarioUsuarioBtcHospitalModule }   from '../shared/entidad-federativa-usuario-usuario-btc-hospital.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , UsuarioPerfilRoutingModule
, EntidadFederativaUsuarioUsuarioBtcHospitalModule.forRoot()

  ],
  declarations: [ 

  ],
  exports:[
  ]
})
export class UsuarioPerfilModule { 


    static forRoot() {
        return {
            ngModule: UsuarioPerfilModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: UsuarioPerfilModule) {
		if (parentModule) {
			throw new Error(
					'UsuarioPerfilModule is already loaded. Import it in the AppModule only');
		}
	}

}
