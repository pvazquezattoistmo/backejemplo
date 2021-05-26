import { AlmacenEvaluacionService } from "./../../almacen-evaluaciones/shared/almacen-evaluacion.service";
import { EvaluacionSolicitudService } from "./../../evaluacion-solicitudes/shared/evaluacion-solicitud.service";
import { RecepcionSolicitudEvaluacionService } from "./../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service";
import { Component, OnInit, Input } from "@angular/core";
import { RecepcionSolicitudEvaluacion } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";
import { EvaluacionSolicitud } from "../../evaluacion-solicitudes/shared/evaluacion-solicitud";
import { AlmacenEvaluacion } from "../../almacen-evaluaciones/shared/almacen-evaluacion";
declare var $: any;

@Component({
  selector: "app-tejidos-procuracion",
  templateUrl: "./tejidos-procuracion.component.html",
  styleUrls: ["./tejidos-procuracion.component.css"],
  providers: [
    RecepcionSolicitudEvaluacionService,
    EvaluacionSolicitudService,
    AlmacenEvaluacionService
  ]
})
export class TejidosProcuracionComponent implements OnInit {
  @Input()
  public datostp: any = {
    recepcion: {
      total: 0,
      detalles: []
    },
    analisis: {
      total: 0,
      detalles: []
    },
    ingreso: {
      total: 0,
      detalles: []
    }
  };
  constructor(
    private recepcionSolicitudEvaluacionService: RecepcionSolicitudEvaluacionService,
    private evaluacionSolicitudService: EvaluacionSolicitudService,
    private almacenEvaluacionService: AlmacenEvaluacionService
  ) {}

  muestraModal1() {
    $("#myModal").modal("show");
  }
  muestraModal2() {
    $("#myModal2").modal("show");
  }
  muestraModal3() {
    $("#myModal3").modal("show");
  }
  ngOnInit() {
    this.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionesByEstatusProceso(
      2,
      this.evnRecepcion,
      this
    );
    this.evaluacionSolicitudService.getEvaluacionSolicitudesByEstatusProceso(
      3,
      this.evnEvaluacion,
      this
    );
    this.almacenEvaluacionService.getAlmacenEvaluacionesByEstatusProceso(
      this.evnAlmacen,
      this
    );
  }

  evnRecepcion(
    recepcion: RecepcionSolicitudEvaluacion[],
    obj: TejidosProcuracionComponent
  ) {
    let totalRegistro = 0;
    let totalOficio = 0;
    recepcion.forEach(element => {
      if (element.oficioDonacion) {
        totalOficio++;
      } else {
        totalRegistro++;
      }
    });
    obj.datostp.recepcion.total = recepcion.length;
    obj.datostp.recepcion.detalles.push({
      cantidad: totalRegistro,
      tarea: "Registro de Recepción"
    });
    obj.datostp.recepcion.detalles.push({
      cantidad: totalOficio,
      tarea: "Oficio de Donación"
    });
  }

  evnEvaluacion(
    evaluacion: EvaluacionSolicitud[],
    obj: TejidosProcuracionComponent
  ) {
    let totalEstudio = 0;
    let totalLampara = 0;
    let totalConteo = 0;
    evaluacion.forEach(element => {
      if (element.conteosCelular) {
        totalConteo++;
      } else if (element.lamparasHendidura) {
        totalLampara++;
      } else {
        totalEstudio++;
      }
    });

    obj.datostp.analisis.total = evaluacion.length;
    obj.datostp.analisis.detalles.push({
      cantidad: totalEstudio,
      tarea: "Estudios de Laboratorio"
    });
    obj.datostp.analisis.detalles.push({
      cantidad: totalLampara,
      tarea: "Revisión de lampara de hendidura"
    });
    obj.datostp.analisis.detalles.push({
      cantidad: totalConteo,
      tarea: "Conteo celular"
    });
  }

  evnAlmacen(almacen: AlmacenEvaluacion[], obj: TejidosProcuracionComponent) {
    let totalIngreso = 0;
    let totalSano = 0;
    let totalParche = 0;
    almacen.forEach(element => {
      if (element.estatusProceso === 4) {
        totalIngreso++;
      } else if (element.evaluacionSolicitud.conteosCelular[0].valoracionFinalEndotelio == 1) {
        totalSano++;
      } else {
        totalParche++;
      }
    });

    obj.datostp.ingreso.total = almacen.length;
    obj.datostp.ingreso.detalles.push({
      cantidad: totalIngreso,
      tarea: "Ingreso"
    });
    obj.datostp.ingreso.detalles.push({
      cantidad: totalSano,
      tarea: "Almacén Tejido Sano"
    });
    obj.datostp.ingreso.detalles.push({
      cantidad: totalParche,
      tarea: "Almacén de Parche"
    });
  }
}
