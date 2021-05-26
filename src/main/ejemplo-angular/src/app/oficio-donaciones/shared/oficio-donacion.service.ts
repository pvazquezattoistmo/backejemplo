import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { OficioDonacion } from './oficio-donacion';

@Injectable()
export class OficioDonacionService {

    public globalesService: GlobalesService;
    public oficioDonacion: OficioDonacion;
    public listaOficioDonacion: OficioDonacion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setOficioDonacion(oficioDonacion: OficioDonacion) {
        this.oficioDonacion = oficioDonacion;
    }

    getOficioDonacion(){
        return this.oficioDonacion;
    }

    guardarOficioDonacion(oficioDonacion: OficioDonacion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/guardarOficioDonacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    actualizarOficioDonacion(oficioDonacion: OficioDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/actualizarOficioDonacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    eliminarOficioDonacion(oficioDonacion: OficioDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/eliminarOficioDonacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonaciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonaciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'oficioDonacion/getOficioDonaciones')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaOficioDonacion );
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

    getOficioDonacionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'oficioDonacion/getOficioDonacionesActivos')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaOficioDonacion );
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
    
    lazyOficioDonacion(oficioDonacion: OficioDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/lazyOficioDonacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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
    getOficioDonacionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacionById')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacionesById')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'oficioDonacion/getOficioDonacionByFechaBaja')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'oficioDonacion/getOficioDonacionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByIncidenciaTejido(incidenciaTejido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(incidenciaTejido, 'oficioDonacion/getOficioDonacionByIncidenciaTejido')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByIncidenciaTejido(incidenciaTejido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(incidenciaTejido, 'oficioDonacion/getOficioDonacionesByIncidenciaTejido')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByBotonCorneal(botonCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(botonCorneal, 'oficioDonacion/getOficioDonacionByBotonCorneal')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByBotonCorneal(botonCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(botonCorneal, 'oficioDonacion/getOficioDonacionesByBotonCorneal')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'oficioDonacion/getOficioDonacionByFechaRegistro')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'oficioDonacion/getOficioDonacionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'oficioDonacion/getOficioDonacionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'oficioDonacion/getOficioDonacionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByMicrobiologiaCorneal(microbiologiaCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(microbiologiaCorneal, 'oficioDonacion/getOficioDonacionByMicrobiologiaCorneal')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByMicrobiologiaCorneal(microbiologiaCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(microbiologiaCorneal, 'oficioDonacion/getOficioDonacionesByMicrobiologiaCorneal')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'oficioDonacion/getOficioDonacionByStatus')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'oficioDonacion/getOficioDonacionesByStatus')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'oficioDonacion/getOficioDonacionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'oficioDonacion/getOficioDonacionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
    getOficioDonacionByIdrecepcionSolicitudEvaluacion(idrecepcionSolicitudEvaluacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'oficioDonacion/getOficioDonacionByIdrecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.oficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.oficioDonacion);
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

    getOficioDonacionesByIdrecepcionSolicitudEvaluacion(idrecepcionSolicitudEvaluacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'oficioDonacion/getOficioDonacionesByIdrecepcionSolicitudEvaluacion')
            .subscribe(data => {
                _evento( this.listaOficioDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
        return this.globalesService.util.enviar(consulta, 'oficioDonacion/custom')
            .subscribe(data => {
                _evento( this.listaOficioDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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

    getOficioDonacionesByDto( p_oficioDonacion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_oficioDonacion, 'oficioDonacion/getOficioDonacionesByDto')
            .subscribe(data => {
                _evento( this.listaOficioDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaOficioDonacion);
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
