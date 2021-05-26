import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCornealAlmacen } from './solicitud-tejido-corneal-almacen';

@Injectable()
export class SolicitudTejidoCornealAlmacenService {

    public globalesService: GlobalesService;
    public solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen;
    public listaSolicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
    }

    getSolicitudTejidoCornealAlmacen(){
        return this.solicitudTejidoCornealAlmacen;
    }

    guardarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/guardarSolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });

    }

    actualizarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/actualizarSolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/eliminarSolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacendb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenes')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCornealAlmacen );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesActivos')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCornealAlmacen );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    lazySolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/lazySolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
// busquedas por atributos  inicio
    getSolicitudTejidoCornealAlmacenById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenById')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesById')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaBaja')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByTejidoExistente(tejidoExistente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoExistente, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByTejidoExistente')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByTejidoExistente(tejidoExistente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoExistente, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByTejidoExistente')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaRegistro')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByEstatusProceso')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaActualizacion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByStatus')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByStatus')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion(idsolicitudTejidoCornealRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCornealRecepcion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByIdsolicitudTejidoCornealRecepcion(idsolicitudTejidoCornealRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCornealRecepcion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByIdsolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
// busquedas por atributos  fin


    custom( consulta, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'solicitudTejidoCornealAlmacen/custom')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesByDto( p_solicitudTejidoCornealAlmacen, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByDto')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealAlmacen  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealAlmacen);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getSolicitudTejidoCornealAlmacenesTablero( _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar('', 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesTablero')
          .subscribe(data => {
              _evento( this.listaSolicitudTejidoCornealAlmacen  = this.globalesService.util.jsonOk(data),objeto);
              (this.listaSolicitudTejidoCornealAlmacen);
          }, (err) => {
              ("no " + err);
              this.error = true;
              this.cad_err = err;
              setTimeout(() => {
                  this.error = false;
                  this.cad_err = "";
              }, 2000);
          });
  }

}
