import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { EntidadFederativaUsuarioUsuarioBtcHospitalRoutingModule }   from './entidad-federativa-usuario-usuario-btc-hospital-routing.module';
import { EntidadFederativaListKendoComponent }   from '../entidad-federativas/entidad-federativa-list-kendo/entidad-federativa-list-kendo.component';
import { EntidadFederativaComponent }   from '../entidad-federativas/entidad-federativa/entidad-federativa.component';
import { EntidadFederativaConjuntoComponent }   from '../entidad-federativas/entidad-federativa-conjunto/entidad-federativa-conjunto.component';
import { EntidadFederativaCrudComponent }   from '../entidad-federativas/entidad-federativa-crud/entidad-federativa-crud.component';
import { EntidadFederativaTableComponent }   from '../entidad-federativas/entidad-federativa-table/entidad-federativa-table.component';
import { UsuarioListKendoComponent }   from '../usuarios/usuario-list-kendo/usuario-list-kendo.component';
import { UsuarioComponent }   from '../usuarios/usuario/usuario.component';
import { UsuarioConjuntoComponent }   from '../usuarios/usuario-conjunto/usuario-conjunto.component';
import { UsuarioCrudComponent }   from '../usuarios/usuario-crud/usuario-crud.component';
import { UsuarioTableComponent }   from '../usuarios/usuario-table/usuario-table.component';
import { UsuarioBtcListKendoComponent }   from '../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component';
import { UsuarioBtcComponent }   from '../usuario-btcs/usuario-btc/usuario-btc.component';
import { UsuarioBtcConjuntoComponent }   from '../usuario-btcs/usuario-btc-conjunto/usuario-btc-conjunto.component';
import { UsuarioBtcCrudComponent }   from '../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component';
import { UsuarioBtcTableComponent }   from '../usuario-btcs/usuario-btc-table/usuario-btc-table.component';
import { HospitalListKendoComponent }   from '../hospitales/hospital-list-kendo/hospital-list-kendo.component';
import { HospitalexListKendoComponent } from '../hospitales/hospitalex-list-kendo/hospitalex-list-kendo.component';
import { HospitalComponent }   from '../hospitales/hospital/hospital.component';
import { HospitalexComponent } from '../hospitales/hospitalex/hospitalex.component';
import { HospitalConjuntoComponent }   from '../hospitales/hospital-conjunto/hospital-conjunto.component';
import { HospitalCrudComponent }   from '../hospitales/hospital-crud/hospital-crud.component';
import { HospitalexCrudComponent } from '../hospitales/hospitalex-crud/hospitalex-crud.component';
import { HospitalTableComponent }   from '../hospitales/hospital-table/hospital-table.component';
import { CatalogoCargoListKendoComponent }   from '../catalogo-cargos/catalogo-cargo-list-kendo/catalogo-cargo-list-kendo.component';
import { CatalogoCargoComponent }   from '../catalogo-cargos/catalogo-cargo/catalogo-cargo.component';
import { CatalogoCargoConjuntoComponent }   from '../catalogo-cargos/catalogo-cargo-conjunto/catalogo-cargo-conjunto.component';
import { CatalogoCargoCrudComponent }   from '../catalogo-cargos/catalogo-cargo-crud/catalogo-cargo-crud.component';
import { CatalogoCargoTableComponent }   from '../catalogo-cargos/catalogo-cargo-table/catalogo-cargo-table.component';
import { UsuarioPerfilModule }   from '../shared/usuario-perfil.module';
import { PerfilRedIsssteUsuarioUsuarioBtcModule }   from '../shared/perfil-red-issste-usuario-usuario-btc.module';
//import { PerfilBtcUsuarioUsuarioBtcModule }   from '../shared/perfil-btc-usuario-usuario-btc.module';

import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

import { PerfilListKendoComponent }   from '../perfiles/perfil-list-kendo/perfil-list-kendo.component';
import { PerfilComponent }   from '../perfiles/perfil/perfil.component';
import { PerfilConjuntoComponent }   from '../perfiles/perfil-conjunto/perfil-conjunto.component';
import { PerfilCrudComponent }   from '../perfiles/perfil-crud/perfil-crud.component';
import { PerfilTableComponent }   from '../perfiles/perfil-table/perfil-table.component';

import { PerfilRedIsssteListKendoComponent }   from '../perfil-red-issstes/perfil-red-issste-list-kendo/perfil-red-issste-list-kendo.component';
import { PerfilRedIsssteComponent }   from '../perfil-red-issstes/perfil-red-issste/perfil-red-issste.component';
import { PerfilRedIsssteConjuntoComponent }   from '../perfil-red-issstes/perfil-red-issste-conjunto/perfil-red-issste-conjunto.component';
import { PerfilRedIsssteCrudComponent }   from '../perfil-red-issstes/perfil-red-issste-crud/perfil-red-issste-crud.component';
import { PerfilRedIsssteTableComponent }   from '../perfil-red-issstes/perfil-red-issste-table/perfil-red-issste-table.component';

