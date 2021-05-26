import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DatoProcuracionCornealRoutingModule }   from './dato-procuracion-corneal-routing.module';
import { DatoProcuracionCornealListKendoComponent }   from './dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component';
import { DatoProcuracionCornealCrudComponent }   from './dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component';
import { DatoProcuracionCornealConjuntoComponent }   from './dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component';
import { DatoProcuracionCornealComponent }   from './dato-procuracion-corneal/dato-procuracion-corneal.component';
import { DatoProcuracionCornealTableComponent }   from './dato-procuracion-corneal-table/dato-procuracion-corneal-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { SolicitudEvaluacionCornealModule }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , DatoProcuracionCornealRoutingModule
, UsuarioPerfilModule.forRoot()
//, SolicitudEvaluacionCornealModule

  ],
  declarations: [
      DatoProcuracionCornealListKendoComponent,
      DatoProcuracionCornealComponent ,
      DatoProcuracionCornealCrudComponent ,
      DatoProcuracionCornealConjuntoComponent ,
      DatoProcuracionCornealTableComponent ,

  ],
  exports:[
      DatoProcuracionCornealListKendoComponent,
      DatoProcuracionCornealComponent ,
      DatoProcuracionCornealCrudComponent ,
      DatoProcuracionCornealConjuntoComponent ,
      DatoProcuracionCornealTableComponent ,

  ]
})
export class DatoProcuracionCornealModule {


    static forRoot() {
        return {
            ngModule: DatoProcuracionCornealModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: DatoProcuracionCornealModule) {
		if (parentModule) {
			throw new Error(
					'DatoProcuracionCornealModule is already loaded. Import it in the AppModule only');
		}
	}

}
