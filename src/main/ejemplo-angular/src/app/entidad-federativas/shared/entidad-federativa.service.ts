import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { EntidadFederativa } from './entidad-federativa';

@Injectable()
export class EntidadFederativaService {

    public globalesService: GlobalesService;
    public entidadFederativa: EntidadFederativa;
    public listaEntidadFederativa: EntidadFederativa[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setEntidadFederativa(entidadFederativa: EntidadFederativa) {
        this.entidadFederativa = entidadFederativa;
    }

    getEntidadFederativa(){
        return this.entidadFederativa;
    }

    guardarEntidadFederativa(entidadFederativa: EntidadFederativa, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entidadFederativa, 'entidadFederativa/guardarEntidadFederativa')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    actualizarEntidadFederativa(entidadFederativa: EntidadFederativa , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(entidadFederativa, 'entidadFederativa/actualizarEntidadFederativa')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    eliminarEntidadFederativa(entidadFederativa: EntidadFederativa , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(entidadFederativa, 'entidadFederativa/eliminarEntidadFederativa')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativadb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'entidadFederativa/getEntidadFederativa')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativas( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'entidadFederativa/getEntidadFederativas')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEntidadFederativa );
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

    getEntidadFederativasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'entidadFederativa/getEntidadFederativasActivos')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEntidadFederativa );
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
    
    lazyEntidadFederativa(entidadFederativa: EntidadFederativa , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(entidadFederativa, 'entidadFederativa/lazyEntidadFederativa')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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
    getEntidadFederativaById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'entidadFederativa/getEntidadFederativaById')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'entidadFederativa/getEntidadFederativasById')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'entidadFederativa/getEntidadFederativaByFechaBaja')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'entidadFederativa/getEntidadFederativasByFechaBaja')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByAbreviatura(abreviatura,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(abreviatura, 'entidadFederativa/getEntidadFederativaByAbreviatura')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByAbreviatura(abreviatura,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(abreviatura, 'entidadFederativa/getEntidadFederativasByAbreviatura')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'entidadFederativa/getEntidadFederativaByFechaRegistro')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'entidadFederativa/getEntidadFederativasByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'entidadFederativa/getEntidadFederativaByFechaActualizacion')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'entidadFederativa/getEntidadFederativasByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'entidadFederativa/getEntidadFederativaByNombre')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'entidadFederativa/getEntidadFederativasByNombre')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'entidadFederativa/getEntidadFederativaByStatus')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'entidadFederativa/getEntidadFederativasByStatus')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
    getEntidadFederativaByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'entidadFederativa/getEntidadFederativaByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.entidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.entidadFederativa);
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

    getEntidadFederativasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'entidadFederativa/getEntidadFederativasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
        return this.globalesService.util.enviar(consulta, 'entidadFederativa/custom')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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

    getEntidadFederativasByDto( p_entidadFederativa, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_entidadFederativa, 'entidadFederativa/getEntidadFederativasByDto')
            .subscribe(data => {
                _evento( this.listaEntidadFederativa  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEntidadFederativa);
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
