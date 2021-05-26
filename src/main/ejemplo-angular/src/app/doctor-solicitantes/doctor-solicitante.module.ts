import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DoctorSolicitanteRoutingModule }   from './doctor-solicitante-routing.module';
import { DoctorSolicitanteListKendoComponent }   from './doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component';
import { DoctorSolicitanteCrudComponent }   from './doctor-solicitante-crud/doctor-solicitante-crud.component';
import { DoctorSolicitanteConjuntoComponent }   from './doctor-solicitante-conjunto/doctor-solicitante-conjunto.component';
import { DoctorSolicitanteComponent }   from './doctor-solicitante/doctor-solicitante.component';
import { DoctorSolicitanteTableComponent }   from './doctor-solicitante-table/doctor-solicitante-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { CatalogoCargoModule }   from '../catalogo-cargos/catalogo-cargo.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { EntidadFederativaUsuarioUsuarioBtcHospitalModule} from '../shared/entidad-federativa-usuario-usuario-btc-hospital.module'
@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DoctorSolicitanteRoutingModule, EntidadFederativaUsuarioUsuarioBtcHospitalModule
, UsuarioPerfilModule.forRoot()
, CatalogoCargoModule

  ],
  declarations: [
      DoctorSolicitanteListKendoComponent,
      DoctorSolicitanteComponent ,
      DoctorSolicitanteCrudComponent ,
      DoctorSolicitanteConjuntoComponent ,
      DoctorSolicitanteTableComponent ,

  ],
  exports:[
      DoctorSolicitanteListKendoComponent,
      DoctorSolicitanteComponent ,
      DoctorSolicitanteCrudComponent ,
      DoctorSolicitanteConjuntoComponent ,
      DoctorSolicitanteTableComponent ,

  ]
})
export class DoctorSolicitanteModule {


    static forRoot() {
        return {
            ngModule: DoctorSolicitanteModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: DoctorSolicitanteModule) {
		if (parentModule) {
			throw new Error(
					'DoctorSolicitanteModule is already loaded. Import it in the AppModule only');
		}
	}

}
