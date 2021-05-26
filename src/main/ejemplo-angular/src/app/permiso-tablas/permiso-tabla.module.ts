import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { PermisoTablaRoutingModule }   from './permiso-tabla-routing.module';
import { PermisoTablaListKendoComponent }   from './permiso-tabla-list-kendo/permiso-tabla-list-kendo.component';
import { PermisoTablaCrudComponent }   from './permiso-tabla-crud/permiso-tabla-crud.component';
import { PermisoTablaConjuntoComponent }   from './permiso-tabla-conjunto/permiso-tabla-conjunto.component';
import { PermisoTablaComponent }   from './permiso-tabla/permiso-tabla.component';
import { PermisoTablaTableComponent }   from './permiso-tabla-table/permiso-tabla-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , PermisoTablaRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [ 
      PermisoTablaListKendoComponent, 
      PermisoTablaComponent , 
      PermisoTablaCrudComponent , 
      PermisoTablaConjuntoComponent , 
      PermisoTablaTableComponent , 

  ],
  exports:[
      PermisoTablaListKendoComponent, 
      PermisoTablaComponent , 
      PermisoTablaCrudComponent , 
      PermisoTablaConjuntoComponent , 
      PermisoTablaTableComponent , 

  ]
})
export class PermisoTablaModule { 


    static forRoot() {
        return {
            ngModule: PermisoTablaModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: PermisoTablaModule) {
		if (parentModule) {
			throw new Error(
					'PermisoTablaModule is already loaded. Import it in the AppModule only');
		}
	}

}
