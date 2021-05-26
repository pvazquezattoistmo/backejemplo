import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { PermisoAtributo } from './permiso-atributo';

@Injectable()
export class PermisoAtributoService {

    public globalesService: GlobalesService;
    public permisoAtributo: PermisoAtributo;
    public listaPermisoAtributo: PermisoAtributo[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setPermisoAtributo(permisoAtributo: PermisoAtributo) {
        this.permisoAtributo = permisoAtributo;
    }

    getPermisoAtributo(){
        return this.permisoAtributo;
    }

    guardarPermisoAtributo(permisoAtributo: PermisoAtributo, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(permisoAtributo, 'permisoAtributo/guardarPermisoAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarPermisoAtributo(permisoAtributo: PermisoAtributo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributo, 'permisoAtributo/actualizarPermisoAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarPermisoAtributo(permisoAtributo: PermisoAtributo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributo, 'permisoAtributo/eliminarPermisoAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoAtributodb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoAtributo/getPermisoAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoAtributos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoAtributo/getPermisoAtributos')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoAtributo );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoAtributosActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoAtributo/getPermisoAtributosActivos')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoAtributo );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyPermisoAtributo(permisoAtributo: PermisoAtributo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributo, 'permisoAtributo/lazyPermisoAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
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
    getPermisoAtributoById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoAtributo/getPermisoAtributoById')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoAtributo/getPermisoAtributosById')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoAtributo/getPermisoAtributoByEtiqueta')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoAtributo/getPermisoAtributosByEtiqueta')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByValidacion(validacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(validacion, 'permisoAtributo/getPermisoAtributoByValidacion')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByValidacion(validacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(validacion, 'permisoAtributo/getPermisoAtributosByValidacion')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoAtributo/getPermisoAtributoByPermiso')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoAtributo/getPermisoAtributosByPermiso')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoAtributo/getPermisoAtributoByTabla')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoAtributo/getPermisoAtributosByTabla')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByAtributo(atributo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(atributo, 'permisoAtributo/getPermisoAtributoByAtributo')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByAtributo(atributo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(atributo, 'permisoAtributo/getPermisoAtributosByAtributo')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByMensaje(mensaje,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(mensaje, 'permisoAtributo/getPermisoAtributoByMensaje')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByMensaje(mensaje,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(mensaje, 'permisoAtributo/getPermisoAtributosByMensaje')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoAtributo/getPermisoAtributoByStatus')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoAtributo/getPermisoAtributosByStatus')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoAtributo/getPermisoAtributoByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoAtributo/getPermisoAtributosByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoAtributoByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoAtributo/getPermisoAtributoByUsuario')
            .subscribe(data => {
                _evento( this.permisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoAtributosByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoAtributo/getPermisoAtributosByUsuario')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
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
    addPerfiles(permisoAtributoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributoPerfil , 'permisoAtributo/addPerfiles')
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

    getPerfiles(permisoAtributoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributoPerfil, 'permisoAtributo/getPerfiles')
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
    removePerfiles(permisoAtributoPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoAtributoPerfil, 'permisoAtributo/removePerfiles')
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
        return this.globalesService.util.enviar(consulta, 'permisoAtributo/custom')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoAtributosByDto( p_permisoAtributo, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_permisoAtributo, 'permisoAtributo/getPermisoAtributosByDto')
            .subscribe(data => {
                _evento( this.listaPermisoAtributo  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoAtributo);
            }, (err) => {
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
