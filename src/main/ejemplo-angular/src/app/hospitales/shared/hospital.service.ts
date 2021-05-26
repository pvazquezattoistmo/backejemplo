import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { Hospital } from './hospital';

@Injectable()
export class HospitalService {

    public globalesService: GlobalesService;
    public hospital: Hospital;
    public listaHospital: Hospital[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setHospital(hospital: Hospital) {
        this.hospital = hospital;
    }

    getHospital(){
        return this.hospital;
    }

    guardarHospital(hospital: Hospital, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(hospital, 'hospital/guardarHospital')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarHospital(hospital: Hospital , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(hospital, 'hospital/actualizarHospital')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarHospital(hospital: Hospital , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(hospital, 'hospital/eliminarHospital')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getHospitaldb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'hospital/getHospital')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getHospitales( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'hospital/getHospitales')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaHospital );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getHospitalesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'hospital/getHospitalesActivos')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaHospital );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyHospital(hospital: Hospital , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(hospital, 'hospital/lazyHospital')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
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
    getHospitalById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'hospital/getHospitalById')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'hospital/getHospitalesById')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'hospital/getHospitalByFechaBaja')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'hospital/getHospitalesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByEstablecimiento(establecimiento,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(establecimiento, 'hospital/getHospitalByEstablecimiento')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByEstablecimiento(establecimiento,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(establecimiento, 'hospital/getHospitalesByEstablecimiento')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'hospital/getHospitalByFechaRegistro')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'hospital/getHospitalesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByRedIssste(redIssste,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(redIssste, 'hospital/getHospitalByRedIssste')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByRedIssste(redIssste,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(redIssste, 'hospital/getHospitalesByRedIssste')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByRnt(rnt,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(rnt, 'hospital/getHospitalByRnt')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByRnt(rnt,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(rnt, 'hospital/getHospitalesByRnt')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'hospital/getHospitalByFechaActualizacion')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'hospital/getHospitalesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'hospital/getHospitalByNombre')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'hospital/getHospitalesByNombre')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByDependencia(dependencia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dependencia, 'hospital/getHospitalByDependencia')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByDependencia(dependencia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dependencia, 'hospital/getHospitalesByDependencia')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'hospital/getHospitalByStatus')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'hospital/getHospitalesByStatus')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByIdentidadFederativa(identidadFederativa,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(identidadFederativa, 'hospital/getHospitalByIdentidadFederativa')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByIdentidadFederativa(identidadFederativa,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(identidadFederativa, 'hospital/getHospitalesByIdentidadFederativa')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getHospitalByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'hospital/getHospitalByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.hospital = this.globalesService.util.jsonOk(data),objeto);
                (this.hospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getHospitalesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'hospital/getHospitalesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaHospital = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'hospital/custom')
            .subscribe(data => {
                _evento( this.listaHospital  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getHospitalesByDto( p_hospital, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_hospital, 'hospital/getHospitalesByDto')
            .subscribe(data => {
                _evento( this.listaHospital  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaHospital);
            }, (err) => {
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
