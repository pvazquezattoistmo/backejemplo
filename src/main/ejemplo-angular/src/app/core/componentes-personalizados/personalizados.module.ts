import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
// inicio de la importacion del modulo de rutas y componentes
import { ComponenteIdentificadorComponent } from './componente-identificador/componente-identificador.component';
import { ComponenteCadenaComponent } from './componente-cadena/componente-cadena.component';
import { ComponenteCadenaLargaComponent } from './componente-cadena-larga/componente-cadena-larga.component';
import { ComponenteFechaComponent } from './componente-fecha/componente-fecha.component';
import { ComponenteHoraComponent } from './componente-hora/componente-hora.component';
import { ComponenteFechaHoraComponent } from './componente-fecha-hora/componente-fecha-hora.component';
import { ComponenteCheckComponent } from './componente-check/componente-check.component';
import { ComponenteRadioComponent } from './componente-radio/componente-radio.component';
import { ComponenteCadenaComboComponent } from './componente-cadena-combo/componente-cadena-combo.component';
import { ComponenteObjetoComponent } from './componente-objeto/componente-objeto.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// fin de la importacion del modulo de rutas y componentes
// inicio de la importacion de los modulos relacionados

@NgModule({
  imports: [
         CommonModule, FormsModule,
         DateInputsModule,
         DropDownsModule,
// inicio importar modulos relacionados


// fin importar modulos relacionados
  ],
  declarations: [
// inicio declaracion de componentes
        ComponenteIdentificadorComponent,
        ComponenteCadenaComponent,
        ComponenteCadenaLargaComponent,
        ComponenteFechaComponent,
        ComponenteHoraComponent,
        ComponenteFechaHoraComponent,
        ComponenteCheckComponent,
        ComponenteRadioComponent,
        ComponenteCadenaComboComponent,
        ComponenteObjetoComponent
// fin declaracion de componentes
  ],
  exports:[
// inicio exportacion de componentes
        ComponenteIdentificadorComponent,
        ComponenteCadenaComponent,
        ComponenteCadenaLargaComponent,
        ComponenteFechaComponent,
        ComponenteHoraComponent,
        ComponenteFechaHoraComponent,
        ComponenteCheckComponent,
        ComponenteRadioComponent,
        ComponenteCadenaComboComponent,
        ComponenteObjetoComponent

// fin exportacion de componentes
  ]
})
export class PersonalizadosModule {


    static forRoot() {
        return {
            ngModule: PersonalizadosModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: PersonalizadosModule) {
		if (parentModule) {
			throw new Error(
					'ProductoModule is already loaded. Import it in the AppModule only');
		}
	}

}
