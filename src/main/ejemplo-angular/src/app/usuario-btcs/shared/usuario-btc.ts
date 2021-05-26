/**
 *
 * @author IstmoSoft
 */
export class UsuarioBtc {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      primerApellido = null ;
      fechaRegistro = null ;
      segundoApellido = null ;
      fechaActualizacion = null ;
      nombre = null ;
      correoElectronico = null ;
      status = null ;
      usuarioUltMov = null ;
      idperfilRedIssste = null ;
      idcargo = null ;
      idhospital = null ;
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
      if( source.primerApellido)
           this.primerApellido = source.primerApellido;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.segundoApellido)
           this.segundoApellido = source.segundoApellido;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.correoElectronico)
           this.correoElectronico = source.correoElectronico;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idperfilRedIssste)
           this.idperfilRedIssste = source.idperfilRedIssste;
      if( source.idcargo)
           this.idcargo = source.idcargo;
      if( source.idhospital)
           this.idhospital = source.idhospital;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.primerApellido)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.segundoApellido)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.nombre)
           return true;
      if( this.correoElectronico)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idperfilRedIssste)
           return true;
      if( this.idcargo)
           return true;
      if( this.idhospital)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.primerApellido !=null && typeof this.primerApellido === 'string' && this.primerApellido.replace(/^\s+|\s+$/g, '')=="" )
          this.primerApellido = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.segundoApellido !=null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '')=="" )
          this.segundoApellido = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.correoElectronico !=null && typeof this.correoElectronico === 'string' && this.correoElectronico.replace(/^\s+|\s+$/g, '')=="" )
          this.correoElectronico = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idperfilRedIssste !=null && typeof this.idperfilRedIssste === 'string' && this.idperfilRedIssste.replace(/^\s+|\s+$/g, '')=="" )
          this.idperfilRedIssste = null;
     if ( this.idcargo !=null && typeof this.idcargo === 'string' && this.idcargo.replace(/^\s+|\s+$/g, '')=="" )
          this.idcargo = null;
     if ( this.idhospital !=null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '')=="" )
          this.idhospital = null;

  return this;
  }

}
