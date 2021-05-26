/**
 *
 * @author IstmoSoft
 */
export class DatoProcuracionCorneal {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      horaFin = null ;
      fechaBaja = null ;
      tipo = null ;
      fechaInicio = null ;
      idcenatra = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      fechaFin = null ;
      horaInicio = null ;
      status = null ;
      usuarioUltMov = null ;
      idsolicitudEvaluacionCorneal = null ;
// atributos fin
constructor(source = null) {
  if (source!== null)
   this.from(source);
 }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.horaFin)
           this.horaFin = source.horaFin;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.tipo)
           this.tipo = source.tipo;
      if( source.fechaInicio)
           this.fechaInicio = source.fechaInicio;
      if( source.idcenatra)
           this.idcenatra = source.idcenatra;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.fechaFin)
           this.fechaFin = source.fechaFin;
      if( source.horaInicio)
           this.horaInicio = source.horaInicio;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idsolicitudEvaluacionCorneal)
           this.idsolicitudEvaluacionCorneal = source.idsolicitudEvaluacionCorneal;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.horaFin)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.tipo)
           return true;
      if( this.fechaInicio)
           return true;
      if( this.idcenatra)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.fechaFin)
           return true;
      if( this.horaInicio)
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
     if ( this.horaFin !=null && typeof this.horaFin === 'string' && this.horaFin.replace(/^\s+|\s+$/g, '')=="" )
          this.horaFin = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.tipo !=null && typeof this.tipo === 'string' && this.tipo.replace(/^\s+|\s+$/g, '')=="" )
          this.tipo = null;
     if ( this.fechaInicio !=null && typeof this.fechaInicio === 'string' && this.fechaInicio.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaInicio = null;
     if ( this.idcenatra !=null && typeof this.idcenatra === 'string' && this.idcenatra.replace(/^\s+|\s+$/g, '')=="" )
          this.idcenatra = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.fechaFin !=null && typeof this.fechaFin === 'string' && this.fechaFin.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaFin = null;
     if ( this.horaInicio !=null && typeof this.horaInicio === 'string' && this.horaInicio.replace(/^\s+|\s+$/g, '')=="" )
          this.horaInicio = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudEvaluacionCorneal !=null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudEvaluacionCorneal = null;

  return this;
  }

}
