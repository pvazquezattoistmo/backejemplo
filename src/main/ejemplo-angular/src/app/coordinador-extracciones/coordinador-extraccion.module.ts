import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { CoordinadorExtraccionRoutingModule }   from './coordinador-extraccion-routing.module';
import { CoordinadorExtraccionListKendoComponent }   from './coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component';
import { CoordinadorExtraccionCrudComponent }   from './coordinador-extraccion-crud/coordinador-extraccion-crud.component';
import { CoordinadorExtraccionConjuntoComponent }   from './coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component';
import { CoordinadorExtraccionComponent }   from './coordinador-extraccion/coordinador-extraccion.component';
import { CoordinadorExtraccionTableComponent }   from './coordinador-extraccion-table/coordinador-extraccion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
//import { RegistroExtraccionModule }   from '../registro-extracciones/registro-extraccion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , CoordinadorExtraccionRoutingModule
, UsuarioPerfilModule.forRoot()
//, RegistroExtraccionModule
, GridModule

  ],
  declarations: [
      CoordinadorExtraccionListKendoComponent,
      CoordinadorExtraccionComponent ,
      CoordinadorExtraccionCrudComponent ,
      CoordinadorExtraccionConjuntoComponent ,
      CoordinadorExtraccionTableComponent ,

  ],
  exports:[
      CoordinadorExtraccionListKendoComponent,
      CoordinadorExtraccionComponent ,
      CoordinadorExtraccionCrudComponent ,
      CoordinadorExtraccionConjuntoComponent ,
      CoordinadorExtraccionTableComponent ,

  ]
})
export class CoordinadorExtraccionModule {


    static forRoot() {
        return {
            ngModule: CoordinadorExtraccionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: CoordinadorExtraccionModule) {
		if (parentModule) {
			throw new Error(
					'CoordinadorExtraccionModule is already loaded. Import it in the AppModule only');
		}
	}

}
