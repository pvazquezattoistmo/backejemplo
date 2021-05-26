import { Hospital } from './../../hospitales/shared/hospital';
import { Usuario } from './../../usuarios/shared/usuario';
import { DoctorSolicitante } from './../../doctor-solicitantes/shared/doctor-solicitante';
/**
 *
 * @author IstmoSoft
 */
export class SolicitudTejidoCorneal {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      fechaRegistro = null ;
      estatusProceso = null ;
      segundoApellidoReceptor = null ;
      fechaTentativaCirugia = null ;
      nombreReceptor = null ;
      numeroExpedienteReceptor = null ;
      sexoReceptor = null ;
      folioSolicitudTejidoCorneal = null ;
      diagnostico = null ;
      fechaActualizacion = null ;
      edadReceptor = null ;
      caracteristicaCornea = null ;
      corneaSolicitada = null ;
      primerApellidoReceptor = null ;
      status = null ;
      usuarioUltMov = null ;
      iddoctorResponsableSolicitud = null ;
      idhospital = null ;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.segundoApellidoReceptor)
           this.segundoApellidoReceptor = source.segundoApellidoReceptor;
      if( source.fechaTentativaCirugia)
           this.fechaTentativaCirugia = source.fechaTentativaCirugia;
      if( source.nombreReceptor)
           this.nombreReceptor = source.nombreReceptor;
      if( source.numeroExpedienteReceptor)
           this.numeroExpedienteReceptor = source.numeroExpedienteReceptor;
      if( source.sexoReceptor)
           this.sexoReceptor = source.sexoReceptor;
      if( source.folioSolicitudTejidoCorneal)
           this.folioSolicitudTejidoCorneal = source.folioSolicitudTejidoCorneal;
      if( source.diagnostico)
           this.diagnostico = source.diagnostico;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.edadReceptor)
           this.edadReceptor = source.edadReceptor;
      if( source.caracteristicaCornea)
           this.caracteristicaCornea = source.caracteristicaCornea;
      if( source.corneaSolicitada)
           this.corneaSolicitada = source.corneaSolicitada;
      if( source.primerApellidoReceptor)
           this.primerApellidoReceptor = source.primerApellidoReceptor;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);
      if( source.iddoctorResponsableSolicitud)
           this.iddoctorResponsableSolicitud =  new DoctorSolicitante(source.iddoctorResponsableSolicitud);
      if( source.idhospital)
           this.idhospital = new Hospital(source.idhospital);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.segundoApellidoReceptor)
           return true;
      if( this.fechaTentativaCirugia)
           return true;
      if( this.nombreReceptor)
           return true;
      if( this.numeroExpedienteReceptor)
           return true;
      if( this.sexoReceptor)
           return true;
      if( this.folioSolicitudTejidoCorneal)
           return true;
      if( this.diagnostico)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.edadReceptor)
           return true;
      if( this.caracteristicaCornea)
           return true;
      if( this.corneaSolicitada)
           return true;
      if( this.primerApellidoReceptor)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.iddoctorResponsableSolicitud)
           return true;
      if( this.idhospital)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.segundoApellidoReceptor !=null && typeof this.segundoApellidoReceptor === 'string' && this.segundoApellidoReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.segundoApellidoReceptor = null;
     if ( this.fechaTentativaCirugia !=null && typeof this.fechaTentativaCirugia === 'string' && this.fechaTentativaCirugia.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaTentativaCirugia = null;
     if ( this.nombreReceptor !=null && typeof this.nombreReceptor === 'string' && this.nombreReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.nombreReceptor = null;
     if ( this.numeroExpedienteReceptor !=null && typeof this.numeroExpedienteReceptor === 'string' && this.numeroExpedienteReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.numeroExpedienteReceptor = null;
     if ( this.sexoReceptor !=null && typeof this.sexoReceptor === 'string' && this.sexoReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.sexoReceptor = null;
     if ( this.folioSolicitudTejidoCorneal !=null && typeof this.folioSolicitudTejidoCorneal === 'string' && this.folioSolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.folioSolicitudTejidoCorneal = null;
     if ( this.diagnostico !=null && typeof this.diagnostico === 'string' && this.diagnostico.replace(/^\s+|\s+$/g, '')=="" )
          this.diagnostico = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.edadReceptor !=null && typeof this.edadReceptor === 'string' && this.edadReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.edadReceptor = null;
     if ( this.caracteristicaCornea !=null && typeof this.caracteristicaCornea === 'string' && this.caracteristicaCornea.replace(/^\s+|\s+$/g, '')=="" )
          this.caracteristicaCornea = null;
     if ( this.corneaSolicitada !=null && typeof this.corneaSolicitada === 'string' && this.corneaSolicitada.replace(/^\s+|\s+$/g, '')=="" )
          this.corneaSolicitada = null;
     if ( this.primerApellidoReceptor !=null && typeof this.primerApellidoReceptor === 'string' && this.primerApellidoReceptor.replace(/^\s+|\s+$/g, '')=="" )
          this.primerApellidoReceptor = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.iddoctorResponsableSolicitud !=null && typeof this.iddoctorResponsableSolicitud === 'string' && this.iddoctorResponsableSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.iddoctorResponsableSolicitud = null;
     if ( this.idhospital !=null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '')=="" )
          this.idhospital = null;

  return this;
  }

}
