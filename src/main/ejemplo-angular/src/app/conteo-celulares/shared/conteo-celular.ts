/**
 *
 * @author IstmoSoft
 */
export class ConteoCelular {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      idnumeroCelula = null ;
      fechaBaja = null ;
      discontinuidad = null ;
      normalMenor33 = null ;
      numeroCampo = null ;
      gutta = null ;
      hexagonalidad = null ;
      responsableMicroscopio = null ;
      paquimetria = null ;
      homogeneidad = null ;
      zonaCelular = null ;
      cvtamano = null ;
      otraDescripcion = null ;
      plemorfismo = null ;
      numeroCelular = null ;
      otra = null ;
      pliegue = null ;
      fechaRegistro = null ;
      mayor60 = null ;
      deposito = null ;
      observacion = null ;
      idpaquimetria = null ;
      polimegatismo = null ;
      fechaActualizacion = null ;
      estriaRotura = null ;
      valoracionFinalEndotelio = null ;
      valoracion = null ;
      status = null ;
      usuarioUltMov = null ;
      idevaluacionSolicitud = null ;
      tipoCornea = null;
// atributos fin
   constructor (source = null) {
      if (source!== null)
         this.from(source);
   }
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.idnumeroCelula)
           this.idnumeroCelula = source.idnumeroCelula;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.discontinuidad)
           this.discontinuidad = source.discontinuidad;
      if( source.normalMenor33)
           this.normalMenor33 = source.normalMenor33;
      if( source.numeroCampo)
           this.numeroCampo = source.numeroCampo;
      if( source.gutta)
           this.gutta = source.gutta;
      if( source.hexagonalidad)
           this.hexagonalidad = source.hexagonalidad;
      if( source.responsableMicroscopio)
           this.responsableMicroscopio = source.responsableMicroscopio;
      if( source.paquimetria)
           this.paquimetria = source.paquimetria;
      if( source.homogeneidad)
           this.homogeneidad = source.homogeneidad;
      if( source.zonaCelular)
           this.zonaCelular = source.zonaCelular;
      if( source.cvtamano)
           this.cvtamano = source.cvtamano;
      if( source.otraDescripcion)
           this.otraDescripcion = source.otraDescripcion;
      if( source.plemorfismo)
           this.plemorfismo = source.plemorfismo;
      if( source.numeroCelular)
           this.numeroCelular = source.numeroCelular;
      if( source.otra)
           this.otra = source.otra;
      if( source.pliegue)
           this.pliegue = source.pliegue;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.mayor60)
           this.mayor60 = source.mayor60;
      if( source.deposito)
           this.deposito = source.deposito;
      if( source.idpaquimetria)
           this.idpaquimetria = source.idpaquimetria;
      if( source.polimegatismo)
           this.polimegatismo = source.polimegatismo;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.estriaRotura)
           this.estriaRotura = source.estriaRotura;
      if( source.valoracionFinalEndotelio)
           this.valoracionFinalEndotelio = source.valoracionFinalEndotelio;
      if( source.valoracion)
           this.valoracion = source.valoracion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idevaluacionSolicitud)
           this.idevaluacionSolicitud = source.idevaluacionSolicitud;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.idnumeroCelula)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.discontinuidad)
           return true;
      if( this.normalMenor33)
           return true;
      if( this.numeroCampo)
           return true;
      if( this.gutta)
           return true;
      if( this.hexagonalidad)
           return true;
      if( this.responsableMicroscopio)
           return true;
      if( this.paquimetria)
           return true;
      if( this.homogeneidad)
           return true;
      if( this.zonaCelular)
           return true;
      if( this.cvtamano)
           return true;
      if( this.otraDescripcion)
           return true;
      if( this.plemorfismo)
           return true;
      if( this.numeroCelular)
           return true;
      if( this.otra)
           return true;
      if( this.pliegue)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.mayor60)
           return true;
      if( this.deposito)
           return true;
           return true;
      if( this.polimegatismo)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.estriaRotura)
           return true;
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idevaluacionSolicitud)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.idnumeroCelula !=null && typeof this.idnumeroCelula === 'string' && this.idnumeroCelula.replace(/^\s+|\s+$/g, '')=="" )
          this.idnumeroCelula = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.discontinuidad !=null && typeof this.discontinuidad === 'string' && this.discontinuidad.replace(/^\s+|\s+$/g, '')=="" )
          this.discontinuidad = null;
     if ( this.normalMenor33 !=null && typeof this.normalMenor33 === 'string' && this.normalMenor33.replace(/^\s+|\s+$/g, '')=="" )
          this.normalMenor33 = null;
     if ( this.numeroCampo !=null && typeof this.numeroCampo === 'string' && this.numeroCampo.replace(/^\s+|\s+$/g, '')=="" )
          this.numeroCampo = null;
     if ( this.gutta !=null && typeof this.gutta === 'string' && this.gutta.replace(/^\s+|\s+$/g, '')=="" )
          this.gutta = null;
     if ( this.hexagonalidad !=null && typeof this.hexagonalidad === 'string' && this.hexagonalidad.replace(/^\s+|\s+$/g, '')=="" )
          this.hexagonalidad = null;
     if ( this.responsableMicroscopio !=null && typeof this.responsableMicroscopio === 'string' && this.responsableMicroscopio.replace(/^\s+|\s+$/g, '')=="" )
          this.responsableMicroscopio = null;
     if ( this.paquimetria !=null && typeof this.paquimetria === 'string' && this.paquimetria.replace(/^\s+|\s+$/g, '')=="" )
          this.paquimetria = null;
     if ( this.homogeneidad !=null && typeof this.homogeneidad === 'string' && this.homogeneidad.replace(/^\s+|\s+$/g, '')=="" )
          this.homogeneidad = null;
     if ( this.zonaCelular !=null && typeof this.zonaCelular === 'string' && this.zonaCelular.replace(/^\s+|\s+$/g, '')=="" )
          this.zonaCelular = null;
     if ( this.cvtamano !=null && typeof this.cvtamano === 'string' && this.cvtamano.replace(/^\s+|\s+$/g, '')=="" )
          this.cvtamano = null;
     if ( this.otraDescripcion !=null && typeof this.otraDescripcion === 'string' && this.otraDescripcion.replace(/^\s+|\s+$/g, '')=="" )
          this.otraDescripcion = null;
     if ( this.plemorfismo !=null && typeof this.plemorfismo === 'string' && this.plemorfismo.replace(/^\s+|\s+$/g, '')=="" )
          this.plemorfismo = null;
     if ( this.numeroCelular !=null && typeof this.numeroCelular === 'string' && this.numeroCelular.replace(/^\s+|\s+$/g, '')=="" )
          this.numeroCelular = null;
     if ( this.otra !=null && typeof this.otra === 'string' && this.otra.replace(/^\s+|\s+$/g, '')=="" )
          this.otra = null;
     if ( this.pliegue !=null && typeof this.pliegue === 'string' && this.pliegue.replace(/^\s+|\s+$/g, '')=="" )
          this.pliegue = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.mayor60 !=null && typeof this.mayor60 === 'string' && this.mayor60.replace(/^\s+|\s+$/g, '')=="" )
          this.mayor60 = null;
     if ( this.deposito !=null && typeof this.deposito === 'string' && this.deposito.replace(/^\s+|\s+$/g, '')=="" )
          this.deposito = null;
     if ( this.idpaquimetria !=null && typeof this.idpaquimetria === 'string' && this.idpaquimetria.replace(/^\s+|\s+$/g, '')=="" )
          this.idpaquimetria = null;
     if ( this.polimegatismo !=null && typeof this.polimegatismo === 'string' && this.polimegatismo.replace(/^\s+|\s+$/g, '')=="" )
          this.polimegatismo = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.estriaRotura !=null && typeof this.estriaRotura === 'string' && this.estriaRotura.replace(/^\s+|\s+$/g, '')=="" )
          this.estriaRotura = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idevaluacionSolicitud !=null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '')=="" )
          this.idevaluacionSolicitud = null;

  return this;
  }

}
