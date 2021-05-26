import { SolicitudTejidoCornealAlmacenService } from "./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service";
import { SolicitudTejidoCornealService } from "./../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service";
import { Component, OnInit, Input } from "@angular/core";
import { SolicitudTejidoCorneal } from "../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal";
import { SolicitudTejidoCornealAlmacen } from "../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen";
import { group } from "@angular/animations";
declare var $: any;
@Component({
  selector: "app-tejidos-solicitados",
  templateUrl: "./tejidos-solicitados.component.html",
  styleUrls: ["./tejidos-solicitados.component.css"],
  providers: [
    SolicitudTejidoCornealService,
    SolicitudTejidoCornealAlmacenService
  ]
})
export class TejidosSolicitadosComponent implements OnInit {
  @Input()
  public datosts: any = {
    solicitud: {
      total: 0,
      detalles: []
    },
    exito: {
      total: 0,
      detalles: []
    },
    negados: {
      total: 0,
      detalles: []
    }
  };

  constructor(
    private solicitudTejidoCornealService: SolicitudTejidoCornealService,
    private solicitudTejidoCornealAlmacenService: SolicitudTejidoCornealAlmacenService
  ) {}
  muestraModal1() {
    $("#modal").modal("show");
  }
  muestraModal2() {
    $("#modal2").modal("show");
  }
  muestraModal3() {
    $("modal3").modal("show");
  }
  ngOnInit() {
    this.solicitudTejidoCornealService.getSolicitudTejidoCornealesActivos(
      this.evnSolicitud,
      this
    );
    this.solicitudTejidoCornealAlmacenService.getSolicitudTejidoCornealAlmacenesTablero(
      this.evnAlmacen,
      this
    );
  }

  evnSolicitud(
    solicitud: SolicitudTejidoCorneal[],
    obj: TejidosSolicitadosComponent
  ) {
    obj.datosts.solicitud.total = solicitud.length;
  }

  evnAlmacen(
    almacen: SolicitudTejidoCornealAlmacen[],
    obj: TejidosSolicitadosComponent
  ) {
    let hospitalesExito: SolicitudTejidoCornealAlmacen[] = [];
    let hospitalesNegado: SolicitudTejidoCornealAlmacen[] = [];
    let totalExito = 0;
    let totalNegado = 0;
    (almacen);
    almacen.forEach(element => {
      if (element.estatusProceso === 5) {
        if (element.tejidoExistente === 1) {
          totalExito++;
          hospitalesExito.push(element);
        } else {
          totalNegado++;
          hospitalesNegado.push(element);
        }
      }
    });
    obj.datosts.exito.total = totalExito;
    obj.datosts.negados.total = totalNegado;

    obj.group(hospitalesExito).forEach(element => {
      obj.datosts.exito.detalles.push({ tipoHospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.redIssste ,cantidad: element.list.length, sirnt: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.rnt, hospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.nombre });
    });

    obj.group(hospitalesNegado).forEach(element => {
      obj.datosts.negados.detalles.push({ cantidad: element.list.length, sirnt: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.rnt, hospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.nombre });
    });
  }

  group(almacen: SolicitudTejidoCornealAlmacen[]): any[]{
    const events: any[] = [];
    const groupedElements: any = {};
    almacen.forEach((element) => {
      let group = element.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.id;
      if (!(group in groupedElements)) {
        groupedElements[group] = [];
      }
      groupedElements[group].push(element);
    });

    for (let prop in groupedElements) {
      if (groupedElements.hasOwnProperty(prop)) {
        events.push({
          key: prop,
          list: groupedElements[prop]
        });
      }
    }
    return events;
  }
}
