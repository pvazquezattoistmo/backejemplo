import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SolicitudEvaluacionCornealRoutingModule }   from './solicitud-evaluacion-corneal-routing.module';
import { SolicitudEvaluacionCornealListKendoComponent }   from './solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component';
import { SolicitudEvaluacionCornealCrudComponent }   from './solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component';
import { SolicitudEvaluacionCornealConjuntoComponent }   from './solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component';
import { SolicitudEvaluacionCornealComponent }   from './solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component';
import { SolicitudEvaluacionCornealTableComponent }   from './solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { CausaMuerteModule }   from '../causa-muertes/causa-muerte.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { DatoProcuracionCornealModule } from '../dato-procuracion-corneales/dato-procuracion-corneal.module';

import { DetalleDonanteExtraccionComponent } from './detalle-donante-extraccion/detalle-donante-extraccion.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , SolicitudEvaluacionCornealRoutingModule
, UsuarioPerfilModule.forRoot()
, CausaMuerteModule
, DatoProcuracionCornealModule
, DateInputsModule
, InputsModule
  ],
  declarations: [
      SolicitudEvaluacionCornealListKendoComponent,
      SolicitudEvaluacionCornealComponent ,
      SolicitudEvaluacionCornealCrudComponent ,
      SolicitudEvaluacionCornealConjuntoComponent ,
      SolicitudEvaluacionCornealTableComponent,
      DetalleDonanteExtraccionComponent ,

  ],
  exports:[
      SolicitudEvaluacionCornealListKendoComponent,
      SolicitudEvaluacionCornealComponent ,
      SolicitudEvaluacionCornealCrudComponent ,
      SolicitudEvaluacionCornealConjuntoComponent ,
      SolicitudEvaluacionCornealTableComponent ,
      DetalleDonanteExtraccionComponent ,
  ]
})
export class SolicitudEvaluacionCornealModule {


    static forRoot() {
        return {
            ngModule: SolicitudEvaluacionCornealModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: SolicitudEvaluacionCornealModule) {
		if (parentModule) {
			throw new Error(
					'SolicitudEvaluacionCornealModule is already loaded. Import it in the AppModule only');
		}
	}

}
