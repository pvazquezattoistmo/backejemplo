import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RecepcionSolicitudEvaluacionRoutingModule }   from './recepcion-solicitud-evaluacion-routing.module';
import { RecepcionSolicitudEvaluacionListKendoComponent }   from './recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component';
import { RecepcionSolicitudEvaluacionCrudComponent }   from './recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component';
import { RecepcionSolicitudEvaluacionConjuntoComponent }   from './recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component';
import { RecepcionSolicitudEvaluacionComponent }   from './recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component';
import { RecepcionSolicitudEvaluacionTableComponent }   from './recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component';

//import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { SolicitudEvaluacionCornealModule }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , RecepcionSolicitudEvaluacionRoutingModule
//, UsuarioPerfilModule.forRoot()
//, SolicitudEvaluacionCornealModule
, DateInputsModule

  ],
  declarations: [
      RecepcionSolicitudEvaluacionListKendoComponent,
      RecepcionSolicitudEvaluacionComponent ,
      RecepcionSolicitudEvaluacionCrudComponent ,
      RecepcionSolicitudEvaluacionConjuntoComponent ,
      RecepcionSolicitudEvaluacionTableComponent ,

  ],
  exports:[
      RecepcionSolicitudEvaluacionListKendoComponent,
      RecepcionSolicitudEvaluacionComponent ,
      RecepcionSolicitudEvaluacionCrudComponent ,
      RecepcionSolicitudEvaluacionConjuntoComponent ,
      RecepcionSolicitudEvaluacionTableComponent ,

  ]
})
export class RecepcionSolicitudEvaluacionModule {


    static forRoot() {
        return {
            ngModule: RecepcionSolicitudEvaluacionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: RecepcionSolicitudEvaluacionModule) {
		if (parentModule) {
			throw new Error(
					'RecepcionSolicitudEvaluacionModule is already loaded. Import it in the AppModule only');
		}
	}

}
