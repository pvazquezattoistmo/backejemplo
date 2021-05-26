import { Usuario } from './../../usuarios/shared/usuario';
import { SolicitudTejidoCorneal } from './../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal';

/**
 *
 * @author IstmoSoft
 */
export class TipoCirugiaPrevista {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      dmek = null ;
      otra = null ;
      fechaBaja = null ;
      dalk = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      dsaek = null ;
      qp = null ;
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
      if( source.dmek)
           this.dmek = source.dmek;
      if( source.otra)
           this.otra = source.otra;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.dalk)
           this.dalk = source.dalk;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.dsaek)
           this.dsaek = source.dsaek;
      if( source.qp)
           this.qp = source.qp;
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
      if( this.dmek)
           return true;
      if( this.otra)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.dalk)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.dsaek)
           return true;
      if( this.qp)
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
     if ( this.dmek !=null && typeof this.dmek === 'string' && this.dmek.replace(/^\s+|\s+$/g, '')=="" )
          this.dmek = null;
     if ( this.otra !=null && typeof this.otra === 'string' && this.otra.replace(/^\s+|\s+$/g, '')=="" )
          this.otra = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.dalk !=null && typeof this.dalk === 'string' && this.dalk.replace(/^\s+|\s+$/g, '')=="" )
          this.dalk = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.dsaek !=null && typeof this.dsaek === 'string' && this.dsaek.replace(/^\s+|\s+$/g, '')=="" )
          this.dsaek = null;
     if ( this.qp !=null && typeof this.qp === 'string' && this.qp.replace(/^\s+|\s+$/g, '')=="" )
          this.qp = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudTejidoCorneal !=null && typeof this.idsolicitudTejidoCorneal === 'string' && this.idsolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudTejidoCorneal = null;

  return this;
  }

}
