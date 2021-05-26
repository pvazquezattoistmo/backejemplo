import { AlmacenEvaluacion } from "./almacen-evaluacion";
import { GlobalesService } from "./../../shared/globales.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AlmacenEvaluacionService {
  public globalesService: GlobalesService;
  public error: boolean;
  public cad_err: string;

  constructor(globalesService: GlobalesService) {
    this.globalesService = globalesService;
    this.error = false;
    this.cad_err = "";
  }

  guardarAlmacenEvaluacion(
    almacenEvaluacion: AlmacenEvaluacion,
    _evento,
    objeto
  ) {
    this.error = false;
    return this.globalesService.util
      .enviar(almacenEvaluacion, "almacenEvaluacion/guardarAlmacenEvaluacion")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }

  lazyAlmacenEvaluacion(almacenEvaluacion: AlmacenEvaluacion, _evento, objeto) {
    this.error = false;
    return this.globalesService.util
      .enviar(almacenEvaluacion, "almacenEvaluacion/lazyAlmacenEvaluacion")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }

  actualizarAlmacenEvaluacion(
    almacenEvaluacion: AlmacenEvaluacion,
    _evento,
    objeto
  ) {
    this.error = false;
    return this.globalesService.util
      .enviar(almacenEvaluacion, "almacenEvaluacion/actualizarAlmacenEvaluacion")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }

  actualizarHopitalesAlmacenEvaluacion(
    almacenEvaluacion: AlmacenEvaluacion,
    _evento,
    objeto
  ) {
    let enviar : any ={};
    enviar.id = almacenEvaluacion.id;
    if (almacenEvaluacion.hospitalReceptorCD !== null ){
      enviar.idHospitalReceptorCD = almacenEvaluacion.hospitalReceptorCD.id;
    }
    if (almacenEvaluacion.hospitalReceptorCI != null){
      enviar.idHospitalReceptorCI = almacenEvaluacion.hospitalReceptorCI.id;
    }
    this.error = false;
    return this.globalesService.util
      .enviar(enviar, "almacenEvaluacion/actualizarHospitalesAlmacenEvaluacion")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }

  eliminarAlmacenEvaluacion(
    almacenEvaluacion,
    _evento,
    objeto
  ) {
    this.error = false;
    return this.globalesService.util
      .enviar(almacenEvaluacion, "almacenEvaluacion/eliminarAlmacenEvaluacion")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }

  getAlmacenEvaluacionesByEstatusProceso(
    _evento,
    objeto
  ) {
    this.error = false;
    return this.globalesService.util
      .enviar("", "almacenEvaluacion/getAlmacenEvaluacionesByEstatusProceso")
      .subscribe(
        data => {
          _evento(this.globalesService.util.jsonOk(data), objeto);
        },
        err => {
          ("no " + err);
          this.error = true;
          this.cad_err = err;
          setTimeout(() => {
            this.error = false;
            this.cad_err = "";
          }, 2000);
        }
      );
  }
}
