import { CatalogoCargo } from './../../catalogo-cargos/shared/catalogo-cargo';
import { Usuario } from './../../usuarios/shared/usuario';
import { Hospital } from './../../hospitales/shared/hospital';
/**
 *
 * @author IstmoSoft
 */
export class DoctorSolicitante {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      idhospital = null ;
      primerApellido = null ;
      fechaRegistro = null ;
      segundoApellido = null ;
      fechaActualizacion = null ;
      telefono = null ;
      nombre = null ;
      correoElectronico = null ;
      status = null ;
      usuarioUltMov = null ;
      idcargo = null ;
// atributos fin
   constructor(entrada = null) {
     if (entrada !== null){
        this.from(entrada);
     }
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.idhospital)
           this.idhospital = new Hospital (source.idhospital);
      if( source.primerApellido)
           this.primerApellido = source.primerApellido;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.segundoApellido)
           this.segundoApellido = source.segundoApellido;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.telefono)
           this.telefono = source.telefono;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.correoElectronico)
           this.correoElectronico = source.correoElectronico;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario (source.usuarioUltMov);
      if( source.idcargo)
           this.idcargo = new CatalogoCargo (source.idcargo);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.idhospital)
           return true;
      if( this.primerApellido)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.segundoApellido)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.telefono)
           return true;
      if( this.nombre)
           return true;
      if( this.correoElectronico)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idcargo)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.idhospital !=null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '')=="" )
          this.idhospital = null;
     if ( this.primerApellido !=null && typeof this.primerApellido === 'string' && this.primerApellido.replace(/^\s+|\s+$/g, '')=="" )
          this.primerApellido = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.segundoApellido !=null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '')=="" )
          this.segundoApellido = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.telefono !=null && typeof this.telefono === 'string' && this.telefono.replace(/^\s+|\s+$/g, '')=="" )
          this.telefono = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.correoElectronico !=null && typeof this.correoElectronico === 'string' && this.correoElectronico.replace(/^\s+|\s+$/g, '')=="" )
          this.correoElectronico = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idcargo !=null && typeof this.idcargo === 'string' && this.idcargo.replace(/^\s+|\s+$/g, '')=="" )
          this.idcargo = null;

  return this;
  }

}
