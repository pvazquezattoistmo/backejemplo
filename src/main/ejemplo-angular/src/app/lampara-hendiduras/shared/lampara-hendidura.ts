/**
 *
 * @author IstmoSoft
 */
export class LamparaHendidura {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      fechaRegistro = null ;
      opacidadEstromal = null ;
      arcoSenil = null ;
      tipoCornea = null ;
      desecacion = null ;
      microcornea = null ;
      fechaActualizacion = null ;
      danoEndotelial = null ;
      observacion = null ;
      pliegueEstria = null ;
      status = null ;
      usuarioUltMov = null ;
      idevaluacionSolicitud = null ;
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
      if( source.opacidadEstromal)
           this.opacidadEstromal = source.opacidadEstromal;
      if( source.arcoSenil)
           this.arcoSenil = source.arcoSenil;
      if( source.tipoCornea)
           this.tipoCornea = source.tipoCornea;
      if( source.desecacion)
           this.desecacion = source.desecacion;
      if( source.microcornea)
           this.microcornea = source.microcornea;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.danoEndotelial)
           this.danoEndotelial = source.danoEndotelial;
      if( source.observacion)
           this.observacion = source.observacion;
      if( source.pliegueEstria)
           this.pliegueEstria = source.pliegueEstria;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idevaluacionSolicitud)
           this.idevaluacionSolicitud = source.idevaluacionSolicitud;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.opacidadEstromal)
           return true;
      if( this.arcoSenil)
           return true;
      if( this.tipoCornea)
           return true;
      if( this.desecacion)
           return true;
      if( this.microcornea)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.danoEndotelial)
           return true;
      if( this.observacion)
           return true;
      if( this.pliegueEstria)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idevaluacionSolicitud)
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
     if ( this.opacidadEstromal !=null && typeof this.opacidadEstromal === 'string' && this.opacidadEstromal.replace(/^\s+|\s+$/g, '')=="" )
          this.opacidadEstromal = null;
     if ( this.arcoSenil !=null && typeof this.arcoSenil === 'string' && this.arcoSenil.replace(/^\s+|\s+$/g, '')=="" )
          this.arcoSenil = null;
     if ( this.tipoCornea !=null && typeof this.tipoCornea === 'string' && this.tipoCornea.replace(/^\s+|\s+$/g, '')=="" )
          this.tipoCornea = null;
     if ( this.desecacion !=null && typeof this.desecacion === 'string' && this.desecacion.replace(/^\s+|\s+$/g, '')=="" )
          this.desecacion = null;
     if ( this.microcornea !=null && typeof this.microcornea === 'string' && this.microcornea.replace(/^\s+|\s+$/g, '')=="" )
          this.microcornea = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.danoEndotelial !=null && typeof this.danoEndotelial === 'string' && this.danoEndotelial.replace(/^\s+|\s+$/g, '')=="" )
          this.danoEndotelial = null;
     if ( this.observacion !=null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '')=="" )
          this.observacion = null;
     if ( this.pliegueEstria !=null && typeof this.pliegueEstria === 'string' && this.pliegueEstria.replace(/^\s+|\s+$/g, '')=="" )
          this.pliegueEstria = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idevaluacionSolicitud !=null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.idevaluacionSolicitud = null;

  return this;
  }

}
