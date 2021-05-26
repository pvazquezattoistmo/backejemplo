import { Usuario } from './../../usuarios/shared/usuario';
import { SolicitudTejidoCornealRecepcion } from './../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion';
/**
 *
 * @author IstmoSoft
 */
export class SolicitudTejidoCornealAlmacen {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      tejidoExistente = null ;
      fechaRegistro = null ;
      estatusProceso = null ;
      fechaActualizacion = null ;
      status = null ;
      usuarioUltMov = null ;
      idsolicitudTejidoCornealRecepcion = null ;
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
      if( source.tejidoExistente)
           this.tejidoExistente = source.tejidoExistente;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);
      if( source.idsolicitudTejidoCornealRecepcion)
           this.idsolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion(source.idsolicitudTejidoCornealRecepcion);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.tejidoExistente)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idsolicitudTejidoCornealRecepcion)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.tejidoExistente !=null && typeof this.tejidoExistente === 'string' && this.tejidoExistente.replace(/^\s+|\s+$/g, '')=="" )
          this.tejidoExistente = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudTejidoCornealRecepcion !=null && typeof this.idsolicitudTejidoCornealRecepcion === 'string' && this.idsolicitudTejidoCornealRecepcion.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudTejidoCornealRecepcion = null;

  return this;
  }

}
