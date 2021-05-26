/**
 *
 * @author IstmoSoft
 */
export class GestionMuestraMicrobiologia {

// ids inicio
      id = null ;
// ids fin

// atributos inicio
      envio = null ;
      horaInicioRevision = null ;
      fechaBaja = null ;
      fechaInicioRevision = null ;
      fechaRegistro = null ;
      almacenHora = null ;
      fechaActualizacion = null ;
      comentario = null ;
      almacenMuestra = null ;
      revision = null ;
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
      if( source.envio)
           this.envio = source.envio;
      if( source.horaInicioRevision)
           this.horaInicioRevision = source.horaInicioRevision;
      if( source.fechaBaja)
           this.fechaBaja = source.fechaBaja;
      if( source.fechaInicioRevision)
           this.fechaInicioRevision = source.fechaInicioRevision;
      if( source.fechaRegistro)
           this.fechaRegistro = source.fechaRegistro;
      if( source.almacenHora)
           this.almacenHora = source.almacenHora;
      if( source.fechaActualizacion)
           this.fechaActualizacion = source.fechaActualizacion;
      if( source.comentario)
           this.comentario = source.comentario;
      if( source.almacenMuestra)
           this.almacenMuestra = source.almacenMuestra;
      if( source.revision)
           this.revision = source.revision;
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
      if( this.envio)
           return true;
      if( this.horaInicioRevision)
           return true;
      if( this.fechaBaja)
           return true;
      if( this.fechaInicioRevision)
           return true;
      if( this.fechaRegistro)
           return true;
      if( this.almacenHora)
           return true;
      if( this.fechaActualizacion)
           return true;
      if( this.comentario)
           return true;
      if( this.almacenMuestra)
           return true;
      if( this.revision)
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
     if ( this.envio !=null && typeof this.envio === 'string' && this.envio.replace(/^\s+|\s+$/g, '')=="" )
          this.envio = null;
     if ( this.horaInicioRevision !=null && typeof this.horaInicioRevision === 'string' && this.horaInicioRevision.replace(/^\s+|\s+$/g, '')=="" )
          this.horaInicioRevision = null;
     if ( this.fechaBaja !=null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaBaja = null;
     if ( this.fechaInicioRevision !=null && typeof this.fechaInicioRevision === 'string' && this.fechaInicioRevision.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaInicioRevision = null;
     if ( this.fechaRegistro !=null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaRegistro = null;
     if ( this.almacenHora !=null && typeof this.almacenHora === 'string' && this.almacenHora.replace(/^\s+|\s+$/g, '')=="" )
          this.almacenHora = null;
     if ( this.fechaActualizacion !=null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '')=="" )
          this.fechaActualizacion = null;
     if ( this.comentario !=null && typeof this.comentario === 'string' && this.comentario.replace(/^\s+|\s+$/g, '')=="" )
          this.comentario = null;
     if ( this.almacenMuestra !=null && typeof this.almacenMuestra === 'string' && this.almacenMuestra.replace(/^\s+|\s+$/g, '')=="" )
          this.almacenMuestra = null;
     if ( this.revision !=null && typeof this.revision === 'string' && this.revision.replace(/^\s+|\s+$/g, '')=="" )
          this.revision = null;
     if ( this.status !=null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '')=="" )
          this.status = null;
     if ( this.usuarioUltMov !=null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '')=="" )
          this.usuarioUltMov = null;
     if ( this.idoficioDonacion !=null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '')=="" )
          this.idoficioDonacion = null;

  return this;
  }

}
