import { DetalleTejidoCornealComponent } from './../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component';
import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SolicitudTejidoCornealRecepcionRoutingModule }   from './solicitud-tejido-corneal-recepcion-routing.module';
import { SolicitudTejidoCornealRecepcionListKendoComponent }   from './solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component';
import { SolicitudTejidoCornealRecepcionCrudComponent }   from './solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component';
import { SolicitudTejidoCornealRecepcionConjuntoComponent }   from './solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component';
import { SolicitudTejidoCornealRecepcionComponent }   from './solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component';
import { SolicitudTejidoCornealRecepcionTableBandejaComponent }   from './solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component';
import { SolicitudTejidoCornealRecepcionTableComponent }   from './solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { SolicitudEvaluacionCornealModule } from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module';
import { SolicitudTejidoCornealModule } from '../solicitud-tejido-corneales/solicitud-tejido-corneal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, PersonalizadosModule, SolicitudTejidoCornealRecepcionRoutingModule, SolicitudEvaluacionCornealModule, SolicitudTejidoCornealModule,
    UsuarioPerfilModule.forRoot()

  ],
  declarations: [
      SolicitudTejidoCornealRecepcionListKendoComponent,
      SolicitudTejidoCornealRecepcionComponent ,
      SolicitudTejidoCornealRecepcionCrudComponent ,
      SolicitudTejidoCornealRecepcionConjuntoComponent ,
      SolicitudTejidoCornealRecepcionTableBandejaComponent ,
      SolicitudTejidoCornealRecepcionTableComponent ,

  ],
  exports:[
      SolicitudTejidoCornealRecepcionListKendoComponent,
      SolicitudTejidoCornealRecepcionComponent ,
      SolicitudTejidoCornealRecepcionCrudComponent ,
      SolicitudTejidoCornealRecepcionConjuntoComponent ,
      SolicitudTejidoCornealRecepcionTableBandejaComponent ,
      SolicitudTejidoCornealRecepcionTableComponent ,

  ]
})
export class SolicitudTejidoCornealRecepcionModule {


    static forRoot() {
        return {
            ngModule: SolicitudTejidoCornealRecepcionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: SolicitudTejidoCornealRecepcionModule) {
		if (parentModule) {
			throw new Error(
					'SolicitudTejidoCornealRecepcionModule is already loaded. Import it in the AppModule only');
		}
	}

}
