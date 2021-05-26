import { DatoProcuracionCorneal } from '../../dato-procuracion-corneales/shared/dato-procuracion-corneal';
import { Hospital } from '../../hospitales/shared/hospital';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';
import { Usuario } from '../../usuarios/shared/usuario';

/**
 *
 * @author IstmoSoft
 */
export class SolicitudEvaluacionCorneal {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      primerApellido = null ;
      fechaRegistro = null ;
      fechaMuerte = null ;
      segundoApellido = null ;
      estatusProceso = null ;
      nombre = null ;
      numeroExpediente = null ;
      edad = null ;
      conservacionTemperaturaAmbiente = null ;
      horaInicioRefrigracion = null ;
      folioSolicitud = null ;
      horaMuerte  = null ;
      fechaActualizacion = null ;
      temperaturaRefrigeracion = null ;
      status = null ;
      usuarioUltMov = null ;
      idhospital = null ;
      idcausaMuerte = null ;
      datosProcuracionCorneal: Array<DatoProcuracionCorneal> = [];

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
      if( source.fechaMuerte)
           this.fechaMuerte = source.fechaMuerte;
      if( source.segundoApellido)
           this.segundoApellido = source.segundoApellido;
      if( source.estatusProceso)
           this.estatusProceso = source.estatusProceso;
      if( source.nombre)
           this.nombre = source.nombre;
      if( source.numeroExpediente)
           this.numeroExpediente = source.numeroExpediente;
      if( source.edad)
           this.edad = source.edad;
      if( source.conservacionTemperaturaAmbiente !== null  )
           this.conservacionTemperaturaAmbiente = source.conservacionTemperaturaAmbiente;
      if( source.horaInicioRefrigracion)
           this.horaInicioRefrigracion = source.horaInicioRefrigracion;
      if( source.folioSolicitud)
           this.folioSolicitud = source.folioSolicitud;
      if( source.horaMuerte)
           this.horaMuerte = source.horaMuerte;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.temperaturaRefrigeracion)
           this.temperaturaRefrigeracion = source.temperaturaRefrigeracion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = new Usuario(source.usuarioUltMov);
      if( source.idhospital)
           this.idhospital = new Hospital(source.idhospital);
      if( source.idcausaMuerte)
           this.idcausaMuerte = new CausaMuerte(source.idcausaMuerte);
      if (source.datosProcuracionCorneal!= null && source.datosProcuracionCorneal.length>0)
      source.datosProcuracionCorneal.forEach( item => {
            this.datosProcuracionCorneal.push( new DatoProcuracionCorneal(item));
      });


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
      if( this.fechaMuerte)
           return true;
      if( this.segundoApellido)
           return true;
      if( this.estatusProceso)
           return true;
      if( this.nombre)
           return true;
      if( this.numeroExpediente)
           return true;
      if( this.edad)
           return true;
      if( this.conservacionTemperaturaAmbiente)
           return true;
      if( this.horaInicioRefrigracion)
           return true;
      if( this.folioSolicitud)
           return true;
      if( this.horaMuerte)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.temperaturaRefrigeracion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idhospital)
           return true;
      if( this.idcausaMuerte)
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
     if ( this.fechaMuerte !=null && typeof this.fechaMuerte === 'string' && this.fechaMuerte.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaMuerte = null;
     if ( this.segundoApellido !=null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '')=="" )
          this.segundoApellido = null;
     if ( this.estatusProceso !=null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '')=="" )
          this.estatusProceso = null;
     if ( this.nombre !=null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '')=="" )
          this.nombre = null;
     if ( this.numeroExpediente !=null && typeof this.numeroExpediente === 'string' && this.numeroExpediente.replace(/^\s+|\s+$/g, '')=="" )
          this.numeroExpediente = null;
     if ( this.edad !=null && typeof this.edad === 'string' && this.edad.replace(/^\s+|\s+$/g, '')=="" )
          this.edad = null;
     if ( this.conservacionTemperaturaAmbiente !=null && typeof this.conservacionTemperaturaAmbiente === 'string' && this.conservacionTemperaturaAmbiente.replace(/^\s+|\s+$/g, '')=="" )
          this.conservacionTemperaturaAmbiente = null;
     if ( this.horaInicioRefrigracion !=null && typeof this.horaInicioRefrigracion === 'string' && this.horaInicioRefrigracion.replace(/^\s+|\s+$/g, '')=="" )
          this.horaInicioRefrigracion = null;
     if ( this.folioSolicitud !=null && typeof this.folioSolicitud === 'string' && this.folioSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.folioSolicitud = null;
    //  if ( this.horaMuerte !=null && typeof this.horaMuerte === 'string' && this.horaMuerte.replace(/^\s+|\s+$/g, '')=="" )
    //       this.horaMuerte = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.temperaturaRefrigeracion !=null && typeof this.temperaturaRefrigeracion === 'string' && this.temperaturaRefrigeracion.replace(/^\s+|\s+$/g, '')=="" )
          this.temperaturaRefrigeracion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idhospital !=null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '')=="" )
          this.idhospital = null;
     if ( this.idcausaMuerte !=null && typeof this.idcausaMuerte === 'string' && this.idcausaMuerte.replace(/^\s+|\s+$/g, '')=="" )
          this.idcausaMuerte = null;

  return this;
  }

}
