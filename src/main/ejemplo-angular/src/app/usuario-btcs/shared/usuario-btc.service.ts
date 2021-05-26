import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { UsuarioBtc } from './usuario-btc';

@Injectable()
export class UsuarioBtcService {

    public globalesService: GlobalesService;
    public usuarioBtc: UsuarioBtc;
    public listaUsuarioBtc: UsuarioBtc[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setUsuarioBtc(usuarioBtc: UsuarioBtc) {
        this.usuarioBtc = usuarioBtc;
    }

    getUsuarioBtc(){
        return this.usuarioBtc;
    }

    guardarUsuarioBtc(usuarioBtc: UsuarioBtc, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(usuarioBtc, 'usuarioBtc/guardarUsuarioBtc')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarUsuarioBtc(usuarioBtc: UsuarioBtc , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioBtc, 'usuarioBtc/actualizarUsuarioBtc')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarUsuarioBtc(usuarioBtc: UsuarioBtc , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioBtc, 'usuarioBtc/eliminarUsuarioBtc')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getUsuarioBtcdb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'usuarioBtc/getUsuarioBtc')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getUsuarioBtcs( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'usuarioBtc/getUsuarioBtcs')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaUsuarioBtc );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getUsuarioBtcsActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'usuarioBtc/getUsuarioBtcsActivos')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaUsuarioBtc );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyUsuarioBtc(usuarioBtc: UsuarioBtc , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioBtc, 'usuarioBtc/lazyUsuarioBtc')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
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
    getUsuarioBtcById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'usuarioBtc/getUsuarioBtcById')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'usuarioBtc/getUsuarioBtcsById')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'usuarioBtc/getUsuarioBtcByFechaBaja')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'usuarioBtc/getUsuarioBtcsByFechaBaja')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'usuarioBtc/getUsuarioBtcByPrimerApellido')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'usuarioBtc/getUsuarioBtcsByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'usuarioBtc/getUsuarioBtcByFechaRegistro')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'usuarioBtc/getUsuarioBtcsByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'usuarioBtc/getUsuarioBtcBySegundoApellido')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'usuarioBtc/getUsuarioBtcsBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'usuarioBtc/getUsuarioBtcByFechaActualizacion')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'usuarioBtc/getUsuarioBtcsByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'usuarioBtc/getUsuarioBtcByNombre')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'usuarioBtc/getUsuarioBtcsByNombre')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'usuarioBtc/getUsuarioBtcByCorreoElectronico')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'usuarioBtc/getUsuarioBtcsByCorreoElectronico')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'usuarioBtc/getUsuarioBtcByStatus')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'usuarioBtc/getUsuarioBtcsByStatus')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'usuarioBtc/getUsuarioBtcByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'usuarioBtc/getUsuarioBtcsByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByIdperfilRedIssste(idperfilRedIssste,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idperfilRedIssste, 'usuarioBtc/getUsuarioBtcByIdperfilRedIssste')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByIdperfilRedIssste(idperfilRedIssste,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idperfilRedIssste, 'usuarioBtc/getUsuarioBtcsByIdperfilRedIssste')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByIdcargo(idcargo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'usuarioBtc/getUsuarioBtcByIdcargo')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByIdcargo(idcargo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'usuarioBtc/getUsuarioBtcsByIdcargo')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getUsuarioBtcByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'usuarioBtc/getUsuarioBtcByIdhospital')
            .subscribe(data => {
                _evento( this.usuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.usuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getUsuarioBtcsByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'usuarioBtc/getUsuarioBtcsByIdhospital')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'usuarioBtc/custom')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getUsuarioBtcsByDto( p_usuarioBtc, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_usuarioBtc, 'usuarioBtc/getUsuarioBtcsByDto')
            .subscribe(data => {
                _evento( this.listaUsuarioBtc  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaUsuarioBtc);
            }, (err) => {
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
