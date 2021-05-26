import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { CoordinadorExtraccion } from './coordinador-extraccion';

@Injectable()
export class CoordinadorExtraccionService {

    public globalesService: GlobalesService;
    public coordinadorExtraccion: CoordinadorExtraccion;
    public listaCoordinadorExtraccion: CoordinadorExtraccion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setCoordinadorExtraccion(coordinadorExtraccion: CoordinadorExtraccion) {
        this.coordinadorExtraccion = coordinadorExtraccion;
    }

    getCoordinadorExtraccion(){
        return this.coordinadorExtraccion;
    }

    guardarCoordinadorExtraccion(coordinadorExtraccion: CoordinadorExtraccion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/guardarCoordinadorExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    actualizarCoordinadorExtraccion(coordinadorExtraccion: CoordinadorExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/actualizarCoordinadorExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    eliminarCoordinadorExtraccion(coordinadorExtraccion: CoordinadorExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/eliminarCoordinadorExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtracciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtracciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'coordinadorExtraccion/getCoordinadorExtracciones')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCoordinadorExtraccion );
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

    getCoordinadorExtraccionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'coordinadorExtraccion/getCoordinadorExtraccionesActivos')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCoordinadorExtraccion );
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
    
    lazyCoordinadorExtraccion(coordinadorExtraccion: CoordinadorExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/lazyCoordinadorExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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
    getCoordinadorExtraccionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccionById')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccionesById')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaBaja')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'coordinadorExtraccion/getCoordinadorExtraccionByPrimerApellido')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'coordinadorExtraccion/getCoordinadorExtraccionesByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaRegistro')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'coordinadorExtraccion/getCoordinadorExtraccionBySegundoApellido')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'coordinadorExtraccion/getCoordinadorExtraccionesBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'coordinadorExtraccion/getCoordinadorExtraccionByNombre')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'coordinadorExtraccion/getCoordinadorExtraccionesByNombre')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'coordinadorExtraccion/getCoordinadorExtraccionByStatus')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'coordinadorExtraccion/getCoordinadorExtraccionesByStatus')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'coordinadorExtraccion/getCoordinadorExtraccionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'coordinadorExtraccion/getCoordinadorExtraccionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
    getCoordinadorExtraccionByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.coordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.coordinadorExtraccion);
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

    getCoordinadorExtraccionesByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionesByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
        return this.globalesService.util.enviar(consulta, 'coordinadorExtraccion/custom')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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

    getCoordinadorExtraccionesByDto( p_coordinadorExtraccion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_coordinadorExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionesByDto')
            .subscribe(data => {
                _evento( this.listaCoordinadorExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCoordinadorExtraccion);
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
