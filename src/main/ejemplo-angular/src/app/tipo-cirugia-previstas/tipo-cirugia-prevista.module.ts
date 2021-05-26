import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { TipoCirugiaPrevistaRoutingModule }   from './tipo-cirugia-prevista-routing.module';
import { TipoCirugiaPrevistaListKendoComponent }   from './tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component';
import { TipoCirugiaPrevistaCrudComponent }   from './tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component';
import { TipoCirugiaPrevistaConjuntoComponent }   from './tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component';
import { TipoCirugiaPrevistaComponent }   from './tipo-cirugia-prevista/tipo-cirugia-prevista.component';
import { TipoCirugiaPrevistaTableComponent }   from './tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { SolicitudTejidoCornealModule }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , TipoCirugiaPrevistaRoutingModule
, UsuarioPerfilModule.forRoot()
//, SolicitudTejidoCornealModule

  ],
  declarations: [ 
      TipoCirugiaPrevistaListKendoComponent, 
      TipoCirugiaPrevistaComponent , 
      TipoCirugiaPrevistaCrudComponent , 
      TipoCirugiaPrevistaConjuntoComponent , 
      TipoCirugiaPrevistaTableComponent , 

  ],
  exports:[
      TipoCirugiaPrevistaListKendoComponent, 
      TipoCirugiaPrevistaComponent , 
      TipoCirugiaPrevistaCrudComponent , 
      TipoCirugiaPrevistaConjuntoComponent , 
      TipoCirugiaPrevistaTableComponent , 

  ]
})
export class TipoCirugiaPrevistaModule { 


    static forRoot() {
        return {
            ngModule: TipoCirugiaPrevistaModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: TipoCirugiaPrevistaModule) {
		if (parentModule) {
			throw new Error(
					'TipoCirugiaPrevistaModule is already loaded. Import it in the AppModule only');
		}
	}

}
