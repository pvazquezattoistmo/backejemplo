import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { EvaluacionSolicitud } from './evaluacion-solicitud';

@Injectable()
export class EvaluacionSolicitudService {

    public globalesService: GlobalesService;
    public evaluacionSolicitud: EvaluacionSolicitud;
    public listaEvaluacionSolicitud: EvaluacionSolicitud[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setEvaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud) {
        this.evaluacionSolicitud = evaluacionSolicitud;
    }

    getEvaluacionSolicitud(){
        return this.evaluacionSolicitud;
    }

    guardarEvaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/guardarEvaluacionSolicitud')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    actualizarEvaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/actualizarEvaluacionSolicitud')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    eliminarEvaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/eliminarEvaluacionSolicitud')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicituddb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitud')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicitudes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'evaluacionSolicitud/getEvaluacionSolicitudes')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEvaluacionSolicitud );
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

    getEvaluacionSolicitudesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'evaluacionSolicitud/getEvaluacionSolicitudesActivos')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEvaluacionSolicitud );
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

    lazyEvaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/lazyEvaluacionSolicitud')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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
    getEvaluacionSolicitudById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitudById')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicitudesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitudesById')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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
    getEvaluacionSolicitudByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'evaluacionSolicitud/getEvaluacionSolicitudByStatus')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicitudesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'evaluacionSolicitud/getEvaluacionSolicitudesByStatus')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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
    getEvaluacionSolicitudByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'evaluacionSolicitud/getEvaluacionSolicitudByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicitudesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'evaluacionSolicitud/getEvaluacionSolicitudesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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
    getEvaluacionSolicitudByIdrecepcionSolicitudEvaluacion(idrecepcionSolicitudEvaluacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'evaluacionSolicitud/getEvaluacionSolicitudByIdrecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.evaluacionSolicitud);
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

    getEvaluacionSolicitudesByIdrecepcionSolicitudEvaluacion(idrecepcionSolicitudEvaluacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'evaluacionSolicitud/getEvaluacionSolicitudesByIdrecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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
        return this.globalesService.util.enviar(consulta, 'evaluacionSolicitud/custom')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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

    getEvaluacionSolicitudesByDto( p_evaluacionSolicitud, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_evaluacionSolicitud, 'evaluacionSolicitud/getEvaluacionSolicitudesByDto')
            .subscribe(data => {
                _evento( this.listaEvaluacionSolicitud  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEvaluacionSolicitud);
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

    getTramitesIngresados( _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar("", 'evaluacionSolicitud/getTramitesIngresados')
          .subscribe(data => {
              _evento( this.listaEvaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
              ( this.listaEvaluacionSolicitud );
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

  bajaEvaluacionSolicitudByID(par , _evento,objeto){
    this.error = false;
    return this.globalesService.util.enviar(par, 'evaluacionSolicitud/bajaEvaluacionSolicitudByID')
        .subscribe(data => {
            _evento( this.evaluacionSolicitud = this.globalesService.util.jsonOk(data),objeto);
            (this.evaluacionSolicitud);
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

  getEvaluacionSolicitudesByEstatusProceso(estatusProceso,_evento,objeto){
    this.error = false;
    return this.globalesService.util.enviar(estatusProceso, 'evaluacionSolicitud/getEvaluacionSolicitudesByEstatusProceso')
        .subscribe(data => {
            _evento( this.globalesService.util.jsonOk(data),objeto);
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
