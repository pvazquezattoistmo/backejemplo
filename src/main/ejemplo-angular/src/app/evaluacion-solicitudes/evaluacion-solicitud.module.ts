import { ConteoCelularModule } from './../conteo-celulares/conteo-celular.module';

import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { EvaluacionSolicitudRoutingModule }   from './evaluacion-solicitud-routing.module';
import { EvaluacionSolicitudListKendoComponent }   from './evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component';
import { EvaluacionSolicitudCrudComponent }   from './evaluacion-solicitud-crud/evaluacion-solicitud-crud.component';
import { EvaluacionSolicitudConjuntoComponent }   from './evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component';
import { EvaluacionSolicitudComponent }   from './evaluacion-solicitud/evaluacion-solicitud.component';
import { EvaluacionSolicitudTableComponent }   from './evaluacion-solicitud-table/evaluacion-solicitud-table.component';
import { EvaluacionSolicitudTableBandejaComponent }   from './evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { RecepcionSolicitudEvaluacionModule }   from '../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , EvaluacionSolicitudRoutingModule, ConteoCelularModule
, UsuarioPerfilModule.forRoot()
, RecepcionSolicitudEvaluacionModule

  ],
  declarations: [
      EvaluacionSolicitudListKendoComponent,
      EvaluacionSolicitudComponent ,
      EvaluacionSolicitudCrudComponent ,
      EvaluacionSolicitudConjuntoComponent ,
      EvaluacionSolicitudTableComponent ,
      EvaluacionSolicitudTableBandejaComponent,
  ],
  exports:[
      EvaluacionSolicitudListKendoComponent,
      EvaluacionSolicitudComponent ,
      EvaluacionSolicitudCrudComponent ,
      EvaluacionSolicitudConjuntoComponent ,
      EvaluacionSolicitudTableComponent ,
      EvaluacionSolicitudTableBandejaComponent,
  ]
})
export class EvaluacionSolicitudModule {


    static forRoot() {
        return {
            ngModule: EvaluacionSolicitudModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: EvaluacionSolicitudModule) {
		if (parentModule) {
			throw new Error(
					'EvaluacionSolicitudModule is already loaded. Import it in the AppModule only');
		}
	}

}
