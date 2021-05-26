import { Usuario } from "./../../usuarios/shared/usuario";
import { Hospital } from "./../../hospitales/shared/hospital";
import { EvaluacionSolicitud } from "./../../evaluacion-solicitudes/shared/evaluacion-solicitud";
export class AlmacenEvaluacion {
  id = null;
  evaluacionSolicitud: EvaluacionSolicitud = null;
  hospitalReceptorCD: Hospital = null;
  hospitalReceptorCI: Hospital = null;
  estatusProceso = null;
  fechaActualizacion = null;
  fechaRegistro = null;
  fechaBaja = null;
  status = null;
  usuarioUltMov: Usuario = null;
  constructor(entrada = null) {
    if (entrada !== null){
      this.form(entrada);
    }
  }

  form (source){
    if (source.id == null)
        this.id=source.id;
    if (source.evaluacionSolicitud == null)
        this.evaluacionSolicitud=source.evaluacionSolicitud;
    if (source.hospitalReceptorCD == null)
        this.hospitalReceptorCD=source.hospitalReceptorCD;
    if (source.hospitalReceptorCI == null)
        this.hospitalReceptorCI=source.hospitalReceptorCI;
    if (source.estatusProceso == null)
        this.estatusProceso=source.estatusProceso;
    if (source.fechaActualizacion == null)
        this.fechaActualizacion=source.fechaActualizacion;
    if (source.fechaRegistro == null)
        this.fechaRegistro=source.fechaRegistro;
    if (source.fechaBaja == null)
        this.fechaBaja=source.fechaBaja;
    if (source.status == null)
        this.status=source.status;
    if (source.usuarioUltMov == null)
        this.usuarioUltMov=source.usuarioUltMov;

  }



}
