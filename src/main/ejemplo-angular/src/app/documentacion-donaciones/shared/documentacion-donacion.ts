/**
 *
 * @author IstmoSoft
 */
export class DocumentacionDonacion {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      fechaBaja = null ;
      certificadoMuerteEncefalico = null ;
      consentimientoInformado = null ;
      fechaRegistro = null ;
      panelViral = null ;
      revisionLampara = null ;
      fechaActualizacion = null ;
      certificadoDefunsion = null ;
      status = null ;
      usuarioUltMov = null ;
      idoficioDonacion = null ;
      idCenatraCi = null;
      idCenatraCd = null;
// atributos fin
constructor( entrada = null) {
  if (entrada !==  null){
    this.from(entrada);
  }
}

  from(source) {
      if (source.idCenatraCi)
        this.idCenatraCi= source.idCenatraCi;
      if (source.idCenatraCd)
        this.idCenatraCd= source.idCenatraCd;

      if( source.id)
           this.id = source.id;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.certificadoMuerteEncefalico)
           this.certificadoMuerteEncefalico = source.certificadoMuerteEncefalico;
      if( source.consentimientoInformado)
           this.consentimientoInformado = source.consentimientoInformado;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.panelViral)
           this.panelViral = source.panelViral;
      if( source.revisionLampara)
           this.revisionLampara = source.revisionLampara;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.certificadoDefunsion)
           this.certificadoDefunsion = source.certificadoDefunsion;
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
      if( this.certificadoMuerteEncefalico)
           return true;
      if( this.consentimientoInformado)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.panelViral)
           return true;
      if( this.revisionLampara)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.certificadoDefunsion)
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
     if ( this.certificadoMuerteEncefalico !=null && typeof this.certificadoMuerteEncefalico === 'string' && this.certificadoMuerteEncefalico.replace(/^\s+|\s+$/g, '')=="" )
          this.certificadoMuerteEncefalico = null;
     if ( this.consentimientoInformado !=null && typeof this.consentimientoInformado === 'string' && this.consentimientoInformado.replace(/^\s+|\s+$/g, '')=="" )
          this.consentimientoInformado = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.panelViral !=null && typeof this.panelViral === 'string' && this.panelViral.replace(/^\s+|\s+$/g, '')=="" )
          this.panelViral = null;
     if ( this.revisionLampara !=null && typeof this.revisionLampara === 'string' && this.revisionLampara.replace(/^\s+|\s+$/g, '')=="" )
          this.revisionLampara = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.certificadoDefunsion !=null && typeof this.certificadoDefunsion === 'string' && this.certificadoDefunsion.replace(/^\s+|\s+$/g, '')=="" )
          this.certificadoDefunsion = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idoficioDonacion !=null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idoficioDonacion = null;

  return this;
  }

}
