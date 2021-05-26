import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { EquipoExtraccionRoutingModule }   from './equipo-extraccion-routing.module';
import { EquipoExtraccionListKendoComponent }   from './equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component';
import { EquipoExtraccionCrudComponent }   from './equipo-extraccion-crud/equipo-extraccion-crud.component';
import { EquipoExtraccionConjuntoComponent }   from './equipo-extraccion-conjunto/equipo-extraccion-conjunto.component';
import { EquipoExtraccionComponent }   from './equipo-extraccion/equipo-extraccion.component';
import { EquipoExtraccionTableComponent }   from './equipo-extraccion-table/equipo-extraccion-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { RegistroExtraccionModule }   from '../registro-extracciones/registro-extraccion.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , EquipoExtraccionRoutingModule
, UsuarioPerfilModule.forRoot()
//, RegistroExtraccionModule
,GridModule

  ],
  declarations: [
      EquipoExtraccionListKendoComponent,
      EquipoExtraccionComponent ,
      EquipoExtraccionCrudComponent ,
      EquipoExtraccionConjuntoComponent ,
      EquipoExtraccionTableComponent ,

  ],
  exports:[
      EquipoExtraccionListKendoComponent,
      EquipoExtraccionComponent ,
      EquipoExtraccionCrudComponent ,
      EquipoExtraccionConjuntoComponent ,
      EquipoExtraccionTableComponent ,

  ]
})
export class EquipoExtraccionModule {


    static forRoot() {
        return {
            ngModule: EquipoExtraccionModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: EquipoExtraccionModule) {
		if (parentModule) {
			throw new Error(
					'EquipoExtraccionModule is already loaded. Import it in the AppModule only');
		}
	}

}
