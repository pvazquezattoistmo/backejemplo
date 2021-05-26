import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { PerfilRedIssste } from './perfil-red-issste';

@Injectable()
export class PerfilRedIsssteService {

    public globalesService: GlobalesService;
    public perfilRedIssste: PerfilRedIssste;
    public listaPerfilRedIssste: PerfilRedIssste[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setPerfilRedIssste(perfilRedIssste: PerfilRedIssste) {
        this.perfilRedIssste = perfilRedIssste;
    }

    getPerfilRedIssste(){
        return this.perfilRedIssste;
    }

    guardarPerfilRedIssste(perfilRedIssste: PerfilRedIssste, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(perfilRedIssste, 'perfilRedIssste/guardarPerfilRedIssste')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarPerfilRedIssste(perfilRedIssste: PerfilRedIssste , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfilRedIssste, 'perfilRedIssste/actualizarPerfilRedIssste')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarPerfilRedIssste(perfilRedIssste: PerfilRedIssste , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfilRedIssste, 'perfilRedIssste/eliminarPerfilRedIssste')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilRedIssstedb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfilRedIssste/getPerfilRedIssste')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilRedIssstes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'perfilRedIssste/getPerfilRedIssstes')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPerfilRedIssste );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilRedIssstesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'perfilRedIssste/getPerfilRedIssstesActivos')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPerfilRedIssste );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyPerfilRedIssste(perfilRedIssste: PerfilRedIssste , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfilRedIssste, 'perfilRedIssste/lazyPerfilRedIssste')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
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
    getPerfilRedIsssteById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfilRedIssste/getPerfilRedIsssteById')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfilRedIssste/getPerfilRedIssstesById')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'perfilRedIssste/getPerfilRedIsssteByFechaBaja')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'perfilRedIssste/getPerfilRedIssstesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'perfilRedIssste/getPerfilRedIsssteByFechaRegistro')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'perfilRedIssste/getPerfilRedIssstesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByTipoPerfil(tipoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoPerfil, 'perfilRedIssste/getPerfilRedIsssteByTipoPerfil')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByTipoPerfil(tipoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoPerfil, 'perfilRedIssste/getPerfilRedIssstesByTipoPerfil')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'perfilRedIssste/getPerfilRedIsssteByFechaActualizacion')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'perfilRedIssste/getPerfilRedIssstesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'perfilRedIssste/getPerfilRedIsssteByNombre')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'perfilRedIssste/getPerfilRedIssstesByNombre')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'perfilRedIssste/getPerfilRedIsssteByStatus')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'perfilRedIssste/getPerfilRedIssstesByStatus')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilRedIsssteByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'perfilRedIssste/getPerfilRedIsssteByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.perfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.perfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilRedIssstesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'perfilRedIssste/getPerfilRedIssstesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'perfilRedIssste/custom')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilRedIssstesByDto( p_perfilRedIssste, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_perfilRedIssste, 'perfilRedIssste/getPerfilRedIssstesByDto')
            .subscribe(data => {
                _evento( this.listaPerfilRedIssste  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfilRedIssste);
            }, (err) => {
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