//import { PerfilBtcListKendoComponent }   from '../perfil-btcs/perfil-btc-list-kendo/perfil-btc-list-kendo.component';
//import { PerfilBtcComponent }   from '../perfil-btcs/perfil-btc/perfil-btc.component';
//import { PerfilBtcConjuntoComponent }   from '../perfil-btcs/perfil-btc-conjunto/perfil-btc-conjunto.component';
//import { PerfilBtcCrudComponent }   from '../perfil-btcs/perfil-btc-crud/perfil-btc-crud.component';
//import { PerfilBtcTableComponent }   from '../perfil-btcs/perfil-btc-table/perfil-btc-table.component';

@NgModule({
  imports: [
         CommonModule, FormsModule,PersonalizadosModule , EntidadFederativaUsuarioUsuarioBtcHospitalRoutingModule
//, UsuarioPerfilModule.forRoot()
//, PerfilRedIsssteUsuarioUsuarioBtcModule.forRoot()
//, PerfilBtcUsuarioUsuarioBtcModule.forRoot()

  ],
  declarations: [
      EntidadFederativaListKendoComponent,
      EntidadFederativaComponent ,
      EntidadFederativaCrudComponent ,
      EntidadFederativaConjuntoComponent ,
      EntidadFederativaTableComponent ,
      UsuarioListKendoComponent,
      UsuarioComponent ,
      UsuarioCrudComponent ,
      UsuarioConjuntoComponent ,
      UsuarioTableComponent ,
      UsuarioBtcListKendoComponent,
      UsuarioBtcComponent ,
      UsuarioBtcCrudComponent ,
      UsuarioBtcConjuntoComponent ,
      UsuarioBtcTableComponent ,
      HospitalListKendoComponent,
      HospitalexListKendoComponent,
      HospitalComponent ,
      HospitalexComponent ,
      HospitalCrudComponent ,
      HospitalexCrudComponent,
      HospitalConjuntoComponent ,
      HospitalTableComponent ,

      PerfilListKendoComponent,
      PerfilComponent ,
      PerfilCrudComponent ,
      PerfilConjuntoComponent ,
      PerfilTableComponent ,

      PerfilRedIsssteListKendoComponent,
      PerfilRedIsssteComponent ,
      PerfilRedIsssteCrudComponent ,
      PerfilRedIsssteConjuntoComponent ,
      PerfilRedIsssteTableComponent ,

      CatalogoCargoListKendoComponent,
      CatalogoCargoComponent ,
      CatalogoCargoCrudComponent ,
      CatalogoCargoConjuntoComponent ,
      CatalogoCargoTableComponent ,

  ],
  exports:[
      EntidadFederativaListKendoComponent,
      EntidadFederativaComponent ,
      EntidadFederativaCrudComponent ,
      EntidadFederativaConjuntoComponent ,
      EntidadFederativaTableComponent ,
      UsuarioListKendoComponent,
      UsuarioComponent ,
      UsuarioCrudComponent ,
      UsuarioConjuntoComponent ,
      UsuarioTableComponent ,
      UsuarioBtcListKendoComponent,
      UsuarioBtcComponent ,
      UsuarioBtcCrudComponent ,
      UsuarioBtcConjuntoComponent ,
      UsuarioBtcTableComponent ,
      HospitalListKendoComponent,
      HospitalexListKendoComponent,
      HospitalComponent ,
      HospitalexComponent ,
      HospitalCrudComponent ,
      HospitalexCrudComponent ,
      HospitalConjuntoComponent ,
      HospitalTableComponent ,

      PerfilListKendoComponent,
      PerfilComponent ,
      PerfilCrudComponent ,
      PerfilConjuntoComponent ,
      PerfilTableComponent ,

      PerfilRedIsssteListKendoComponent,
      PerfilRedIsssteComponent ,
      PerfilRedIsssteCrudComponent ,
      PerfilRedIsssteConjuntoComponent ,
    PerfilRedIsssteTableComponent,

      CatalogoCargoListKendoComponent,
      CatalogoCargoComponent ,
      CatalogoCargoCrudComponent ,
      CatalogoCargoConjuntoComponent ,
      CatalogoCargoTableComponent ,

  ]
})
export class EntidadFederativaUsuarioUsuarioBtcHospitalModule {


    static forRoot() {
        return {
            ngModule: EntidadFederativaUsuarioUsuarioBtcHospitalModule,
            providers: []
        }
    }

	constructor (@Optional() @SkipSelf() parentModule: EntidadFederativaUsuarioUsuarioBtcHospitalModule) {
		if (parentModule) {
			throw new Error(
					'EntidadFederativaUsuarioUsuarioBtcHospitalModule is already loaded. Import it in the AppModule only');
		}
	}

}
