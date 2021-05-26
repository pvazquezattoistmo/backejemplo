import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { CatalogoCargoListKendoComponent }   from '../catalogo-cargos/catalogo-cargo-list-kendo/catalogo-cargo-list-kendo.component';
import { CatalogoCargoCrudComponent }   from '../catalogo-cargos/catalogo-cargo-crud/catalogo-cargo-crud.component';
import { CatalogoCargoTableComponent }   from '../catalogo-cargos/catalogo-cargo-table/catalogo-cargo-table.component';


const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoCargoRoutingModule { }
