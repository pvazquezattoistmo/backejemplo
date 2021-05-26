import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { CaracteristicaDonacionRoutingModule }   from './caracteristica-donacion-routing.module';
import { CaracteristicaDonacionListKendoComponent }   from './caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component';
import { CaracteristicaDonacionCrudComponent }   from './caracteristica-donacion-crud/caracteristica-donacion-crud.component';
import { CaracteristicaDonacionConjuntoComponent }   from './caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component';
import { CaracteristicaDonacionComponent }   from './caracteristica-donacion/caracteristica-donacion.component';
import { CaracteristicaDonacionTableComponent }   from './caracteristica-donacion-table/caracteristica-donacion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , CaracteristicaDonacionRoutingModule
, UsuarioPerfilModule.forRoot()
//, OficioDonacionModule

  ],
  declarations: [
      CaracteristicaDonacionListKendoComponent,
      CaracteristicaDonacionComponent ,
      CaracteristicaDonacionCrudComponent ,
      CaracteristicaDonacionConjuntoComponent ,
      CaracteristicaDonacionTableComponent ,

  ],
  exports:[
      CaracteristicaDonacionListKendoComponent,
      CaracteristicaDonacionComponent ,
      CaracteristicaDonacionCrudComponent ,
      CaracteristicaDonacionConjuntoComponent ,
      CaracteristicaDonacionTableComponent ,

  ]
})
export class CaracteristicaDonacionModule {


    static forRoot() {
        return {
            ngModule: CaracteristicaDonacionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: CaracteristicaDonacionModule) {
		if (parentModule) {
			throw new Error(
					'CaracteristicaDonacionModule is already loaded. Import it in the AppModule only');
		}
	}

}
