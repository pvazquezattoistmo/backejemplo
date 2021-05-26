import { RecepcionSolicitudEvaluacionModule } from './../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module';
import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { EstudioLaboratorioRoutingModule }   from './estudio-laboratorio-routing.module';
import { EstudioLaboratorioListKendoComponent }   from './estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component';
import { EstudioLaboratorioCrudComponent }   from './estudio-laboratorio-crud/estudio-laboratorio-crud.component';
import { EstudioLaboratorioConjuntoComponent }   from './estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component';
import { EstudioLaboratorioComponent }   from './estudio-laboratorio/estudio-laboratorio.component';
import { EstudioLaboratorioTableComponent }   from './estudio-laboratorio-table/estudio-laboratorio-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { EvaluacionSolicitudModule }   from '../evaluacion-solicitudes/evaluacion-solicitud.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , EstudioLaboratorioRoutingModule
, UsuarioPerfilModule.forRoot()
// , EvaluacionSolicitudModule
, RecepcionSolicitudEvaluacionModule
  ],
  declarations: [
      EstudioLaboratorioListKendoComponent,
      EstudioLaboratorioComponent ,
      EstudioLaboratorioCrudComponent ,
      EstudioLaboratorioConjuntoComponent ,
      EstudioLaboratorioTableComponent ,

  ],
  exports:[
      EstudioLaboratorioListKendoComponent,
      EstudioLaboratorioComponent ,
      EstudioLaboratorioCrudComponent ,
      EstudioLaboratorioConjuntoComponent ,
      EstudioLaboratorioTableComponent ,

  ]
})
export class EstudioLaboratorioModule {


    static forRoot() {
        return {
            ngModule: EstudioLaboratorioModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: EstudioLaboratorioModule) {
		if (parentModule) {
			throw new Error(
					'EstudioLaboratorioModule is already loaded. Import it in the AppModule only');
		}
	}

}
