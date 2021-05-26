import { AlmacenTejido } from './../../almacen-tejidos/shared/almacen-tejido';
import { GestionMuestraMicrobiologia } from './../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia';
import { CaracteristicaDonacion } from './../../caracteristica-donaciones/shared/caracteristica-donacion';
import { DocumentacionDonacion } from './../../documentacion-donaciones/shared/documentacion-donacion';
import { ParseSourceSpan } from "@angular/compiler";

/**
 *
 * @author IstmoSoft
 */
export class OficioDonacion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      incidenciaTejido = null ;
      botonCorneal = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      microbiologiaCorneal = null ;
      status = null ;
      usuarioUltMov = null ;
      idrecepcionSolicitudEvaluacion = null ;
      documentacionDonacion = null;
      caracteristicaDonacion = null;
      gestionMuestraMicrobiologia = null;
      almacenTejido = null;
// atributos fin
constructor( entrada = null) {
  if (entrada !==  null){
    this.from(entrada);
  }
}

  from(source) {
    if (source.documentacionDonacion)
       this.documentacionDonacion= new DocumentacionDonacion(source.documentacionDonacion);
    if (source.caracteristicaDonacion)
       this.caracteristicaDonacion= new CaracteristicaDonacion( source.caracteristicaDonacion);
    if (source.gestionMuestraMicrobiologia)
       this.gestionMuestraMicrobiologia= new GestionMuestraMicrobiologia ( source.gestionMuestraMicrobiologia);
    if (source.almacenTejido)
       this.almacenTejido= new AlmacenTejido ( source.almacenTejido);
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.incidenciaTejido)
           this.incidenciaTejido = source.incidenciaTejido;
      if( source.botonCorneal)
           this.botonCorneal = source.botonCorneal;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.microbiologiaCorneal)
           this.microbiologiaCorneal = source.microbiologiaCorneal;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idrecepcionSolicitudEvaluacion)
           this.idrecepcionSolicitudEvaluacion = source.idrecepcionSolicitudEvaluacion;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.incidenciaTejido)
           return true;
      if( this.botonCorneal)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.microbiologiaCorneal)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idrecepcionSolicitudEvaluacion)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.incidenciaTejido !=null && typeof this.incidenciaTejido === 'string' && this.incidenciaTejido.replace(/^\s+|\s+$/g, '')=="" )
          this.incidenciaTejido = null;
     if ( this.botonCorneal !=null && typeof this.botonCorneal === 'string' && this.botonCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.botonCorneal = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.microbiologiaCorneal !=null && typeof this.microbiologiaCorneal === 'string' && this.microbiologiaCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.microbiologiaCorneal = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idrecepcionSolicitudEvaluacion !=null && typeof this.idrecepcionSolicitudEvaluacion === 'string' && this.idrecepcionSolicitudEvaluacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idrecepcionSolicitudEvaluacion = null;

  return this;
  }

}
