import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { LamparaHendiduraRoutingModule }   from './lampara-hendidura-routing.module';
import { LamparaHendiduraListKendoComponent }   from './lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component';
import { LamparaHendiduraCrudComponent }   from './lampara-hendidura-crud/lampara-hendidura-crud.component';
import { LamparaHendiduraConjuntoComponent }   from './lampara-hendidura-conjunto/lampara-hendidura-conjunto.component';
import { LamparaHendiduraComponent }   from './lampara-hendidura/lampara-hendidura.component';
import { LamparaHendiduraTableComponent }   from './lampara-hendidura-table/lampara-hendidura-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EvaluacionSolicitudModule }   from '../evaluacion-solicitudes/evaluacion-solicitud.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';
import { EstudioLaboratorioModule } from '../estudio-laboratorios/estudio-laboratorio.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , LamparaHendiduraRoutingModule
, UsuarioPerfilModule.forRoot()
// , EvaluacionSolicitudsModule
, EstudioLaboratorioModule
  ],
  declarations: [
      LamparaHendiduraListKendoComponent,
      LamparaHendiduraComponent ,
      LamparaHendiduraCrudComponent ,
      LamparaHendiduraConjuntoComponent ,
      LamparaHendiduraTableComponent ,

  ],
  exports:[
      LamparaHendiduraListKendoComponent,
      LamparaHendiduraComponent ,
      LamparaHendiduraCrudComponent ,
      LamparaHendiduraConjuntoComponent ,
      LamparaHendiduraTableComponent ,

  ]
})
export class LamparaHendiduraModule {


    static forRoot() {
        return {
            ngModule: LamparaHendiduraModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: LamparaHendiduraModule) {
		if (parentModule) {
			throw new Error(
					'LamparaHendiduraModule is already loaded. Import it in the AppModule only');
		}
	}

}
