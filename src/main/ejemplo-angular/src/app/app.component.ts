import { SolicitudTejidoCornealRecepcionService } from './solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { GlobalesService } from "./shared/globales.service";
import { RecepcionSolicitudEvaluacionService } from "./recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service";
import { RecepcionSolicitudEvaluacion } from "./recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";
import { SolicitudTejidoCornealRecepcion } from './solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion';
declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [RecepcionSolicitudEvaluacionService, SolicitudTejidoCornealRecepcionService]
})
export class AppComponent implements OnInit {
  title = "app";
  notificaciones: Array<{tipoSolicitud: string, fecha: Date, hora: Date, corneaIzquierda: boolean, corneaDerecha: boolean}> = [];
  dialogNotificacionesOpened = false;
  constructor(
    public globalesService: GlobalesService,
    public router: Router,
    private recepcionSolicitudEvaluacionService: RecepcionSolicitudEvaluacionService,
    private solicitudTejidoCornealRecepcionService: SolicitudTejidoCornealRecepcionService
  ) {}
  public curDate = new Date();

  ngOnInit(): void {
    this.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionesByEstatusProceso(2, this.evtSolicitudesEvaluacion, this);
    this.solicitudTejidoCornealRecepcionService.getSolicitudTejidoCornealRecepcionesByEstatusProceso(2, this.evtSolicitudesTejido, this);
    this.dialogNotificacionesOpened = false;
    $( window ).scroll(function() {
      let scroll =$('html').scrollTop();
      if (scroll!==0 ){
        $( "#menuGeneral" ).css( "margin-top", scroll+"px" );
      }
    });
  }

  cerrarSesion() {
    bootbox.confirm({
      message: "¿Deseas cerrar la sesión?",
      buttons: {
        confirm: {
          label: "Si",
          className: "btn-success"
        },
        cancel: {
          label: "No",
          className: "btn-danger"
        }
      },
      callback: function(result) {
        if (result) {
          this.globalesService.cerrarSesion();
          this.router.navigateByUrl("/login");
          bootbox.hideAll();
        }
      }.bind(this)
    });
  }

  evtSolicitudesEvaluacion(sol: RecepcionSolicitudEvaluacion[], obj) {
    (sol);
    sol.forEach(element => {
      let enableIzquierda = false;
      let enableDerecha = false;
      element.idsolicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(element => {
        if (element.tipo === 1) {
          if (element.fechaInicio || element.fechaFin || element.horaInicio || element.horaFin) {
            enableIzquierda = true;
          }
        }
        if (element.tipo === 2) {
          if (element.fechaInicio || element.fechaFin || element.horaInicio || element.horaFin) {
            enableDerecha = true;
          }
        }
      });
      obj.notificaciones.push({tipoSolicitud: element.idsolicitudEvaluacionCorneal.folioSolicitud, fecha: new Date(element.fechaRegistro), hora: new Date(element.fechaRegistro), corneaIzquierda: enableIzquierda, corneaDerecha: enableDerecha});
    });
  }

  evtSolicitudesTejido(sol:SolicitudTejidoCornealRecepcion[], obj) {
    (sol);
    sol.forEach(element => {
      obj.notificaciones.push({tipoSolicitud: element.idsolicitudTejidoCorneal.folioSolicitudTejidoCorneal, fecha: new Date(element.idsolicitudTejidoCorneal.fechaRegistro), hora: new Date(element.idsolicitudTejidoCorneal.fechaRegistro), corneaIzquierda: element.idsolicitudTejidoCorneal.corneaSolicitada == 1, corneaDerecha: element.idsolicitudTejidoCorneal.corneaSolicitada != 1});
    });
  }

  openDialogNotificaciones() {
    this.dialogNotificacionesOpened = true;
  }

  closeDialogNotificaciones() {
    this.dialogNotificacionesOpened = false;
  }
  // get scrollCuerpo(){
  //   return scroll
  // }
}
