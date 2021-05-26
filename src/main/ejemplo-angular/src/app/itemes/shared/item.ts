/**
 *
 * @author IstmoSoft
 */
export class Item {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      principal = null ;
      ruta = null ;
      nombre = null ;
      status = null ;
      usuarioUltMov = null ;
      itemsm = null ;
      perfiles = null ;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.principal)
           this.principal = source.principal;
      if( source.ruta)
           this.ruta = source.ruta;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.itemsm)
           this.itemsm = source.itemsm;
      if( source.perfiles)
           this.perfiles = source.perfiles;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.principal)
           return true;
      if( this.ruta)
           return true;
      if( this.nombre)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.itemsm && this.itemsm.length >0   )
           return true;
      if( this.perfiles && this.perfiles.length >0   )
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.principal !=null && typeof this.principal === 'string' && this.principal.replace(/^\s+|\s+$/g, '')=="" )
          this.principal = null;
     if ( this.ruta !=null && typeof this.ruta === 'string' && this.ruta.replace(/^\s+|\s+$/g, '')=="" )
          this.ruta = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.itemsm !=null && typeof this.itemsm === 'string' && this.itemsm.replace(/^\s+|\s+$/g, '')=="" )
          this.itemsm = null;
     if ( this.perfiles !=null && typeof this.perfiles === 'string' && this.perfiles.replace(/^\s+|\s+$/g, '')=="" )
          this.perfiles = null;

  return this;
  }

}
