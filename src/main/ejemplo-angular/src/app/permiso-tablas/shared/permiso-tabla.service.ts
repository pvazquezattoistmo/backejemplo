import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { PermisoTabla } from './permiso-tabla';

@Injectable()
export class PermisoTablaService {

    public globalesService: GlobalesService;
    public permisoTabla: PermisoTabla;
    public listaPermisoTabla: PermisoTabla[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setPermisoTabla(permisoTabla: PermisoTabla) {
        this.permisoTabla = permisoTabla;
    }

    getPermisoTabla(){
        return this.permisoTabla;
    }

    guardarPermisoTabla(permisoTabla: PermisoTabla, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(permisoTabla, 'permisoTabla/guardarPermisoTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarPermisoTabla(permisoTabla: PermisoTabla , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTabla, 'permisoTabla/actualizarPermisoTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarPermisoTabla(permisoTabla: PermisoTabla , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTabla, 'permisoTabla/eliminarPermisoTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoTabladb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoTabla/getPermisoTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoTablas( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoTabla/getPermisoTablas')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoTabla );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoTablasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoTabla/getPermisoTablasActivos')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaPermisoTabla );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyPermisoTabla(permisoTabla: PermisoTabla , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTabla, 'permisoTabla/lazyPermisoTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
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
    getPermisoTablaById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoTabla/getPermisoTablaById')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoTabla/getPermisoTablasById')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoTabla/getPermisoTablaByEtiqueta')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByEtiqueta(etiqueta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoTabla/getPermisoTablasByEtiqueta')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoTabla/getPermisoTablaByPermiso')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByPermiso(permiso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoTabla/getPermisoTablasByPermiso')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoTabla/getPermisoTablaByTabla')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByTabla(tabla,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoTabla/getPermisoTablasByTabla')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoTabla/getPermisoTablaByStatus')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoTabla/getPermisoTablasByStatus')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoTabla/getPermisoTablaByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoTabla/getPermisoTablasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getPermisoTablaByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoTabla/getPermisoTablaByUsuario')
            .subscribe(data => {
                _evento( this.permisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.permisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPermisoTablasByUsuario(usuario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoTabla/getPermisoTablasByUsuario')
            .subscribe(data => {
                _evento( this.listaPermisoTabla = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
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
    addPerfiles(permisoTablaPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTablaPerfil , 'permisoTabla/addPerfiles')
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

    getPerfiles(permisoTablaPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTablaPerfil, 'permisoTabla/getPerfiles')
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
    removePerfiles(permisoTablaPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(permisoTablaPerfil, 'permisoTabla/removePerfiles')
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
        return this.globalesService.util.enviar(consulta, 'permisoTabla/custom')
            .subscribe(data => {
                _evento( this.listaPermisoTabla  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getPermisoTablasByDto( p_permisoTabla, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_permisoTabla, 'permisoTabla/getPermisoTablasByDto')
            .subscribe(data => {
                _evento( this.listaPermisoTabla  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaPermisoTabla);
            }, (err) => {
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
