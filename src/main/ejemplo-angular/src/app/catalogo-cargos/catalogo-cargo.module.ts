import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { CatalogoCargoRoutingModule }   from './catalogo-cargo-routing.module';
import { CatalogoCargoListKendoComponent }   from './catalogo-cargo-list-kendo/catalogo-cargo-list-kendo.component';
import { CatalogoCargoCrudComponent }   from './catalogo-cargo-crud/catalogo-cargo-crud.component';
import { CatalogoCargoConjuntoComponent }   from './catalogo-cargo-conjunto/catalogo-cargo-conjunto.component';
import { CatalogoCargoComponent }   from './catalogo-cargo/catalogo-cargo.component';
import { CatalogoCargoTableComponent }   from './catalogo-cargo-table/catalogo-cargo-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , CatalogoCargoRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [


  ],
  exports:[


  ]
})
export class CatalogoCargoModule {


    static forRoot() {
        return {
            ngModule: CatalogoCargoModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: CatalogoCargoModule) {
		if (parentModule) {
			throw new Error(
					'CatalogoCargoModule is already loaded. Import it in the AppModule only');
		}
	}

}
