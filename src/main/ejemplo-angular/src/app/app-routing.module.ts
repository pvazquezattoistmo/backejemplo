import { AuthGuard } from './core/guards/auth.guard';
import { TableroModule } from './tablero/tablero.module';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { BienvenidoComponent } from './core/bienvenido/bienvenido.component';



const routes: Routes = [
  { path: 'login',  component: LoginComponent,  canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'bienvenido',  component: BienvenidoComponent },
  { path: '',  loadChildren: 'app/permiso-tablas/permiso-tabla.module#PermisoTablaModule'  },
  { path: '',  loadChildren: 'app/registro-extracciones/registro-extraccion.module#RegistroExtraccionModule'  },
  { path: '',  loadChildren: 'app/gestion-muestra-microbiologias/gestion-muestra-microbiologia.module#GestionMuestraMicrobiologiaModule'  },
  { path: '',  loadChildren: 'app/oficio-donaciones/oficio-donacion.module#OficioDonacionModule'  },
  { path: '',  loadChildren: 'app/estudio-laboratorios/estudio-laboratorio.module#EstudioLaboratorioModule'  },
  { path: '',  loadChildren: 'app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module#SolicitudEvaluacionCornealModule'  },
  { path: '',  loadChildren: 'app/doctor-procuradores/doctor-procurador.module#DoctorProcuradorModule'  },
  { path: '',  loadChildren: 'app/permiso-atributos/permiso-atributo.module#PermisoAtributoModule'  },
  { path: '',  loadChildren: 'app/solicitud-tejido-corneales/solicitud-tejido-corneal.module#SolicitudTejidoCornealModule'  },
  { path: '',  loadChildren: 'app/itemes/item.module#ItemModule'  },
  { path: '',  loadChildren: 'app/lampara-hendiduras/lampara-hendidura.module#LamparaHendiduraModule'  },
  { path: '',  loadChildren: 'app/almacen-tejidos/almacen-tejido.module#AlmacenTejidoModule'  },
  { path: '',  loadChildren: 'app/coordinador-extracciones/coordinador-extraccion.module#CoordinadorExtraccionModule'  },
  { path: '',  loadChildren: 'app/doctor-solicitantes/doctor-solicitante.module#DoctorSolicitanteModule'  },
  { path: '',  loadChildren: 'app/tipo-cirugia-previstas/tipo-cirugia-prevista.module#TipoCirugiaPrevistaModule'  },
  { path: '',  loadChildren: 'app/permiso-conjuntos/permiso-conjunto.module#PermisoConjuntoModule'  },
  { path: '',  loadChildren: 'app/desglose-corneas/desglose-cornea.module#DesgloseCorneaModule'  },
  { path: '',  loadChildren: 'app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module#SolicitudTejidoCornealRecepcionModule'  },
  { path: '',  loadChildren: 'app/dato-procuracion-corneales/dato-procuracion-corneal.module#DatoProcuracionCornealModule'  },
  { path: '',  loadChildren: 'app/caracteristica-donaciones/caracteristica-donacion.module#CaracteristicaDonacionModule'  },
  { path: '',  loadChildren: 'app/documentacion-donaciones/documentacion-donacion.module#DocumentacionDonacionModule'  },
  { path: '',  loadChildren: 'app/equipo-extracciones/equipo-extraccion.module#EquipoExtraccionModule'  },
  { path: '',  loadChildren: 'app/evaluacion-solicitudes/evaluacion-solicitud.module#EvaluacionSolicitudModule'  },
  { path: '',  loadChildren: 'app/causa-muertes/causa-muerte.module#CausaMuerteModule'  },
  { path: '',  loadChildren: 'app/conteo-celulares/conteo-celular.module#ConteoCelularModule'  },
  { path: '',  loadChildren: 'app/dato-cornea-extracciones/dato-cornea-extraccion.module#DatoCorneaExtraccionModule'  },
  { path: '',  loadChildren: 'app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module#RecepcionSolicitudEvaluacionModule'  },
  { path: '',  loadChildren: 'app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen.module#SolicitudTejidoCornealAlmacenModule'  },
  { path: '',  loadChildren: 'app/catalogo-cargos/catalogo-cargo.module#CatalogoCargoModule'  },
  { path: '',  loadChildren: 'app/shared/perfil-btc-usuario-usuario-btc.module#PerfilBtcUsuarioUsuarioBtcModule'  },
  { path: '',  loadChildren: 'app/shared/usuario-perfil.module#UsuarioPerfilModule'  },
  { path: '',  loadChildren: 'app/shared/perfil-red-issste-usuario-usuario-btc.module#PerfilRedIsssteUsuarioUsuarioBtcModule'  },
  { path: '',  loadChildren: 'app/shared/entidad-federativa-usuario-usuario-btc-hospital.module#EntidadFederativaUsuarioUsuarioBtcHospitalModule'  },
  { path: '',  loadChildren: 'app/tablero/tablero.module#TableroModule'  },
  { path: '',  loadChildren: 'app/almacen-evaluaciones/almacen-evaluacion.module#AlmacenEvaluacionModule'  },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
/* LoginComponent,

*/
