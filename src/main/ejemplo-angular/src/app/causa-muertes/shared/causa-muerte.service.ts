import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { CausaMuerte } from './causa-muerte';

@Injectable()
export class CausaMuerteService {

    public globalesService: GlobalesService;
    public causaMuerte: CausaMuerte;
    public listaCausaMuerte: CausaMuerte[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setCausaMuerte(causaMuerte: CausaMuerte) {
        this.causaMuerte = causaMuerte;
    }

    getCausaMuerte(){
        return this.causaMuerte;
    }

    guardarCausaMuerte(causaMuerte: CausaMuerte, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(causaMuerte, 'causaMuerte/guardarCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarCausaMuerte(causaMuerte: CausaMuerte , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/actualizarCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarCausaMuerte(causaMuerte: CausaMuerte , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/eliminarCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCausaMuertedb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCausaMuertes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'causaMuerte/getCausaMuertes')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCausaMuerte );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCausaMuertesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'causaMuerte/getCausaMuertesActivos')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCausaMuerte );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyCausaMuerte(causaMuerte: CausaMuerte , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/lazyCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
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
    getCausaMuerteById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuerteById')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuertesById')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'causaMuerte/getCausaMuerteByDescripcion')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'causaMuerte/getCausaMuertesByDescripcion')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'causaMuerte/getCausaMuerteByFechaBaja')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'causaMuerte/getCausaMuertesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'causaMuerte/getCausaMuerteByFechaRegistro')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'causaMuerte/getCausaMuertesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'causaMuerte/getCausaMuerteByFechaActualizacion')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'causaMuerte/getCausaMuertesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByTipoCausaMuerte(tipoCausaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCausaMuerte, 'causaMuerte/getCausaMuerteByTipoCausaMuerte')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByTipoCausaMuerte(tipoCausaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCausaMuerte, 'causaMuerte/getCausaMuertesByTipoCausaMuerte')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'causaMuerte/getCausaMuerteByStatus')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'causaMuerte/getCausaMuertesByStatus')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCausaMuerteByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'causaMuerte/getCausaMuerteByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.causaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.causaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCausaMuertesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'causaMuerte/getCausaMuertesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaCausaMuerte = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'causaMuerte/custom')
            .subscribe(data => {
                _evento( this.listaCausaMuerte  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCausaMuertesByDto( p_causaMuerte, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_causaMuerte, 'causaMuerte/getCausaMuertesByDto')
            .subscribe(data => {
                _evento( this.listaCausaMuerte  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCausaMuerte);
            }, (err) => {
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
