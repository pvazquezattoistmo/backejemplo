import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DesgloseCornea } from './desglose-cornea';

@Injectable()
export class DesgloseCorneaService {

    public globalesService: GlobalesService;
    public desgloseCornea: DesgloseCornea;
    public listaDesgloseCornea: DesgloseCornea[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDesgloseCornea(desgloseCornea: DesgloseCornea) {
        this.desgloseCornea = desgloseCornea;
    }

    getDesgloseCornea(){
        return this.desgloseCornea;
    }

    guardarDesgloseCornea(desgloseCornea: DesgloseCornea, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/guardarDesgloseCornea')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    actualizarDesgloseCornea(desgloseCornea: DesgloseCornea , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/actualizarDesgloseCornea')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    eliminarDesgloseCornea(desgloseCornea: DesgloseCornea , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/eliminarDesgloseCornea')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneadb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCornea')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneas( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'desgloseCornea/getDesgloseCorneas')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDesgloseCornea );
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

    getDesgloseCorneasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'desgloseCornea/getDesgloseCorneasActivos')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDesgloseCornea );
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
    
    lazyDesgloseCornea(desgloseCornea: DesgloseCornea , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/lazyDesgloseCornea')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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
    getDesgloseCorneaById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCorneaById')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCorneasById')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
    getDesgloseCorneaByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'desgloseCornea/getDesgloseCorneaByDescripcion')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'desgloseCornea/getDesgloseCorneasByDescripcion')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
    getDesgloseCorneaByIdadicional(idadicional,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idadicional, 'desgloseCornea/getDesgloseCorneaByIdadicional')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasByIdadicional(idadicional,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idadicional, 'desgloseCornea/getDesgloseCorneasByIdadicional')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
    getDesgloseCorneaByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'desgloseCornea/getDesgloseCorneaByStatus')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'desgloseCornea/getDesgloseCorneasByStatus')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
    getDesgloseCorneaByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'desgloseCornea/getDesgloseCorneaByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'desgloseCornea/getDesgloseCorneasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
    getDesgloseCorneaByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'desgloseCornea/getDesgloseCorneaByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.desgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.desgloseCornea);
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

    getDesgloseCorneasByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'desgloseCornea/getDesgloseCorneasByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
        return this.globalesService.util.enviar(consulta, 'desgloseCornea/custom')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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

    getDesgloseCorneasByDto( p_desgloseCornea, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_desgloseCornea, 'desgloseCornea/getDesgloseCorneasByDto')
            .subscribe(data => {
                _evento( this.listaDesgloseCornea  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDesgloseCornea);
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
