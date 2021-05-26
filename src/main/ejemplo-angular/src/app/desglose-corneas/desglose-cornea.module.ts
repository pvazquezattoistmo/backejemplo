import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DesgloseCorneaRoutingModule }   from './desglose-cornea-routing.module';
import { DesgloseCorneaListKendoComponent }   from './desglose-cornea-list-kendo/desglose-cornea-list-kendo.component';
import { DesgloseCorneaCrudComponent }   from './desglose-cornea-crud/desglose-cornea-crud.component';
import { DesgloseCorneaConjuntoComponent }   from './desglose-cornea-conjunto/desglose-cornea-conjunto.component';
import { DesgloseCorneaComponent }   from './desglose-cornea/desglose-cornea.component';
import { DesgloseCorneaTableComponent }   from './desglose-cornea-table/desglose-cornea-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EvaluacionSolicitudModule }   from '../evaluacion-solicitudes/evaluacion-solicitud.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DesgloseCorneaRoutingModule
, UsuarioPerfilModule.forRoot()
, EvaluacionSolicitudModule

  ],
  declarations: [ 
      DesgloseCorneaListKendoComponent, 
      DesgloseCorneaComponent , 
      DesgloseCorneaCrudComponent , 
      DesgloseCorneaConjuntoComponent , 
      DesgloseCorneaTableComponent , 

  ],
  exports:[
      DesgloseCorneaListKendoComponent, 
      DesgloseCorneaComponent , 
      DesgloseCorneaCrudComponent , 
      DesgloseCorneaConjuntoComponent , 
      DesgloseCorneaTableComponent , 

  ]
})
export class DesgloseCorneaModule { 


    static forRoot() {
        return {
            ngModule: DesgloseCorneaModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: DesgloseCorneaModule) {
		if (parentModule) {
			throw new Error(
					'DesgloseCorneaModule is already loaded. Import it in the AppModule only');
		}
	}

}
