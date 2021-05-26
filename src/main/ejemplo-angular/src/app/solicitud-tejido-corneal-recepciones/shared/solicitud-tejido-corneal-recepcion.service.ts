import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCornealRecepcion } from './solicitud-tejido-corneal-recepcion';

@Injectable()
export class SolicitudTejidoCornealRecepcionService {

    public globalesService: GlobalesService;
    public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion;
    public listaSolicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion) {
        this.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
    }

    getSolicitudTejidoCornealRecepcion(){
        return this.solicitudTejidoCornealRecepcion;
    }

    guardarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(solicitudTejidoCornealRecepcion, 'solicitudTejidoCornealRecepcion/guardarSolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    actualizarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealRecepcion, 'solicitudTejidoCornealRecepcion/actualizarSolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    eliminarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealRecepcion, 'solicitudTejidoCornealRecepcion/eliminarSolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepciones')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCornealRecepcion );
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

    getSolicitudTejidoCornealRecepcionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesActivos')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCornealRecepcion );
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

    lazySolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealRecepcion, 'solicitudTejidoCornealRecepcion/lazySolicitudTejidoCornealRecepcion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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
    getSolicitudTejidoCornealRecepcionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionById')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesById')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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
    getSolicitudTejidoCornealRecepcionByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionByEstatusProceso')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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
    getSolicitudTejidoCornealRecepcionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionByStatus')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByStatus')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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
    getSolicitudTejidoCornealRecepcionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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
    getSolicitudTejidoCornealRecepcionByIdsolicitudTejidoCorneal(idsolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionByIdsolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesByIdsolicitudTejidoCorneal(idsolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByIdsolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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
        return this.globalesService.util.enviar(consulta, 'solicitudTejidoCornealRecepcion/custom')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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

    getSolicitudTejidoCornealRecepcionesByDto( p_solicitudTejidoCornealRecepcion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCornealRecepcion, 'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByDto')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCornealRecepcion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCornealRecepcion);
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

    bajaSolicitudByID(par , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(par, 'recepcionSolicitudEvaluacion/bajaSolicitudesRecepcionByID')
          .subscribe(data => {
              _evento( this.solicitudTejidoCornealRecepcion = this.globalesService.util.jsonOk(data),objeto);
              (this.solicitudTejidoCornealRecepcion);
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
