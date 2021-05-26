import { RecepcionSolicitudEvaluacion } from "./../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EstudioLaboratorio } from "../shared/estudio-laboratorio";

@Component({
  selector: "app-estudio-laboratorio",
  templateUrl: "./estudio-laboratorio.component.html",
  styleUrls: ["./estudio-laboratorio.component.css"]
})
export class EstudioLaboratorioComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() estudioLaboratorioBuscar;
  @Input() permisosAtributos: Array<any>;
  @Input() permisosConjuntos;
  @Input() validosEstudioLaboratorio;
  @Input() estudioLaboratorio: EstudioLaboratorio;
  @Input() estudioLaboratorioService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() estudioLaboratorioChange = new EventEmitter<EstudioLaboratorio>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovEstudioLaboratorioUsuario;
  usuarioUltMovEstudioLaboratorioUsuarioEditar: boolean = false;
  @Input() lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud;
  idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar: boolean = false;
  @Input() public enable;

  constructor() {}
  actualizarEstudioLaboratorio() {
    if (this.estudioLaboratorio.id == null) {
      this.estudioLaboratorioService.guardarEstudioLaboratorio(
        this.estudioLaboratorio,
        this.evtGuardar,
        this
      );
    } else {
      this.estudioLaboratorioService.actualizarEstudioLaboratorio(
        this.estudioLaboratorio,
        this.evtActualiza,
        this
      );
    }
  }
  evtGuardar(estudioLaboratorio, obj) {
    obj.estudioLaboratorio = estudioLaboratorio;
    obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
    obj.opcion = 0;
    obj.opcion.emit(obj.opcion);
  }
  evtActualiza(bandera, obj) {
    if (bandera) {
      obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
      obj.opcion = 0;
      obj.opcion.emit(obj.opcion);
    }
  }
  ngOnChanges(changes) {
    if (changes.opcion && changes.opcion.currentValue != null) {
      if (changes.opcion.currentValue == 1) {
        this.opcion = 1;
        this.actualizarEstudioLaboratorio();
      }
    }
  }

  ngOnInit() {}
}
