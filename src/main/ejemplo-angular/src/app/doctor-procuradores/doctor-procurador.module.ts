import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DoctorProcuradorRoutingModule }   from './doctor-procurador-routing.module';
import { DoctorProcuradorListKendoComponent }   from './doctor-procurador-list-kendo/doctor-procurador-list-kendo.component';
import { DoctorProcuradorCrudComponent }   from './doctor-procurador-crud/doctor-procurador-crud.component';
import { DoctorProcuradorConjuntoComponent }   from './doctor-procurador-conjunto/doctor-procurador-conjunto.component';
import { DoctorProcuradorComponent }   from './doctor-procurador/doctor-procurador.component';
import { DoctorProcuradorTableComponent }   from './doctor-procurador-table/doctor-procurador-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EntidadFederativaUsuarioUsuarioBtcHospitalModule }   from '../shared/entidad-federativa-usuario-usuario-btc-hospital.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DoctorProcuradorRoutingModule
, UsuarioPerfilModule.forRoot()
, EntidadFederativaUsuarioUsuarioBtcHospitalModule.forRoot()

  ],
  declarations: [ 
      DoctorProcuradorListKendoComponent, 
      DoctorProcuradorComponent , 
      DoctorProcuradorCrudComponent , 
      DoctorProcuradorConjuntoComponent , 
      DoctorProcuradorTableComponent , 

  ],
  exports:[
      DoctorProcuradorListKendoComponent, 
      DoctorProcuradorComponent , 
      DoctorProcuradorCrudComponent , 
      DoctorProcuradorConjuntoComponent , 
      DoctorProcuradorTableComponent , 

  ]
})
export class DoctorProcuradorModule { 


    static forRoot() {
        return {
            ngModule: DoctorProcuradorModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: DoctorProcuradorModule) {
		if (parentModule) {
			throw new Error(
					'DoctorProcuradorModule is already loaded. Import it in the AppModule only');
		}
	}

}
