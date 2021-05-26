import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { EntidadFederativaListKendoComponent }   from '../entidad-federativas/entidad-federativa-list-kendo/entidad-federativa-list-kendo.component';
import { EntidadFederativaCrudComponent }   from '../entidad-federativas/entidad-federativa-crud/entidad-federativa-crud.component';
import { EntidadFederativaTableComponent }   from '../entidad-federativas/entidad-federativa-table/entidad-federativa-table.component';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { UsuarioBtcListKendoComponent }   from '../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component';
import { UsuarioBtcCrudComponent }   from '../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component';
import { UsuarioBtcTableComponent }   from '../usuario-btcs/usuario-btc-table/usuario-btc-table.component';
import { HospitalListKendoComponent }   from '../hospitales/hospital-list-kendo/hospital-list-kendo.component';
import { HospitalexListKendoComponent } from '../hospitales/hospitalex-list-kendo/hospitalex-list-kendo.component';
import { HospitalCrudComponent }   from '../hospitales/hospital-crud/hospital-crud.component';
import { HospitalexCrudComponent } from  '../hospitales/hospitalex-crud/hospitalex-crud.component';
import { HospitalTableComponent }   from '../hospitales/hospital-table/hospital-table.component';
import { CatalogoCargoListKendoComponent }   from '../catalogo-cargos/catalogo-cargo-list-kendo/catalogo-cargo-list-kendo.component';
import { CatalogoCargoCrudComponent }   from '../catalogo-cargos/catalogo-cargo-crud/catalogo-cargo-crud.component';
import { CatalogoCargoTableComponent }   from '../catalogo-cargos/catalogo-cargo-table/catalogo-cargo-table.component';


const routes: Routes = [
  { path: 'entidad-federativa-list-kendo',  component: EntidadFederativaListKendoComponent },
  { path: 'entidad-federativa-crud',  component: EntidadFederativaCrudComponent },
  { path: 'entidad-federativa-table',  component: EntidadFederativaTableComponent },
  { path: 'usuario-list-kendo',  component: UsuarioListKendoComponent },
  { path: 'usuario-crud',  component: UsuarioCrudComponent },
  { path: 'usuario-table',  component: UsuarioTableComponent },
  { path: 'usuario-btc-list-kendo',  component: UsuarioBtcListKendoComponent },
  { path: 'usuario-btc-crud',  component: UsuarioBtcCrudComponent },
  { path: 'usuario-btc-table',  component: UsuarioBtcTableComponent },
  { path: 'hospital-list-kendo',  component: HospitalListKendoComponent },
  { path: 'hospitalex-list-kendo', component: HospitalexListKendoComponent },
  { path: 'hospital-crud',  component: HospitalCrudComponent },
  { path: 'hospitalex-crud', component:HospitalexCrudComponent},
  { path: 'hospital-table',  component: HospitalTableComponent },
  { path: 'catalogo-cargo-list-kendo',  component: CatalogoCargoListKendoComponent },
  { path: 'catalogo-cargo-crud',  component: CatalogoCargoCrudComponent },
  { path: 'catalogo-cargo-table',  component: CatalogoCargoTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadFederativaUsuarioUsuarioBtcHospitalRoutingModule { }
