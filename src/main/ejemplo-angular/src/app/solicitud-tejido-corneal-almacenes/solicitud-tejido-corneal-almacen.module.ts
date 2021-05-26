import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SolicitudTejidoCornealAlmacenRoutingModule }   from './solicitud-tejido-corneal-almacen-routing.module';
import { SolicitudTejidoCornealAlmacenListKendoComponent }   from './solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component';
import { SolicitudTejidoCornealAlmacenCrudComponent }   from './solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component';
import { SolicitudTejidoCornealAlmacenConjuntoComponent }   from './solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component';
import { SolicitudTejidoCornealAlmacenComponent }   from './solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component';
import { SolicitudTejidoCornealAlmacenTableComponent }   from './solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { SolicitudTejidoCornealRecepcionModule }   from '../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , SolicitudTejidoCornealAlmacenRoutingModule
, UsuarioPerfilModule.forRoot()
, SolicitudTejidoCornealRecepcionModule

  ],
  declarations: [ 
      SolicitudTejidoCornealAlmacenListKendoComponent, 
      SolicitudTejidoCornealAlmacenComponent , 
      SolicitudTejidoCornealAlmacenCrudComponent , 
      SolicitudTejidoCornealAlmacenConjuntoComponent , 
      SolicitudTejidoCornealAlmacenTableComponent , 

  ],
  exports:[
      SolicitudTejidoCornealAlmacenListKendoComponent, 
      SolicitudTejidoCornealAlmacenComponent , 
      SolicitudTejidoCornealAlmacenCrudComponent , 
      SolicitudTejidoCornealAlmacenConjuntoComponent , 
      SolicitudTejidoCornealAlmacenTableComponent , 

  ]
})
export class SolicitudTejidoCornealAlmacenModule { 


    static forRoot() {
        return {
            ngModule: SolicitudTejidoCornealAlmacenModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: SolicitudTejidoCornealAlmacenModule) {
		if (parentModule) {
			throw new Error(
					'SolicitudTejidoCornealAlmacenModule is already loaded. Import it in the AppModule only');
		}
	}

}
