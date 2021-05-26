import { Usuario } from './../../usuarios/shared/usuario';
/**
 *
 * @author IstmoSoft
 */
export class CatalogoCargo {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      descripcion = null ;
      fechaBaja = null ;
      fechaActualizacion = null ;
      fechaRegistro = null ;
      status = null ;
      usuarioUltMov = null ;
// atributos fin
constructor(entrada = null) {
  if (entrada !== null){
     this.from(entrada);
  }
}
 from(source) {
      if( source.id)
           this.id = source.id;
      if( source.descripcion)
           this.descripcion = source.descripcion;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.descripcion)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.fechaRegistro)
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
     if ( this.descripcion !=null && typeof this.descripcion === 'string' && this.descripcion.replace(/^\s+|\s+$/g, '')=="" )
          this.descripcion = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;

  return this;
  }

}
