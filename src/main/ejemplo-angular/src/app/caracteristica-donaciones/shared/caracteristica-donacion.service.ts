import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { CaracteristicaDonacion } from './caracteristica-donacion';

@Injectable()
export class CaracteristicaDonacionService {

    public globalesService: GlobalesService;
    public caracteristicaDonacion: CaracteristicaDonacion;
    public listaCaracteristicaDonacion: CaracteristicaDonacion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setCaracteristicaDonacion(caracteristicaDonacion: CaracteristicaDonacion) {
        this.caracteristicaDonacion = caracteristicaDonacion;
    }

    getCaracteristicaDonacion(){
        return this.caracteristicaDonacion;
    }

    guardarCaracteristicaDonacion(caracteristicaDonacion: CaracteristicaDonacion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/guardarCaracteristicaDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarCaracteristicaDonacion(caracteristicaDonacion: CaracteristicaDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/actualizarCaracteristicaDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarCaracteristicaDonacion(caracteristicaDonacion: CaracteristicaDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/eliminarCaracteristicaDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCaracteristicaDonaciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCaracteristicaDonaciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'caracteristicaDonacion/getCaracteristicaDonaciones')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCaracteristicaDonacion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCaracteristicaDonacionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'caracteristicaDonacion/getCaracteristicaDonacionesActivos')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCaracteristicaDonacion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyCaracteristicaDonacion(caracteristicaDonacion: CaracteristicaDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/lazyCaracteristicaDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
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
    getCaracteristicaDonacionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacionById')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacionesById')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaBaja')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByOiciCultivo(oiciCultivo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oiciCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionByOiciCultivo')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByOiciCultivo(oiciCultivo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oiciCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionesByOiciCultivo')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByOici(oici,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oici, 'caracteristicaDonacion/getCaracteristicaDonacionByOici')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByOici(oici,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(oici, 'caracteristicaDonacion/getCaracteristicaDonacionesByOici')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByOdcdCultivo(odcdCultivo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(odcdCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionByOdcdCultivo')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByOdcdCultivo(odcdCultivo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(odcdCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionesByOdcdCultivo')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByOdcd(odcd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(odcd, 'caracteristicaDonacion/getCaracteristicaDonacionByOdcd')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByOdcd(odcd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(odcd, 'caracteristicaDonacion/getCaracteristicaDonacionesByOdcd')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaRegistro')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByTiempoIsquemia(tiempoIsquemia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tiempoIsquemia, 'caracteristicaDonacion/getCaracteristicaDonacionByTiempoIsquemia')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByTiempoIsquemia(tiempoIsquemia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tiempoIsquemia, 'caracteristicaDonacion/getCaracteristicaDonacionesByTiempoIsquemia')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'caracteristicaDonacion/getCaracteristicaDonacionByObservacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByObservacion')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'caracteristicaDonacion/getCaracteristicaDonacionByStatus')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'caracteristicaDonacion/getCaracteristicaDonacionesByStatus')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'caracteristicaDonacion/getCaracteristicaDonacionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'caracteristicaDonacion/getCaracteristicaDonacionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCaracteristicaDonacionByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.caracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.caracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCaracteristicaDonacionesByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'caracteristicaDonacion/custom')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCaracteristicaDonacionesByDto( p_caracteristicaDonacion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_caracteristicaDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByDto')
            .subscribe(data => {
                _evento( this.listaCaracteristicaDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCaracteristicaDonacion);
            }, (err) => {
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
