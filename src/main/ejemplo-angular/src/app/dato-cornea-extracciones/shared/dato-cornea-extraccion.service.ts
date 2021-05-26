import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DatoCorneaExtraccion } from './dato-cornea-extraccion';

@Injectable()
export class DatoCorneaExtraccionService {

    public globalesService: GlobalesService;
    public datoCorneaExtraccion: DatoCorneaExtraccion;
    public listaDatoCorneaExtraccion: DatoCorneaExtraccion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDatoCorneaExtraccion(datoCorneaExtraccion: DatoCorneaExtraccion) {
        this.datoCorneaExtraccion = datoCorneaExtraccion;
    }

    getDatoCorneaExtraccion(){
        return this.datoCorneaExtraccion;
    }

    guardarDatoCorneaExtraccion(datoCorneaExtraccion: DatoCorneaExtraccion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(datoCorneaExtraccion, 'datoCorneaExtraccion/guardarDatoCorneaExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    actualizarDatoCorneaExtraccion(datoCorneaExtraccion: DatoCorneaExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoCorneaExtraccion, 'datoCorneaExtraccion/actualizarDatoCorneaExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    eliminarDatoCorneaExtraccion(datoCorneaExtraccion: DatoCorneaExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoCorneaExtraccion, 'datoCorneaExtraccion/eliminarDatoCorneaExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtracciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoCorneaExtraccion/getDatoCorneaExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtracciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'datoCorneaExtraccion/getDatoCorneaExtracciones')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDatoCorneaExtraccion );
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

    getDatoCorneaExtraccionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'datoCorneaExtraccion/getDatoCorneaExtraccionesActivos')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDatoCorneaExtraccion );
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
    
    lazyDatoCorneaExtraccion(datoCorneaExtraccion: DatoCorneaExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoCorneaExtraccion, 'datoCorneaExtraccion/lazyDatoCorneaExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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
    getDatoCorneaExtraccionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoCorneaExtraccion/getDatoCorneaExtraccionById')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoCorneaExtraccion/getDatoCorneaExtraccionesById')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoCorneaExtraccion/getDatoCorneaExtraccionByFechaBaja')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByVobo(vobo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(vobo, 'datoCorneaExtraccion/getDatoCorneaExtraccionByVobo')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByVobo(vobo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(vobo, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByVobo')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoCorneaExtraccion/getDatoCorneaExtraccionByFechaRegistro')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByCultivoOptisol(cultivoOptisol,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cultivoOptisol, 'datoCorneaExtraccion/getDatoCorneaExtraccionByCultivoOptisol')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByCultivoOptisol(cultivoOptisol,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cultivoOptisol, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByCultivoOptisol')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoCorneaExtraccion/getDatoCorneaExtraccionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByCultivoPrevioProcuracion(cultivoPrevioProcuracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cultivoPrevioProcuracion, 'datoCorneaExtraccion/getDatoCorneaExtraccionByCultivoPrevioProcuracion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByCultivoPrevioProcuracion(cultivoPrevioProcuracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cultivoPrevioProcuracion, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByCultivoPrevioProcuracion')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'datoCorneaExtraccion/getDatoCorneaExtraccionByTipoCornea')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByTipoCornea')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoCorneaExtraccion/getDatoCorneaExtraccionByStatus')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByStatus')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoCorneaExtraccion/getDatoCorneaExtraccionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
    getDatoCorneaExtraccionByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'datoCorneaExtraccion/getDatoCorneaExtraccionByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.datoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.datoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
        return this.globalesService.util.enviar(consulta, 'datoCorneaExtraccion/custom')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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

    getDatoCorneaExtraccionesByDto( p_datoCorneaExtraccion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_datoCorneaExtraccion, 'datoCorneaExtraccion/getDatoCorneaExtraccionesByDto')
            .subscribe(data => {
                _evento( this.listaDatoCorneaExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoCorneaExtraccion);
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
