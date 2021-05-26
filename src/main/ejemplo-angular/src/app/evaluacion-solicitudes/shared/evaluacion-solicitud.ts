import { DesgloseCornea } from './../../desglose-corneas/shared/desglose-cornea';
import { ConteoCelular } from './../../conteo-celulares/shared/conteo-celular';
import { LamparaHendidura } from './../../lampara-hendiduras/shared/lampara-hendidura';
import { EstudioLaboratorio } from './../../estudio-laboratorios/shared/estudio-laboratorio';
/**
 *
 * @author IstmoSoft
 */
export class EvaluacionSolicitud {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      status = null ;
      usuarioUltMov = null ;
      idrecepcionSolicitudEvaluacion = null ;
      estudiosLaboratorio: EstudioLaboratorio[] = null;
      lamparasHendidura: LamparaHendidura[] = null;
      conteosCelular: ConteoCelular[] = null;
      almacenEvaluacion: any = null;
      desgloseCorneas: DesgloseCornea[] = null;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
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
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idrecepcionSolicitudEvaluacion !=null && typeof this.idrecepcionSolicitudEvaluacion === 'string' && this.idrecepcionSolicitudEvaluacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idrecepcionSolicitudEvaluacion = null;

  return this;
  }

}
