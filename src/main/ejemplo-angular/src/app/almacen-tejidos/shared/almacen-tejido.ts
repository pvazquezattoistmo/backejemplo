/**
 *
 * @author IstmoSoft
 */
export class AlmacenTejido {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      ubicacion = null ;
      fechaRegistro = null ;
      horaRefrigeracion = null ;
      fechaActualizacion = null ;
      estatusProceso = null ;
      comentario = null ;
      temperaturaRefrigeracion = null ;
      status = null ;
      usuarioUltMov = null ;
      idoficioDonacion = null ;
// atributos fin
constructor( entrada = null) {
  if (entrada !==  null){
    this.from(entrada);
  }
}
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.ubicacion)
           this.ubicacion = source.ubicacion;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.horaRefrigeracion)
           this.horaRefrigeracion = source.horaRefrigeracion;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.comentario)
           this.comentario = source.comentario;
      if( source.temperaturaRefrigeracion)
           this.temperaturaRefrigeracion = source.temperaturaRefrigeracion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idoficioDonacion)
           this.idoficioDonacion = source.idoficioDonacion;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.ubicacion)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.horaRefrigeracion)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.comentario)
           return true;
      if( this.temperaturaRefrigeracion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idoficioDonacion)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.ubicacion !=null && typeof this.ubicacion === 'string' && this.ubicacion.replace(/^\s+|\s+$/g, '')=="" )
          this.ubicacion = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.horaRefrigeracion !=null && typeof this.horaRefrigeracion === 'string' && this.horaRefrigeracion.replace(/^\s+|\s+$/g, '')=="" )
          this.horaRefrigeracion = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.comentario !=null && typeof this.comentario === 'string' && this.comentario.replace(/^\s+|\s+$/g, '')=="" )
          this.comentario = null;
     if ( this.temperaturaRefrigeracion !=null && typeof this.temperaturaRefrigeracion === 'string' && this.temperaturaRefrigeracion.replace(/^\s+|\s+$/g, '')=="" )
          this.temperaturaRefrigeracion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idoficioDonacion !=null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idoficioDonacion = null;

  return this;
  }

}
