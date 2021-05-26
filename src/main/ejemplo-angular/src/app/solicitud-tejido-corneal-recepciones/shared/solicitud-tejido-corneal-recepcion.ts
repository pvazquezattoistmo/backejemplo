import { Usuario } from './../../usuarios/shared/usuario';
import { SolicitudTejidoCorneal } from './../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal';
/**
 *
 * @author IstmoSoft
 */
export class SolicitudTejidoCornealRecepcion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      estatusProceso = null ;
      status = null ;
      usuarioUltMov = null ;
      idsolicitudTejidoCorneal = null ;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);
      if( source.idsolicitudTejidoCorneal)
           this.idsolicitudTejidoCorneal = new SolicitudTejidoCorneal(source.idsolicitudTejidoCorneal);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idsolicitudTejidoCorneal)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudTejidoCorneal !=null && typeof this.idsolicitudTejidoCorneal === 'string' && this.idsolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudTejidoCorneal = null;

  return this;
  }

}
