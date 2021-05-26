/**
 *
 * @author IstmoSoft
 */
export class EntidadFederativa {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      abreviatura = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      nombre = null ;
      status = null ;
      usuarioUltMov = null ;
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
      if( source.abreviatura)
           this.abreviatura = source.abreviatura;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.abreviatura)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.nombre)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.abreviatura !=null && typeof this.abreviatura === 'string' && this.abreviatura.replace(/^\s+|\s+$/g, '')=="" )
          this.abreviatura = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;

  return this;
  }

}
