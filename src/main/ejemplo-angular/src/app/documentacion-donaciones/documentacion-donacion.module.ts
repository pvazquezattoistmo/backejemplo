import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DocumentacionDonacionRoutingModule }   from './documentacion-donacion-routing.module';
import { DocumentacionDonacionListKendoComponent }   from './documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component';
import { DocumentacionDonacionCrudComponent }   from './documentacion-donacion-crud/documentacion-donacion-crud.component';
import { DocumentacionDonacionConjuntoComponent }   from './documentacion-donacion-conjunto/documentacion-donacion-conjunto.component';
import { DocumentacionDonacionComponent }   from './documentacion-donacion/documentacion-donacion.component';
import { DocumentacionDonacionTableComponent }   from './documentacion-donacion-table/documentacion-donacion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DocumentacionDonacionRoutingModule
, UsuarioPerfilModule.forRoot()
//, OficioDonacionModule

  ],
  declarations: [
      DocumentacionDonacionListKendoComponent,
      DocumentacionDonacionComponent ,
      DocumentacionDonacionCrudComponent ,
      DocumentacionDonacionConjuntoComponent ,
      DocumentacionDonacionTableComponent ,

  ],
  exports:[
      DocumentacionDonacionListKendoComponent,
      DocumentacionDonacionComponent ,
      DocumentacionDonacionCrudComponent ,
      DocumentacionDonacionConjuntoComponent ,
      DocumentacionDonacionTableComponent ,

  ]
})
export class DocumentacionDonacionModule {


    static forRoot() {
        return {
            ngModule: DocumentacionDonacionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: DocumentacionDonacionModule) {
		if (parentModule) {
			throw new Error(
					'DocumentacionDonacionModule is already loaded. Import it in the AppModule only');
		}
	}

}
