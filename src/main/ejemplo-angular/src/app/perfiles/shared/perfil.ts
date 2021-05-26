import { Usuario } from './../../usuarios/shared/usuario';
/**
 *
 * @author IstmoSoft
 */
export class Perfil {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      descripcion = null ;
      ruta = null ;
      nombre = null ;
      status = null ;
      usuarioUltMov = null ;
      usuario = null ;
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
      if( source.ruta)
           this.ruta = source.ruta;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);
      if( source.usuario)
           this.usuario = new Usuario(source.usuario);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.descripcion)
           return true;
      if( this.ruta)
           return true;
      if( this.nombre)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.usuario)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.descripcion !=null && typeof this.descripcion === 'string' && this.descripcion.replace(/^\s+|\s+$/g, '')=="" )
          this.descripcion = null;
     if ( this.ruta !=null && typeof this.ruta === 'string' && this.ruta.replace(/^\s+|\s+$/g, '')=="" )
          this.ruta = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.usuario !=null && typeof this.usuario === 'string' && this.usuario.replace(/^\s+|\s+$/g, '')=="" )
          this.usuario = null;

  return this;
  }

}
