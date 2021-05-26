/**
 *
 * @author IstmoSoft
 */
export class PermisoConjunto {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      etiqueta = null ;
      permiso = null ;
      tabla = null ;
      conjunto = null ;
      status = null ;
      usuarioUltMov = null ;
      usuario = null ;
      perfiles = null ;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.etiqueta)
           this.etiqueta = source.etiqueta;
      if( source.permiso)
           this.permiso = source.permiso;
      if( source.tabla)
           this.tabla = source.tabla;
      if( source.conjunto)
           this.conjunto = source.conjunto;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.usuario)
           this.usuario = source.usuario;
      if( source.perfiles)
           this.perfiles = source.perfiles;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.etiqueta)
           return true;
      if( this.permiso)
           return true;
      if( this.tabla)
           return true;
      if( this.conjunto)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.usuario)
           return true;
      if( this.perfiles && this.perfiles.length >0   )
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.etiqueta !=null && typeof this.etiqueta === 'string' && this.etiqueta.replace(/^\s+|\s+$/g, '')=="" )
          this.etiqueta = null;
     if ( this.permiso !=null && typeof this.permiso === 'string' && this.permiso.replace(/^\s+|\s+$/g, '')=="" )
          this.permiso = null;
     if ( this.tabla !=null && typeof this.tabla === 'string' && this.tabla.replace(/^\s+|\s+$/g, '')=="" )
          this.tabla = null;
     if ( this.conjunto !=null && typeof this.conjunto === 'string' && this.conjunto.replace(/^\s+|\s+$/g, '')=="" )
          this.conjunto = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.usuario !=null && typeof this.usuario === 'string' && this.usuario.replace(/^\s+|\s+$/g, '')=="" )
          this.usuario = null;
     if ( this.perfiles !=null && typeof this.perfiles === 'string' && this.perfiles.replace(/^\s+|\s+$/g, '')=="" )
          this.perfiles = null;

  return this;
  }

}
