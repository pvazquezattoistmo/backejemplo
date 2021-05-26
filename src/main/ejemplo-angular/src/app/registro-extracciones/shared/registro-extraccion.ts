import { CoordinadorExtraccion } from '../../coordinador-extracciones/shared/coordinador-extraccion';
import { EquipoExtraccion } from '../../equipo-extracciones/shared/equipo-extraccion';
import { DatoCorneaExtraccion } from "../../dato-cornea-extracciones/shared/dato-cornea-extraccion";
/**
 *
 * @author IstmoSoft
 */
export class RegistroExtraccion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      fechaRegistro = null ;
      tipoDonanteMultiorganico = null ;
      panelViral = null ;
      fechaActualizacion = null ;
      telefonoContacto = null ;
      observacion = null ;
      status = null ;
      usuarioUltMov = null ;
      idsolicitudEvaluacionCorneal = null ;
      coordinadorExtraccion: Array<CoordinadorExtraccion> = [];
      equipoExtraccion: Array<EquipoExtraccion> = [];
      datoCorneaExtraccion: Array<DatoCorneaExtraccion> = [];
// atributos fin
constructor(source = null) {
  if (source!== null)
   this.from(source);
 }
  from(source) {

    if( source.coordinadorExtraccion)
      this.coordinadorExtraccion=source.coordinadorExtraccion;
   if( source.datoCorneaExtraccion)
      this.datoCorneaExtraccion=source.datoCorneaExtraccion;
   if( source.equipoExtraccion)
      this.equipoExtraccion=source.equipoExtraccion;

      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.tipoDonanteMultiorganico)
           this.tipoDonanteMultiorganico = source.tipoDonanteMultiorganico;
      if( source.panelViral)
           this.panelViral = source.panelViral;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.telefonoContacto)
           this.telefonoContacto = source.telefonoContacto;
      if( source.observacion)
           this.observacion = source.observacion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idsolicitudEvaluacionCorneal)
           this.idsolicitudEvaluacionCorneal = source.idsolicitudEvaluacionCorneal;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.tipoDonanteMultiorganico)
           return true;
      if( this.panelViral)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.telefonoContacto)
           return true;
      if( this.observacion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idsolicitudEvaluacionCorneal)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.tipoDonanteMultiorganico !=null && typeof this.tipoDonanteMultiorganico === 'string' && this.tipoDonanteMultiorganico.replace(/^\s+|\s+$/g, '')=="" )
          this.tipoDonanteMultiorganico = null;
     if ( this.panelViral !=null && typeof this.panelViral === 'string' && this.panelViral.replace(/^\s+|\s+$/g, '')=="" )
          this.panelViral = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.telefonoContacto !=null && typeof this.telefonoContacto === 'string' && this.telefonoContacto.replace(/^\s+|\s+$/g, '')=="" )
          this.telefonoContacto = null;
     if ( this.observacion !=null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '')=="" )
          this.observacion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idsolicitudEvaluacionCorneal !=null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '')=="" )
          this.idsolicitudEvaluacionCorneal = null;

  return this;
  }

}
