import { InputsModule } from '@progress/kendo-angular-inputs';
import { LamparaHendiduraModule } from './../lampara-hendiduras/lampara-hendidura.module';
import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ConteoCelularRoutingModule }   from './conteo-celular-routing.module';
import { ConteoCelularListKendoComponent }   from './conteo-celular-list-kendo/conteo-celular-list-kendo.component';
import { ConteoCelularCrudComponent }   from './conteo-celular-crud/conteo-celular-crud.component';
import { ConteoCelularConjuntoComponent }   from './conteo-celular-conjunto/conteo-celular-conjunto.component';
import { ConteoCelularComponent }   from './conteo-celular/conteo-celular.component';
import { ConteoCelularTableComponent }   from './conteo-celular-table/conteo-celular-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EvaluacionSolicitudModule }   from '../evaluacion-solicitudes/evaluacion-solicitud.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , ConteoCelularRoutingModule
, UsuarioPerfilModule.forRoot()
// , EvaluacionSolicitudModule
, LamparaHendiduraModule
, GridModule
, DialogsModule
, InputsModule
  ],
  declarations: [
      ConteoCelularListKendoComponent,
      ConteoCelularComponent ,
      ConteoCelularCrudComponent ,
      ConteoCelularConjuntoComponent ,
      ConteoCelularTableComponent ,

  ],
  exports:[
      ConteoCelularListKendoComponent,
      ConteoCelularComponent ,
      ConteoCelularCrudComponent ,
      ConteoCelularConjuntoComponent ,
      ConteoCelularTableComponent ,

  ]
})
export class ConteoCelularModule {


    static forRoot() {
        return {
            ngModule: ConteoCelularModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: ConteoCelularModule) {
		if (parentModule) {
			throw new Error(
					'ConteoCelularModule is already loaded. Import it in the AppModule only');
		}
	}

}
