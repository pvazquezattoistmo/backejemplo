/**
 *
 * @author IstmoSoft
 */
export class EstudioLaboratorio {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      brilloCorneal = null ;
      cicatriceLeucoma = null ;
      fechaRegistro = null ;
      erocioneUlcera = null ;
      fechaActualizacion = null ;
      valoracion = null ;
      cuerpoExtrano = null ;
      tipoCornea = null ;
      observacion = null ;
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
      if( source.brilloCorneal)
           this.brilloCorneal = source.brilloCorneal;
      if( source.cicatriceLeucoma)
           this.cicatriceLeucoma = source.cicatriceLeucoma;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.erocioneUlcera)
           this.erocioneUlcera = source.erocioneUlcera;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.valoracion)
           this.valoracion = source.valoracion;
      if( source.cuerpoExtrano)
           this.cuerpoExtrano = source.cuerpoExtrano;
      if( source.tipoCornea)
           this.tipoCornea = source.tipoCornea;
      if( source.observacion)
           this.observacion = source.observacion;
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
      if( this.brilloCorneal)
           return true;
      if( this.cicatriceLeucoma)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.erocioneUlcera)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.valoracion)
           return true;
      if( this.cuerpoExtrano)
           return true;
      if( this.tipoCornea)
           return true;
      if( this.observacion)
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
     if ( this.brilloCorneal !=null && typeof this.brilloCorneal === 'string' && this.brilloCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.brilloCorneal = null;
     if ( this.cicatriceLeucoma !=null && typeof this.cicatriceLeucoma === 'string' && this.cicatriceLeucoma.replace(/^\s+|\s+$/g, '')=="" )
          this.cicatriceLeucoma = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.erocioneUlcera !=null && typeof this.erocioneUlcera === 'string' && this.erocioneUlcera.replace(/^\s+|\s+$/g, '')=="" )
          this.erocioneUlcera = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.valoracion !=null && typeof this.valoracion === 'string' && this.valoracion.replace(/^\s+|\s+$/g, '')=="" )
          this.valoracion = null;
     if ( this.cuerpoExtrano !=null && typeof this.cuerpoExtrano === 'string' && this.cuerpoExtrano.replace(/^\s+|\s+$/g, '')=="" )
          this.cuerpoExtrano = null;
     if ( this.tipoCornea !=null && typeof this.tipoCornea === 'string' && this.tipoCornea.replace(/^\s+|\s+$/g, '')=="" )
          this.tipoCornea = null;
     if ( this.observacion !=null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '')=="" )
          this.observacion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idevaluacionSolicitud !=null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.idevaluacionSolicitud = null;

  return this;
  }

}
