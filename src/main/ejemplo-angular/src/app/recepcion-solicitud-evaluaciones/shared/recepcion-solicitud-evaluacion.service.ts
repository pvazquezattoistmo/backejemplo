import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { RecepcionSolicitudEvaluacion } from './recepcion-solicitud-evaluacion';

@Injectable()
export class RecepcionSolicitudEvaluacionService {

    public globalesService: GlobalesService;
    public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
    public listaRecepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion) {
        this.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    }

    getRecepcionSolicitudEvaluacion(){
        return this.recepcionSolicitudEvaluacion;
    }

    guardarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/guardarRecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    actualizarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/actualizarRecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    eliminarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/eliminarRecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluaciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluaciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluaciones')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaRecepcionSolicitudEvaluacion );
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

    getRecepcionSolicitudEvaluacionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesActivos')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaRecepcionSolicitudEvaluacion );
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

    lazyRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/lazyRecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionById')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesById')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByHoraRecepcion(horaRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaRecepcion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByHoraRecepcion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByHoraRecepcion(horaRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaRecepcion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByHoraRecepcion')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByRegistroTejido(registroTejido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(registroTejido, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByRegistroTejido')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByRegistroTejido(registroTejido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(registroTejido, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByRegistroTejido')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByFechaBaja')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByTejidoCorneaDerecha(tejidoCorneaDerecha,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoCorneaDerecha, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByTejidoCorneaDerecha')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByTejidoCorneaDerecha(tejidoCorneaDerecha,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoCorneaDerecha, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByTejidoCorneaDerecha')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByFechaRegistro')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByEstatusProceso')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByExpedienteFisico(expedienteFisico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(expedienteFisico, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByExpedienteFisico')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByExpedienteFisico(expedienteFisico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(expedienteFisico, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByExpedienteFisico')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByIdbtcCi(idbtcCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idbtcCi, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByIdbtcCi')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByIdbtcCi(idbtcCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idbtcCi, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByIdbtcCi')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByTejidoCorneaIzquierda(tejidoCorneaIzquierda,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoCorneaIzquierda, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByTejidoCorneaIzquierda')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByTejidoCorneaIzquierda(tejidoCorneaIzquierda,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tejidoCorneaIzquierda, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByTejidoCorneaIzquierda')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByIdbtcCd(idbtcCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idbtcCd, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByIdbtcCd')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByIdbtcCd(idbtcCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idbtcCd, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByIdbtcCd')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByFechaRecepcion(fechaRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRecepcion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByFechaRecepcion')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByFechaRecepcion(fechaRecepcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRecepcion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFechaRecepcion')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByStatus')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByStatus')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
    getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.recepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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
        return this.globalesService.util.enviar(consulta, 'recepcionSolicitudEvaluacion/custom')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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

    getRecepcionSolicitudEvaluacionesByDto( p_recepcionSolicitudEvaluacion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByDto')
            .subscribe(data => {
                _evento( this.listaRecepcionSolicitudEvaluacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRecepcionSolicitudEvaluacion);
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

    generarIdsBTC(recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(recepcionSolicitudEvaluacion, 'recepcionSolicitudEvaluacion/generarIdsBTC')
          .subscribe(data => {
              _evento( this.recepcionSolicitudEvaluacion = this.globalesService.util.jsonOk(data),objeto);
              (this.recepcionSolicitudEvaluacion);
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
