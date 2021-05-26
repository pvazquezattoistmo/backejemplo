/**
 *
 * @author IstmoSoft
 */
export class DatoCorneaExtraccion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      vobo = null ;
      fechaRegistro = null ;
      cultivoOptisol = null ;
      fechaActualizacion = null ;
      cultivoPrevioProcuracion = null ;
      tipoCornea = null ;
      status = null ;
      usuarioUltMov = null ;
      idregistroExtraccion = null ;
// atributos fin
constructor(source = null) {
  if (source!== null)
   this.from(source);
 }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.vobo)
           this.vobo = source.vobo;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.cultivoOptisol)
           this.cultivoOptisol = source.cultivoOptisol;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.cultivoPrevioProcuracion)
           this.cultivoPrevioProcuracion = source.cultivoPrevioProcuracion;
      if( source.tipoCornea)
           this.tipoCornea = source.tipoCornea;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idregistroExtraccion)
           this.idregistroExtraccion = source.idregistroExtraccion;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.vobo)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.cultivoOptisol)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.cultivoPrevioProcuracion)
           return true;
      if( this.tipoCornea)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idregistroExtraccion)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.vobo !=null && typeof this.vobo === 'string' && this.vobo.replace(/^\s+|\s+$/g, '')=="" )
          this.vobo = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.cultivoOptisol !=null && typeof this.cultivoOptisol === 'string' && this.cultivoOptisol.replace(/^\s+|\s+$/g, '')=="" )
          this.cultivoOptisol = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.cultivoPrevioProcuracion !=null && typeof this.cultivoPrevioProcuracion === 'string' && this.cultivoPrevioProcuracion.replace(/^\s+|\s+$/g, '')=="" )
          this.cultivoPrevioProcuracion = null;
     if ( this.tipoCornea !=null && typeof this.tipoCornea === 'string' && this.tipoCornea.replace(/^\s+|\s+$/g, '')=="" )
          this.tipoCornea = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idregistroExtraccion !=null && typeof this.idregistroExtraccion === 'string' && this.idregistroExtraccion.replace(/^\s+|\s+$/g, '')=="" )
          this.idregistroExtraccion = null;

  return this;
  }

}
