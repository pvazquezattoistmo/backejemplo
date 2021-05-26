import { EvaluacionSolicitud } from './../../evaluacion-solicitudes/shared/evaluacion-solicitud';
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { Usuario } from "../../usuarios/shared/usuario";


/**
 *
 * @author IstmoSoft
 */
export class RecepcionSolicitudEvaluacion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      horaRecepcion = null ;
      registroTejido = null ;
      fechaBaja = null ;
      tejidoCorneaDerecha = null ;
      fechaRegistro = null ;
      estatusProceso = null ;
      expedienteFisico = null ;
      idbtcCi = null ;
      tejidoCorneaIzquierda = null ;
      idbtcCd = null ;
      fechaActualizacion = null ;
      fechaRecepcion = null ;
      status = null ;
      usuarioUltMov = null ;
      idsolicitudEvaluacionCorneal = null ;
      nombreRecibe = null;
      primerApellidoRecibe = null;
      segundoApellidoRecibe = null;
      idUsuarioRecibe = null ;
      evaluacionSolicitud = null;
      oficioDonacion = null;
// atributos fin
   constructor( entrada = null) {
     if (entrada !==  null){
       this.from(entrada);
     }
   }

  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.horaRecepcion)
           this.horaRecepcion = source.horaRecepcion;
      if( source.registroTejido)
           this.registroTejido = source.registroTejido;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.tejidoCorneaDerecha)
           this.tejidoCorneaDerecha = source.tejidoCorneaDerecha;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.expedienteFisico)
           this.expedienteFisico = source.expedienteFisico;
      if( source.idbtcCi)
           this.idbtcCi = source.idbtcCi;
      if( source.tejidoCorneaIzquierda)
           this.tejidoCorneaIzquierda = source.tejidoCorneaIzquierda;
      if( source.idbtcCd)
           this.idbtcCd = source.idbtcCd;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.fechaRecepcion)
           this.fechaRecepcion = source.fechaRecepcion;
      if( source.nombreRecibe)
          this.nombreRecibe =source.nombreRecibe;
      if( source.primerApellidoRecibe )
          this.primerApellidoRecibe=source.primerApellidoRecibe;
      if( source.segundoApellidoRecibe )
          this.segundoApellidoRecibe=source.segundoApellidoRecibe;
      if( source.status)
           this.status = source.status;
      if( source.idUsuarioRecibe)
           this.idUsuarioRecibe = new Usuario(source.idUsuarioRecibe);
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario(source.usuarioUltMov);
      if( source.idsolicitudEvaluacionCorneal)
           this.idsolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal (source.idsolicitudEvaluacionCorneal);
      if( source.evaluacionSolicitud)
           this.evaluacionSolicitud = new EvaluacionSolicitud (source.evaluacionSolicitud);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.horaRecepcion)
           return true;
      if( this.registroTejido)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.tejidoCorneaDerecha)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.expedienteFisico)
           return true;
      if( this.idbtcCi)
           return true;
      if( this.tejidoCorneaIzquierda)
           return true;
      if( this.idbtcCd)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.fechaRecepcion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idsolicitudEvaluacionCorneal)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.horaRecepcion !=null && typeof this.horaRecepcion === 'string' && this.horaRecepcion.replace(/^\s+|\s+$/g, '')=="" )
          this.horaRecepcion = null;
     if ( this.registroTejido !=null && typeof this.registroTejido === 'string' && this.registroTejido.replace(/^\s+|\s+$/g, '')=="" )
          this.registroTejido = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.tejidoCorneaDerecha !=null && typeof this.tejidoCorneaDerecha === 'string' && this.tejidoCorneaDerecha.replace(/^\s+|\s+$/g, '')=="" )
          this.tejidoCorneaDerecha = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.expedienteFisico !=null && typeof this.expedienteFisico === 'string' && this.expedienteFisico.replace(/^\s+|\s+$/g, '')=="" )
          this.expedienteFisico = null;
     if ( this.idbtcCi !=null && typeof this.idbtcCi === 'string' && this.idbtcCi.replace(/^\s+|\s+$/g, '')=="" )
          this.idbtcCi = null;
     if ( this.tejidoCorneaIzquierda !=null && typeof this.tejidoCorneaIzquierda === 'string' && this.tejidoCorneaIzquierda.replace(/^\s+|\s+$/g, '')=="" )
          this.tejidoCorneaIzquierda = null;
     if ( this.idbtcCd !=null && typeof this.idbtcCd === 'string' && this.idbtcCd.replace(/^\s+|\s+$/g, '')=="" )
          this.idbtcCd = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.fechaRecepcion !=null && typeof this.fechaRecepcion === 'string' && this.fechaRecepcion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRecepcion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudEvaluacionCorneal !=null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudEvaluacionCorneal = null;

  return this;
  }

}
