import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DoctorProcurador } from './doctor-procurador';

@Injectable()
export class DoctorProcuradorService {

    public globalesService: GlobalesService;
    public doctorProcurador: DoctorProcurador;
    public listaDoctorProcurador: DoctorProcurador[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDoctorProcurador(doctorProcurador: DoctorProcurador) {
        this.doctorProcurador = doctorProcurador;
    }

    getDoctorProcurador(){
        return this.doctorProcurador;
    }

    guardarDoctorProcurador(doctorProcurador: DoctorProcurador, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/guardarDoctorProcurador')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarDoctorProcurador(doctorProcurador: DoctorProcurador , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/actualizarDoctorProcurador')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarDoctorProcurador(doctorProcurador: DoctorProcurador , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/eliminarDoctorProcurador')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorProcuradordb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcurador')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorProcuradores( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorProcurador/getDoctorProcuradores')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDoctorProcurador );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorProcuradoresActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorProcurador/getDoctorProcuradoresActivos')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDoctorProcurador );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyDoctorProcurador(doctorProcurador: DoctorProcurador , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/lazyDoctorProcurador')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
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
    getDoctorProcuradorById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcuradorById')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcuradoresById')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorProcurador/getDoctorProcuradorByFechaBaja')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorProcurador/getDoctorProcuradoresByFechaBaja')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorProcurador/getDoctorProcuradorByPrimerApellido')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorProcurador/getDoctorProcuradoresByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorProcurador/getDoctorProcuradorByFechaRegistro')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorProcurador/getDoctorProcuradoresByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorProcurador/getDoctorProcuradorBySegundoApellido')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorProcurador/getDoctorProcuradoresBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorProcurador/getDoctorProcuradorByFechaActualizacion')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorProcurador/getDoctorProcuradoresByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorProcurador/getDoctorProcuradorByNombre')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorProcurador/getDoctorProcuradoresByNombre')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorProcurador/getDoctorProcuradorByCorreoElectronico')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorProcurador/getDoctorProcuradoresByCorreoElectronico')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorProcurador/getDoctorProcuradorByStatus')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorProcurador/getDoctorProcuradoresByStatus')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorProcurador/getDoctorProcuradorByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorProcurador/getDoctorProcuradoresByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorProcuradorByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorProcurador/getDoctorProcuradorByIdhospital')
            .subscribe(data => {
                _evento( this.doctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorProcuradoresByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorProcurador/getDoctorProcuradoresByIdhospital')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'doctorProcurador/custom')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorProcuradoresByDto( p_doctorProcurador, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_doctorProcurador, 'doctorProcurador/getDoctorProcuradoresByDto')
            .subscribe(data => {
                _evento( this.listaDoctorProcurador  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorProcurador);
            }, (err) => {
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
