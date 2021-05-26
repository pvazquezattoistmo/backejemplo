import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { PermisoConjunto } from './permiso-conjunto';

@Injectable()
export class PermisoConjuntoService {

    public globalesService: GlobalesService;
    public permisoConjunto: PermisoConjunto;
    public listaPermisoConjunto: PermisoConjunto[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setPermisoConjunto(permisoConjunto: PermisoConjunto) {
        this.permisoConjunto = permisoConjunto;
    }

    getPermisoConjunto(){
        return this.permisoConjunto;
    }

    guardarPermisoConjunto(permisoConjunto: PermisoConjunto, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/guardarPermisoConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarPermisoConjunto(permisoConjunto: PermisoConjunto , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/actualizarPermisoConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarPermisoConjunto(permisoConjunto: PermisoConjunto , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/eliminarPermisoConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoConjuntodb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoConjuntos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoConjunto/getPermisoConjuntos')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoConjunto );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoConjuntosActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoConjunto/getPermisoConjuntosActivos')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoConjunto );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyPermisoConjunto(permisoConjunto: PermisoConjunto , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/lazyPermisoConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
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
    getPermisoConjuntoById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjuntoById')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjuntosById')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoConjunto/getPermisoConjuntoByEtiqueta')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoConjunto/getPermisoConjuntosByEtiqueta')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoConjunto/getPermisoConjuntoByPermiso')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoConjunto/getPermisoConjuntosByPermiso')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoConjunto/getPermisoConjuntoByTabla')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoConjunto/getPermisoConjuntosByTabla')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByConjunto(conjunto,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conjunto, 'permisoConjunto/getPermisoConjuntoByConjunto')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByConjunto(conjunto,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conjunto, 'permisoConjunto/getPermisoConjuntosByConjunto')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoConjunto/getPermisoConjuntoByStatus')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoConjunto/getPermisoConjuntosByStatus')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoConjunto/getPermisoConjuntoByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoConjunto/getPermisoConjuntosByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoConjuntoByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoConjunto/getPermisoConjuntoByUsuario')
            .subscribe(data => {
                _evento( this.permisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoConjuntosByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoConjunto/getPermisoConjuntosByUsuario')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
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
//   add - remove Perfil
    addPerfiles(permisoConjuntoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil , 'permisoConjunto/addPerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('addPerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfiles(permisoConjuntoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil, 'permisoConjunto/getPerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removePerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   
    removePerfiles(permisoConjuntoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil, 'permisoConjunto/removePerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removePerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   


    custom( consulta, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'permisoConjunto/custom')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoConjuntosByDto( p_permisoConjunto, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_permisoConjunto, 'permisoConjunto/getPermisoConjuntosByDto')
            .subscribe(data => {
                _evento( this.listaPermisoConjunto  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoConjunto);
            }, (err) => {
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
