import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { PermisoConjuntoRoutingModule }   from './permiso-conjunto-routing.module';
import { PermisoConjuntoListKendoComponent }   from './permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component';
import { PermisoConjuntoCrudComponent }   from './permiso-conjunto-crud/permiso-conjunto-crud.component';
import { PermisoConjuntoConjuntoComponent }   from './permiso-conjunto-conjunto/permiso-conjunto-conjunto.component';
import { PermisoConjuntoComponent }   from './permiso-conjunto/permiso-conjunto.component';
import { PermisoConjuntoTableComponent }   from './permiso-conjunto-table/permiso-conjunto-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , PermisoConjuntoRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [ 
      PermisoConjuntoListKendoComponent, 
      PermisoConjuntoComponent , 
      PermisoConjuntoCrudComponent , 
      PermisoConjuntoConjuntoComponent , 
      PermisoConjuntoTableComponent , 

  ],
  exports:[
      PermisoConjuntoListKendoComponent, 
      PermisoConjuntoComponent , 
      PermisoConjuntoCrudComponent , 
      PermisoConjuntoConjuntoComponent , 
      PermisoConjuntoTableComponent , 

  ]
})
export class PermisoConjuntoModule { 


    static forRoot() {
        return {
            ngModule: PermisoConjuntoModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: PermisoConjuntoModule) {
		if (parentModule) {
			throw new Error(
					'PermisoConjuntoModule is already loaded. Import it in the AppModule only');
		}
	}

}
