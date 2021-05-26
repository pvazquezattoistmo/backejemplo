import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { CausaMuerteRoutingModule }   from './causa-muerte-routing.module';
import { CausaMuerteListKendoComponent }   from './causa-muerte-list-kendo/causa-muerte-list-kendo.component';
import { CausaMuerteCrudComponent }   from './causa-muerte-crud/causa-muerte-crud.component';
import { CausaMuerteConjuntoComponent }   from './causa-muerte-conjunto/causa-muerte-conjunto.component';
import { CausaMuerteComponent }   from './causa-muerte/causa-muerte.component';
import { CausaMuerteTableComponent }   from './causa-muerte-table/causa-muerte-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , CausaMuerteRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [ 
      CausaMuerteListKendoComponent, 
      CausaMuerteComponent , 
      CausaMuerteCrudComponent , 
      CausaMuerteConjuntoComponent , 
      CausaMuerteTableComponent , 

  ],
  exports:[
      CausaMuerteListKendoComponent, 
      CausaMuerteComponent , 
      CausaMuerteCrudComponent , 
      CausaMuerteConjuntoComponent , 
      CausaMuerteTableComponent , 

  ]
})
export class CausaMuerteModule { 


    static forRoot() {
        return {
            ngModule: CausaMuerteModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: CausaMuerteModule) {
		if (parentModule) {
			throw new Error(
					'CausaMuerteModule is already loaded. Import it in the AppModule only');
		}
	}

}
