import { Perfil } from './../../perfiles/shared/perfil';
import { Hospital } from './../../hospitales/shared/hospital';
import { CatalogoCargo } from './../../catalogo-cargos/shared/catalogo-cargo';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
/**
 *
 * @author IstmoSoft
 */
export class Usuario {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      nombre = null ;
      primerApellido = null ;
      segundoApellido = null ;
      correoElectronico = null ;
      username = null ;
      password = null ;
      intentos = null ;
      tiempointentos = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      fechaBaja = null ;
      status = null ;
      usuarioUltMov = null ;
      perfil = null ;
      idcargo = null ;
      idhospital = null ;
// atributos fin
constructor(source = null) {
  if (source!== null)
   this.from(source);
 }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.primerApellido)
           this.primerApellido = source.primerApellido;
      if( source.segundoApellido)
           this.segundoApellido = source.segundoApellido;
      if( source.correoElectronico)
           this.correoElectronico = source.correoElectronico;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.password)
           this.password = source.password;
      if( source.username)
           this.username = source.username;
      if( source.tiempointentos)
           this.tiempointentos = source.tiempointentos;
      if( source.intentos)
           this.intentos = source.intentos;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario(source.usuarioUltMov);
      if( source.perfil)
           this.perfil = new Perfil(source.perfil);
      if( source.idcargo)
           this.idcargo = new CatalogoCargo(source.idcargo);
      if( source.idhospital)
           this.idhospital = new Hospital(source.idhospital);

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
      if( this.password)
           return true;
      if( this.username)
           return true
      if( this.intentos)
           return true;
      if( this.tiempointentos)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.perfil)
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
     if ( this.password !=null && typeof this.password === 'string' && this.password.replace(/^\s+|\s+$/g, '')=="" )
          this.password = null;
     if ( this.username !=null && typeof this.username === 'string' && this.username.replace(/^\s+|\s+$/g, '')=="" )
          this.username = null;
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
     if ( this.intentos !=null && typeof this.intentos === 'string' && this.intentos.replace(/^\s+|\s+$/g, '')=="" )
          this.intentos = null;
     if ( this.tiempointentos !=null && typeof this.tiempointentos === 'string' && this.tiempointentos.replace(/^\s+|\s+$/g, '')=="" )
          this.tiempointentos = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
    //  if ( this.usuarioBtc !=null && typeof this.usuarioBtc === 'string' && this.usuarioBtc.replace(/^\s+|\s+$/g, '')=="" )
    //       this.usuarioBtc = null;
     if ( this.perfil !=null && typeof this.perfil === 'string' && this.perfil.replace(/^\s+|\s+$/g, '')=="" )
          this.perfil = null;
     if ( this.idcargo !=null && typeof this.idcargo === 'string' && this.idcargo.replace(/^\s+|\s+$/g, '')=="" )
          this.idcargo = null;
     if ( this.idhospital !=null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '')=="" )
          this.idhospital = null;

  return this;
  }

}
