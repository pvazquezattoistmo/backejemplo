import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { Perfil } from './perfil';

@Injectable()
export class PerfilService {

    public globalesService: GlobalesService;
    public perfil: Perfil;
    public listaPerfil: Perfil[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setPerfil(perfil: Perfil) {
        this.perfil = perfil;
    }

    getPerfil(){
        return this.perfil;
    }

    guardarPerfil(perfil: Perfil, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(perfil, 'perfil/guardarPerfil')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarPerfil(perfil: Perfil , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfil, 'perfil/actualizarPerfil')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarPerfil(perfil: Perfil , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfil, 'perfil/eliminarPerfil')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfildb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfil/getPerfil')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfiles( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'perfil/getPerfiles')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPerfil );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'perfil/getPerfilesActivos')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPerfil );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyPerfil(perfil: Perfil , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(perfil, 'perfil/lazyPerfil')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
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
    getPerfilById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfil/getPerfilById')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'perfil/getPerfilesById')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'perfil/getPerfilByDescripcion')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'perfil/getPerfilesByDescripcion')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByRuta(ruta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ruta, 'perfil/getPerfilByRuta')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByRuta(ruta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ruta, 'perfil/getPerfilesByRuta')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'perfil/getPerfilByNombre')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'perfil/getPerfilesByNombre')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'perfil/getPerfilByStatus')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'perfil/getPerfilesByStatus')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'perfil/getPerfilByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'perfil/getPerfilesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPerfilByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'perfil/getPerfilByUsuario')
            .subscribe(data => {
                _evento( this.perfil = this.globalesService.util.jsonOk(data),objeto);
                (this.perfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfilesByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'perfil/getPerfilesByUsuario')
            .subscribe(data => {
                _evento( this.listaPerfil = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'perfil/custom')
            .subscribe(data => {
                _evento( this.listaPerfil  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPerfilesByDto( p_perfil, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_perfil, 'perfil/getPerfilesByDto')
            .subscribe(data => {
                _evento( this.listaPerfil  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPerfil);
            }, (err) => {
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
