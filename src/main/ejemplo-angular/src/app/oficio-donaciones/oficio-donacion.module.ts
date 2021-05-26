import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { OficioDonacionRoutingModule }   from './oficio-donacion-routing.module';
import { OficioDonacionListKendoComponent }   from './oficio-donacion-list-kendo/oficio-donacion-list-kendo.component';
import { OficioDonacionCrudComponent }   from './oficio-donacion-crud/oficio-donacion-crud.component';
import { OficioDonacionConjuntoComponent }   from './oficio-donacion-conjunto/oficio-donacion-conjunto.component';
import { OficioDonacionComponent }   from './oficio-donacion/oficio-donacion.component';
import { OficioDonacionTableComponent }   from './oficio-donacion-table/oficio-donacion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { RecepcionSolicitudEvaluacionModule }   from '../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { GestionMuestraMicrobiologiaModule } from '../gestion-muestra-microbiologias/gestion-muestra-microbiologia.module';
import { AlmacenTejidoModule } from '../almacen-tejidos/almacen-tejido.module';
import { DocumentacionDonacionModule } from '../documentacion-donaciones/documentacion-donacion.module';
import { CaracteristicaDonacionModule } from '../caracteristica-donaciones/caracteristica-donacion.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , OficioDonacionRoutingModule
, UsuarioPerfilModule.forRoot()
, RecepcionSolicitudEvaluacionModule
, GestionMuestraMicrobiologiaModule.forRoot()
, AlmacenTejidoModule.forRoot()
, DocumentacionDonacionModule.forRoot()
, CaracteristicaDonacionModule.forRoot()
  ],
  declarations: [
      OficioDonacionListKendoComponent,
      OficioDonacionComponent ,
      OficioDonacionCrudComponent ,
      OficioDonacionConjuntoComponent ,
      OficioDonacionTableComponent ,

  ],
  exports:[
      OficioDonacionListKendoComponent,
      OficioDonacionComponent ,
      OficioDonacionCrudComponent ,
      OficioDonacionConjuntoComponent ,
      OficioDonacionTableComponent ,

  ]
})
export class OficioDonacionModule {


    static forRoot() {
        return {
            ngModule: OficioDonacionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: OficioDonacionModule) {
		if (parentModule) {
			throw new Error(
					'OficioDonacionModule is already loaded. Import it in the AppModule only');
		}
	}

}
