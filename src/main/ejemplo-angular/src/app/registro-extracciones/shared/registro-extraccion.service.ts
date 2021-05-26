import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { RegistroExtraccion } from './registro-extraccion';

@Injectable()
export class RegistroExtraccionService {

    public globalesService: GlobalesService;
    public registroExtraccion: RegistroExtraccion;
    public listaRegistroExtraccion: RegistroExtraccion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setRegistroExtraccion(registroExtraccion: RegistroExtraccion) {
        this.registroExtraccion = registroExtraccion;
    }

    getRegistroExtraccion(){
        return this.registroExtraccion;
    }

    guardarRegistroExtraccion(registroExtraccion: RegistroExtraccion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/guardarRegistroExtraccion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    actualizarRegistroExtraccion(registroExtraccion: RegistroExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/actualizarRegistroExtraccion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    eliminarRegistroExtraccion(registroExtraccion: RegistroExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/eliminarRegistroExtraccion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtracciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtracciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'registroExtraccion/getRegistroExtracciones')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaRegistroExtraccion );
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

    getRegistroExtraccionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'registroExtraccion/getRegistroExtraccionesActivos')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaRegistroExtraccion );
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
    
    lazyRegistroExtraccion(registroExtraccion: RegistroExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/lazyRegistroExtraccion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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
    getRegistroExtraccionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccionById')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccionesById')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'registroExtraccion/getRegistroExtraccionByFechaBaja')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'registroExtraccion/getRegistroExtraccionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'registroExtraccion/getRegistroExtraccionByFechaRegistro')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'registroExtraccion/getRegistroExtraccionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByTipoDonanteMultiorganico(tipoDonanteMultiorganico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoDonanteMultiorganico, 'registroExtraccion/getRegistroExtraccionByTipoDonanteMultiorganico')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByTipoDonanteMultiorganico(tipoDonanteMultiorganico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoDonanteMultiorganico, 'registroExtraccion/getRegistroExtraccionesByTipoDonanteMultiorganico')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByPanelViral(panelViral,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'registroExtraccion/getRegistroExtraccionByPanelViral')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByPanelViral(panelViral,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'registroExtraccion/getRegistroExtraccionesByPanelViral')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'registroExtraccion/getRegistroExtraccionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'registroExtraccion/getRegistroExtraccionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByTelefonoContacto(telefonoContacto,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(telefonoContacto, 'registroExtraccion/getRegistroExtraccionByTelefonoContacto')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByTelefonoContacto(telefonoContacto,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(telefonoContacto, 'registroExtraccion/getRegistroExtraccionesByTelefonoContacto')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'registroExtraccion/getRegistroExtraccionByObservacion')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'registroExtraccion/getRegistroExtraccionesByObservacion')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'registroExtraccion/getRegistroExtraccionByStatus')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'registroExtraccion/getRegistroExtraccionesByStatus')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'registroExtraccion/getRegistroExtraccionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'registroExtraccion/getRegistroExtraccionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
    getRegistroExtraccionByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'registroExtraccion/getRegistroExtraccionByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.registroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.registroExtraccion);
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

    getRegistroExtraccionesByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'registroExtraccion/getRegistroExtraccionesByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
        return this.globalesService.util.enviar(consulta, 'registroExtraccion/custom')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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

    getRegistroExtraccionesByDto( p_registroExtraccion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_registroExtraccion, 'registroExtraccion/getRegistroExtraccionesByDto')
            .subscribe(data => {
                _evento( this.listaRegistroExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaRegistroExtraccion);
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
