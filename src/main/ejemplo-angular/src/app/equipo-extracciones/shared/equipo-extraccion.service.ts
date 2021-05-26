import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { EquipoExtraccion } from './equipo-extraccion';

@Injectable()
export class EquipoExtraccionService {

    public globalesService: GlobalesService;
    public equipoExtraccion: EquipoExtraccion;
    public listaEquipoExtraccion: EquipoExtraccion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setEquipoExtraccion(equipoExtraccion: EquipoExtraccion) {
        this.equipoExtraccion = equipoExtraccion;
    }

    getEquipoExtraccion(){
        return this.equipoExtraccion;
    }

    guardarEquipoExtraccion(equipoExtraccion: EquipoExtraccion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/guardarEquipoExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarEquipoExtraccion(equipoExtraccion: EquipoExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/actualizarEquipoExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarEquipoExtraccion(equipoExtraccion: EquipoExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/eliminarEquipoExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getEquipoExtracciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getEquipoExtracciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'equipoExtraccion/getEquipoExtracciones')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEquipoExtraccion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getEquipoExtraccionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'equipoExtraccion/getEquipoExtraccionesActivos')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEquipoExtraccion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyEquipoExtraccion(equipoExtraccion: EquipoExtraccion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/lazyEquipoExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
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
    getEquipoExtraccionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccionById')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccionesById')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'equipoExtraccion/getEquipoExtraccionByFechaBaja')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'equipoExtraccion/getEquipoExtraccionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'equipoExtraccion/getEquipoExtraccionByPrimerApellido')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'equipoExtraccion/getEquipoExtraccionesByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'equipoExtraccion/getEquipoExtraccionByFechaRegistro')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'equipoExtraccion/getEquipoExtraccionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'equipoExtraccion/getEquipoExtraccionBySegundoApellido')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'equipoExtraccion/getEquipoExtraccionesBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'equipoExtraccion/getEquipoExtraccionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'equipoExtraccion/getEquipoExtraccionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'equipoExtraccion/getEquipoExtraccionByNombre')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'equipoExtraccion/getEquipoExtraccionesByNombre')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'equipoExtraccion/getEquipoExtraccionByStatus')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'equipoExtraccion/getEquipoExtraccionesByStatus')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'equipoExtraccion/getEquipoExtraccionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'equipoExtraccion/getEquipoExtraccionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getEquipoExtraccionByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'equipoExtraccion/getEquipoExtraccionByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.equipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.equipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getEquipoExtraccionesByIdregistroExtraccion(idregistroExtraccion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'equipoExtraccion/getEquipoExtraccionesByIdregistroExtraccion')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'equipoExtraccion/custom')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getEquipoExtraccionesByDto( p_equipoExtraccion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_equipoExtraccion, 'equipoExtraccion/getEquipoExtraccionesByDto')
            .subscribe(data => {
                _evento( this.listaEquipoExtraccion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEquipoExtraccion);
            }, (err) => {
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
