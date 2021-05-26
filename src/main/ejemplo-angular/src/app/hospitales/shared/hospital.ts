import { Usuario } from './../../usuarios/shared/usuario';
import { EntidadFederativa } from './../../entidad-federativas/shared/entidad-federativa';
/**
 *
 * @author IstmoSoft
 */
export class Hospital {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      establecimiento = null ;
      fechaRegistro = null ;
      redIssste = null ;
      rnt = null ;
      fechaActualizacion = null ;
      nombre = null ;
      dependencia = null ;
      status = null ;
      identidadFederativa = null ;
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
      if( source.establecimiento)
           this.establecimiento = source.establecimiento;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.redIssste)
           this.redIssste = source.redIssste;
      if( source.rnt)
           this.rnt = source.rnt;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.dependencia)
           this.dependencia = source.dependencia;
      if( source.status)
           this.status = source.status;
      if( source.identidadFederativa)
           this.identidadFederativa = new EntidadFederativa(source.identidadFederativa);
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario(source.usuarioUltMov);

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.establecimiento)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.redIssste)
           return true;
      if( this.rnt)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.nombre)
           return true;
      if( this.dependencia)
           return true;
      if( this.status)
           return true;
      if( this.identidadFederativa)
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
     if ( this.establecimiento !=null && typeof this.establecimiento === 'string' && this.establecimiento.replace(/^\s+|\s+$/g, '')=="" )
          this.establecimiento = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.redIssste !=null && typeof this.redIssste === 'string' && this.redIssste.replace(/^\s+|\s+$/g, '')=="" )
          this.redIssste = null;
     if ( this.rnt !=null && typeof this.rnt === 'string' && this.rnt.replace(/^\s+|\s+$/g, '')=="" )
          this.rnt = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.dependencia !=null && typeof this.dependencia === 'string' && this.dependencia.replace(/^\s+|\s+$/g, '')=="" )
          this.dependencia = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.identidadFederativa !=null && typeof this.identidadFederativa === 'string' && this.identidadFederativa.replace(/^\s+|\s+$/g, '')=="" )
          this.identidadFederativa = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;

  return this;
  }

}
