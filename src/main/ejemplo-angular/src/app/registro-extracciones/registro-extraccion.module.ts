import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RegistroExtraccionRoutingModule }   from './registro-extraccion-routing.module';
import { RegistroExtraccionListKendoComponent }   from './registro-extraccion-list-kendo/registro-extraccion-list-kendo.component';
import { RegistroExtraccionCrudComponent }   from './registro-extraccion-crud/registro-extraccion-crud.component';
import { RegistroExtraccionConjuntoComponent }   from './registro-extraccion-conjunto/registro-extraccion-conjunto.component';
import { RegistroExtraccionComponent }   from './registro-extraccion/registro-extraccion.component';
import { RegistroExtraccionTableComponent }   from './registro-extraccion-table/registro-extraccion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { SolicitudEvaluacionCornealModule }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { EquipoExtraccionModule } from '../equipo-extracciones/equipo-extraccion.module';
import { CoordinadorExtraccionModule } from '../coordinador-extracciones/coordinador-extraccion.module';
import { DatoCorneaExtraccionModule } from "../dato-cornea-extracciones/dato-cornea-extraccion.module";

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , RegistroExtraccionRoutingModule
, UsuarioPerfilModule.forRoot()
, SolicitudEvaluacionCornealModule
, EquipoExtraccionModule.forRoot()
, CoordinadorExtraccionModule.forRoot()
, DatoCorneaExtraccionModule.forRoot()
  ],
  declarations: [
      RegistroExtraccionListKendoComponent,
      RegistroExtraccionComponent ,
      RegistroExtraccionCrudComponent ,
      RegistroExtraccionConjuntoComponent ,
      RegistroExtraccionTableComponent ,

  ],
  exports:[
      RegistroExtraccionListKendoComponent,
      RegistroExtraccionComponent ,
      RegistroExtraccionCrudComponent ,
      RegistroExtraccionConjuntoComponent ,
      RegistroExtraccionTableComponent ,

  ]
})
export class RegistroExtraccionModule {


    static forRoot() {
        return {
            ngModule: RegistroExtraccionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: RegistroExtraccionModule) {
		if (parentModule) {
			throw new Error(
					'RegistroExtraccionModule is already loaded. Import it in the AppModule only');
		}
	}

}
