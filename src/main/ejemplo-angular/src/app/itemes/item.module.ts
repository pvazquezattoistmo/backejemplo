import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ItemRoutingModule }   from './item-routing.module';
import { ItemListKendoComponent }   from './item-list-kendo/item-list-kendo.component';
import { ItemCrudComponent }   from './item-crud/item-crud.component';
import { ItemConjuntoComponent }   from './item-conjunto/item-conjunto.component';
import { ItemComponent }   from './item/item.component';
import { ItemTableComponent }   from './item-table/item-table.component';

import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , ItemRoutingModule
, UsuarioPerfilModule.forRoot()

  ],
  declarations: [ 
      ItemListKendoComponent, 
      ItemComponent , 
      ItemCrudComponent , 
      ItemConjuntoComponent , 
      ItemTableComponent , 

  ],
  exports:[
      ItemListKendoComponent, 
      ItemComponent , 
      ItemCrudComponent , 
      ItemConjuntoComponent , 
      ItemTableComponent , 

  ]
})
export class ItemModule { 


    static forRoot() {
        return {
            ngModule: ItemModule,
            providers: []
        }
    }
	
	constructor (@Optional() @SkipSelf() parentModule: ItemModule) {
		if (parentModule) {
			throw new Error(
					'ItemModule is already loaded. Import it in the AppModule only');
		}
	}

}
