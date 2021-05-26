import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { PermisoAtributoRoutingModule }   from './permiso-atributo-routing.module';
import { PermisoAtributoListKendoComponent }   from './permiso-atributo-list-kendo/permiso-atributo-list-kendo.component';
import { PermisoAtributoCrudComponent }   from './permiso-atributo-crud/permiso-atributo-crud.component';
import { PermisoAtributoConjuntoComponent }   from './permiso-atributo-conjunto/permiso-atributo-conjunto.component';
import { PermisoAtributoComponent }   from './permiso-atributo/permiso-atributo.component';
import { PermisoAtributoTableComponent }   from './permiso-atributo-table/permiso-atributo-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , PermisoAtributoRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [ 
      PermisoAtributoListKendoComponent, 
      PermisoAtributoComponent , 
      PermisoAtributoCrudComponent , 
      PermisoAtributoConjuntoComponent , 
      PermisoAtributoTableComponent , 

  ],
  exports:[
      PermisoAtributoListKendoComponent, 
      PermisoAtributoComponent , 
      PermisoAtributoCrudComponent , 
      PermisoAtributoConjuntoComponent , 
      PermisoAtributoTableComponent , 

  ]
})
export class PermisoAtributoModule { 


    static forRoot() {
        return {
            ngModule: PermisoAtributoModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: PermisoAtributoModule) {
		if (parentModule) {
			throw new Error(
					'PermisoAtributoModule is already loaded. Import it in the AppModule only');
		}
	}

}
