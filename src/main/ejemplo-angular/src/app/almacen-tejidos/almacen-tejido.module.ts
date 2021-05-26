import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AlmacenTejidoRoutingModule }   from './almacen-tejido-routing.module';
import { AlmacenTejidoListKendoComponent }   from './almacen-tejido-list-kendo/almacen-tejido-list-kendo.component';
import { AlmacenTejidoCrudComponent }   from './almacen-tejido-crud/almacen-tejido-crud.component';
import { AlmacenTejidoConjuntoComponent }   from './almacen-tejido-conjunto/almacen-tejido-conjunto.component';
import { AlmacenTejidoComponent }   from './almacen-tejido/almacen-tejido.component';
import { AlmacenTejidoTableComponent }   from './almacen-tejido-table/almacen-tejido-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleEvaluacionComponent } from './detalle-evaluacion/detalle-evaluacion.component';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , AlmacenTejidoRoutingModule
, UsuarioPerfilModule.forRoot()
//, OficioDonacionModule
, GridModule
, DateInputsModule
, DropDownsModule

  ],
  declarations: [
      AlmacenTejidoListKendoComponent,
      AlmacenTejidoComponent ,
      AlmacenTejidoCrudComponent ,
      AlmacenTejidoConjuntoComponent ,
      AlmacenTejidoTableComponent,
      DetalleComponent,
      DetalleEvaluacionComponent ,

  ],
  exports:[
      AlmacenTejidoListKendoComponent,
      AlmacenTejidoComponent ,
      AlmacenTejidoCrudComponent ,
      AlmacenTejidoConjuntoComponent ,
      AlmacenTejidoTableComponent ,

  ]
})
export class AlmacenTejidoModule {


    static forRoot() {
        return {
            ngModule: AlmacenTejidoModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: AlmacenTejidoModule) {
		if (parentModule) {
			throw new Error(
					'AlmacenTejidoModule is already loaded. Import it in the AppModule only');
		}
	}

}
