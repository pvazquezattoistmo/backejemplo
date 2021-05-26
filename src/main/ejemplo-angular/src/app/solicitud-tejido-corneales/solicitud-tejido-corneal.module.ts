import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SolicitudTejidoCornealRoutingModule }   from './solicitud-tejido-corneal-routing.module';
import { SolicitudTejidoCornealListKendoComponent }   from './solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component';
import { SolicitudTejidoCornealCrudComponent }   from './solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component';
import { SolicitudTejidoCornealConjuntoComponent }   from './solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component';
import { SolicitudTejidoCornealComponent }   from './solicitud-tejido-corneal/solicitud-tejido-corneal.component';
import { SolicitudTejidoCornealTableBandejaComponent }   from './solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component';
import { SolicitudTejidoCornealTableComponent }   from './solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component';
import { DetalleTejidoCornealComponent} from '../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { DoctorSolicitanteModule }   from '../doctor-solicitantes/doctor-solicitante.module';
import { EntidadFederativaUsuarioUsuarioBtcHospitalModule }   from '../shared/entidad-federativa-usuario-usuario-btc-hospital.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { TipoCirugiaPrevistaModule } from '../tipo-cirugia-previstas/tipo-cirugia-prevista.module';

import { InputsModule } from '@progress/kendo-angular-inputs';
@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , SolicitudTejidoCornealRoutingModule
, UsuarioPerfilModule.forRoot()
, DoctorSolicitanteModule
, EntidadFederativaUsuarioUsuarioBtcHospitalModule.forRoot()
,TipoCirugiaPrevistaModule
, DateInputsModule,
InputsModule
  ],
  declarations: [
      SolicitudTejidoCornealListKendoComponent,
      SolicitudTejidoCornealComponent ,
      SolicitudTejidoCornealCrudComponent ,
      SolicitudTejidoCornealConjuntoComponent ,
      SolicitudTejidoCornealTableBandejaComponent ,
      SolicitudTejidoCornealTableComponent ,
      DetalleTejidoCornealComponent,

  ],
  exports:[
      SolicitudTejidoCornealListKendoComponent,
      SolicitudTejidoCornealComponent ,
      SolicitudTejidoCornealCrudComponent ,
      SolicitudTejidoCornealConjuntoComponent ,
      SolicitudTejidoCornealTableBandejaComponent ,
      SolicitudTejidoCornealTableComponent ,
      DetalleTejidoCornealComponent,
  ]
})
export class SolicitudTejidoCornealModule {


    static forRoot() {
        return {
            ngModule: SolicitudTejidoCornealModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: SolicitudTejidoCornealModule) {
		if (parentModule) {
			throw new Error(
					'SolicitudTejidoCornealModule is already loaded. Import it in the AppModule only');
		}
	}

}
