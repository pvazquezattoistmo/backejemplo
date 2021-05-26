import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DatoCorneaExtraccionRoutingModule }   from './dato-cornea-extraccion-routing.module';
import { DatoCorneaExtraccionListKendoComponent }   from './dato-cornea-extraccion-list-kendo/dato-cornea-extraccion-list-kendo.component';
import { DatoCorneaExtraccionCrudComponent }   from './dato-cornea-extraccion-crud/dato-cornea-extraccion-crud.component';
import { DatoCorneaExtraccionConjuntoComponent }   from './dato-cornea-extraccion-conjunto/dato-cornea-extraccion-conjunto.component';
import { DatoCorneaExtraccionComponent }   from './dato-cornea-extraccion/dato-cornea-extraccion.component';
import { DatoCorneaExtraccionTableComponent }   from './dato-cornea-extraccion-table/dato-cornea-extraccion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { RegistroExtraccionModule }   from '../registro-extracciones/registro-extraccion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DatoCorneaExtraccionRoutingModule
, UsuarioPerfilModule.forRoot()
//, RegistroExtraccionModule

  ],
  declarations: [
      DatoCorneaExtraccionListKendoComponent,
      DatoCorneaExtraccionComponent ,
      DatoCorneaExtraccionCrudComponent ,
      DatoCorneaExtraccionConjuntoComponent ,
      DatoCorneaExtraccionTableComponent ,

  ],
  exports:[
      DatoCorneaExtraccionListKendoComponent,
      DatoCorneaExtraccionComponent ,
      DatoCorneaExtraccionCrudComponent ,
      DatoCorneaExtraccionConjuntoComponent ,
      DatoCorneaExtraccionTableComponent ,

  ]
})
export class DatoCorneaExtraccionModule {


    static forRoot() {
        return {
            ngModule: DatoCorneaExtraccionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: DatoCorneaExtraccionModule) {
		if (parentModule) {
			throw new Error(
					'DatoCorneaExtraccionModule is already loaded. Import it in the AppModule only');
		}
	}

}
