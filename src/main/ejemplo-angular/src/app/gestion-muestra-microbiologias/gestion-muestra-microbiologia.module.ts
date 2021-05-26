import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { GestionMuestraMicrobiologiaRoutingModule }   from './gestion-muestra-microbiologia-routing.module';
import { GestionMuestraMicrobiologiaListKendoComponent }   from './gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component';
import { GestionMuestraMicrobiologiaCrudComponent }   from './gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component';
import { GestionMuestraMicrobiologiaConjuntoComponent }   from './gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component';
import { GestionMuestraMicrobiologiaComponent }   from './gestion-muestra-microbiologia/gestion-muestra-microbiologia.component';
import { GestionMuestraMicrobiologiaTableComponent }   from './gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , GestionMuestraMicrobiologiaRoutingModule
, UsuarioPerfilModule.forRoot()
//, OficioDonacionModule

  ],
  declarations: [
      GestionMuestraMicrobiologiaListKendoComponent,
      GestionMuestraMicrobiologiaComponent ,
      GestionMuestraMicrobiologiaCrudComponent ,
      GestionMuestraMicrobiologiaConjuntoComponent ,
      GestionMuestraMicrobiologiaTableComponent ,

  ],
  exports:[
      GestionMuestraMicrobiologiaListKendoComponent,
      GestionMuestraMicrobiologiaComponent ,
      GestionMuestraMicrobiologiaCrudComponent ,
      GestionMuestraMicrobiologiaConjuntoComponent ,
      GestionMuestraMicrobiologiaTableComponent ,

  ]
})
export class GestionMuestraMicrobiologiaModule {


    static forRoot() {
        return {
            ngModule: GestionMuestraMicrobiologiaModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: GestionMuestraMicrobiologiaModule) {
		if (parentModule) {
			throw new Error(
					'GestionMuestraMicrobiologiaModule is already loaded. Import it in the AppModule only');
		}
	}

}
