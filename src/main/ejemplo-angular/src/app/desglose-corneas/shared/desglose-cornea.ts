/**
 *
 * @author IstmoSoft
 */
export class DesgloseCornea {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      descripcion = null ;
      idadicional = null ;
      status = null ;
      usuarioUltMov = null ;
      idevaluacionSolicitud = null ;
      tipoCornea = null;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.descripcion)
           this.descripcion = source.descripcion;
      if( source.idadicional)
           this.idadicional = source.idadicional;
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
      if( this.descripcion)
           return true;
      if( this.idadicional)
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
     if ( this.descripcion !=null && typeof this.descripcion === 'string' && this.descripcion.replace(/^\s+|\s+$/g, '')=="" )
          this.descripcion = null;
     if ( this.idadicional !=null && typeof this.idadicional === 'string' && this.idadicional.replace(/^\s+|\s+$/g, '')=="" )
          this.idadicional = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idevaluacionSolicitud !=null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.idevaluacionSolicitud = null;

  return this;
  }

}
