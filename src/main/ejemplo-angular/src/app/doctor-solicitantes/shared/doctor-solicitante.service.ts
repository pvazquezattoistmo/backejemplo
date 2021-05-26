import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DoctorSolicitante } from './doctor-solicitante';

@Injectable()
export class DoctorSolicitanteService {

    public globalesService: GlobalesService;
    public doctorSolicitante: DoctorSolicitante;
    public listaDoctorSolicitante: DoctorSolicitante[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDoctorSolicitante(doctorSolicitante: DoctorSolicitante) {
        this.doctorSolicitante = doctorSolicitante;
    }

    getDoctorSolicitante(){
        return this.doctorSolicitante;
    }

    guardarDoctorSolicitante(doctorSolicitante: DoctorSolicitante, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/guardarDoctorSolicitante')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarDoctorSolicitante(doctorSolicitante: DoctorSolicitante , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/actualizarDoctorSolicitante')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarDoctorSolicitante(doctorSolicitante: DoctorSolicitante , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/eliminarDoctorSolicitante')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorSolicitantedb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitante')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorSolicitantes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorSolicitante/getDoctorSolicitantes')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDoctorSolicitante );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorSolicitantesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorSolicitante/getDoctorSolicitantesActivos')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDoctorSolicitante );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyDoctorSolicitante(doctorSolicitante: DoctorSolicitante , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/lazyDoctorSolicitante')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
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
    getDoctorSolicitanteById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitanteById')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitantesById')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorSolicitante/getDoctorSolicitanteByFechaBaja')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorSolicitante/getDoctorSolicitantesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorSolicitante/getDoctorSolicitanteByIdhospital')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorSolicitante/getDoctorSolicitantesByIdhospital')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorSolicitante/getDoctorSolicitanteByPrimerApellido')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorSolicitante/getDoctorSolicitantesByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorSolicitante/getDoctorSolicitanteByFechaRegistro')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorSolicitante/getDoctorSolicitantesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorSolicitante/getDoctorSolicitanteBySegundoApellido')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorSolicitante/getDoctorSolicitantesBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorSolicitante/getDoctorSolicitanteByFechaActualizacion')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorSolicitante/getDoctorSolicitantesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByTelefono(telefono,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(telefono, 'doctorSolicitante/getDoctorSolicitanteByTelefono')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByTelefono(telefono,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(telefono, 'doctorSolicitante/getDoctorSolicitantesByTelefono')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorSolicitante/getDoctorSolicitanteByNombre')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorSolicitante/getDoctorSolicitantesByNombre')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorSolicitante/getDoctorSolicitanteByCorreoElectronico')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByCorreoElectronico(correoElectronico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorSolicitante/getDoctorSolicitantesByCorreoElectronico')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorSolicitante/getDoctorSolicitanteByStatus')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorSolicitante/getDoctorSolicitantesByStatus')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorSolicitante/getDoctorSolicitanteByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorSolicitante/getDoctorSolicitantesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDoctorSolicitanteByIdcargo(idcargo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'doctorSolicitante/getDoctorSolicitanteByIdcargo')
            .subscribe(data => {
                _evento( this.doctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.doctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDoctorSolicitantesByIdcargo(idcargo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'doctorSolicitante/getDoctorSolicitantesByIdcargo')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'doctorSolicitante/custom')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDoctorSolicitantesByDto( p_doctorSolicitante, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_doctorSolicitante, 'doctorSolicitante/getDoctorSolicitantesByDto')
            .subscribe(data => {
                _evento( this.listaDoctorSolicitante  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDoctorSolicitante);
            }, (err) => {
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
