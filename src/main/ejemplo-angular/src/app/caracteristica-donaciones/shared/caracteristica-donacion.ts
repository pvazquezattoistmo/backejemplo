/**
 *
 * @author IstmoSoft
 */
export class CaracteristicaDonacion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      oiciCultivo = null ;
      oici = null ;
      odcdCultivo = null ;
      odcd = null ;
      fechaRegistro = null ;
      fechaActualizacion = null ;
      tiempoIsquemia = null ;
      observacion = null ;
      status = null ;
      usuarioUltMov = null ;
      idoficioDonacion = null ;
// atributos fin
constructor( entrada = null) {
  if (entrada !==  null){
    this.from(entrada);
  }
}
  from(source) {
      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.oiciCultivo)
           this.oiciCultivo = source.oiciCultivo;
      if( source.oici)
           this.oici = source.oici;
      if( source.odcdCultivo)
           this.odcdCultivo = source.odcdCultivo;
      if( source.odcd)
           this.odcd = source.odcd;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.tiempoIsquemia)
           this.tiempoIsquemia = source.tiempoIsquemia;
      if( source.observacion)
           this.observacion = source.observacion;
      if( source.status)
           this.status = source.status;
      if( source.usuarioUltMov)
           this.usuarioUltMov = source.usuarioUltMov;
      if( source.idoficioDonacion)
           this.idoficioDonacion = source.idoficioDonacion;

  }
  isOk() {
      if( this.id)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.oiciCultivo)
           return true;
      if( this.oici)
           return true;
      if( this.odcdCultivo)
           return true;
      if( this.odcd)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.tiempoIsquemia)
           return true;
      if( this.observacion)
           return true;
      if( this.status)
           return true;
      if( this.usuarioUltMov)
           return true;
      if( this.idoficioDonacion)
           return true;

    return false;
  }
  toDto() {
     if ( this.id !=null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '')=="" )
          this.id = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.oiciCultivo !=null && typeof this.oiciCultivo === 'string' && this.oiciCultivo.replace(/^\s+|\s+$/g, '')=="" )
          this.oiciCultivo = null;
     if ( this.oici !=null && typeof this.oici === 'string' && this.oici.replace(/^\s+|\s+$/g, '')=="" )
          this.oici = null;
     if ( this.odcdCultivo !=null && typeof this.odcdCultivo === 'string' && this.odcdCultivo.replace(/^\s+|\s+$/g, '')=="" )
          this.odcdCultivo = null;
     if ( this.odcd !=null && typeof this.odcd === 'string' && this.odcd.replace(/^\s+|\s+$/g, '')=="" )
          this.odcd = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.tiempoIsquemia !=null && typeof this.tiempoIsquemia === 'string' && this.tiempoIsquemia.replace(/^\s+|\s+$/g, '')=="" )
          this.tiempoIsquemia = null;
     if ( this.observacion !=null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '')=="" )
          this.observacion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idoficioDonacion !=null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idoficioDonacion = null;

  return this;
  }

}
