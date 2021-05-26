import { HospitalService } from './../../hospitales/shared/hospital.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RegistroExtraccion } from "../shared/registro-extraccion";
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { EquipoExtraccion } from "../../equipo-extracciones/shared/equipo-extraccion";
import { DatoCorneaExtraccion } from "../../dato-cornea-extracciones/shared/dato-cornea-extraccion";

@Component({
  selector: "app-registro-extraccion",
  templateUrl: "./registro-extraccion.component.html",
  styleUrls: ["./registro-extraccion.component.css"]
})
export class RegistroExtraccionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() registroExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosRegistroExtraccion;
  @Input() registroExtraccion: RegistroExtraccion;
  @Input() registroExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() registroExtraccionChange = new EventEmitter<RegistroExtraccion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovRegistroExtraccionUsuario;
  usuarioUltMovRegistroExtraccionUsuarioEditar: boolean = false;
  @Input()
  lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar: boolean = false;
  @Input() public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal;
  @Input() listaEquipoExtractor: EquipoExtraccion[];
  @Input() listaCoordinadorExtraccion: EquipoExtraccion[];
  @Input() datoCorneaExtraccionCI: DatoCorneaExtraccion;
  @Input() datoCorneaExtraccionCD: DatoCorneaExtraccion;
  @Input() esRequerido: Boolean;
  @Input() public enableIzquierda: boolean;
  @Input() public enableDerecha: boolean;
  lista_idhospitalSolicitudTejidoCornealHospital;


  constructor(public hospital_service: HospitalService) {
    this.hospital_service.getHospitalesActivos(
      this.evtGetIdhospitalSolicitudTejidoCornealHospital,
      this
    );

  }
  evtGetIdhospitalSolicitudTejidoCornealHospital(
    lista_idhospitalSolicitudTejidoCornealHospital,
    obj
  ) {
    obj.lista_idhospitalSolicitudTejidoCornealHospital = lista_idhospitalSolicitudTejidoCornealHospital;
    obj.actualizar_IdhospitalSolicitudTejidoCornealHospital();
  }
  actualizar_IdhospitalSolicitudTejidoCornealHospital() {
    if (this.solicitudEvaluacionCorneal.idhospital)
      for (let eleme of this.lista_idhospitalSolicitudTejidoCornealHospital)
        if (eleme.id == this.solicitudEvaluacionCorneal.idhospital.id) {
          this.solicitudEvaluacionCorneal.idhospital = eleme;
          break;
        }
  }

  actualizarRegistroExtraccion() {
    if (this.registroExtraccion.id == null) {
      this.registroExtraccionService.guardarRegistroExtraccion(
        this.registroExtraccion,
        this.evtGuardar,
        this
      );
    } else {
      this.registroExtraccionService.actualizarRegistroExtraccion(
        this.registroExtraccion,
        this.evtActualiza,
        this
      );
    }
  }
  evtGuardar(registroExtraccion, obj) {
    obj.registroExtraccion = registroExtraccion;
    obj.registroExtraccionChange.emit(obj.registroExtraccion);
    obj.opcion = 0;
    obj.opcion.emit(obj.opcion);
  }
  evtActualiza(bandera, obj) {
    if (bandera) {
      obj.registroExtraccionChange.emit(obj.registroExtraccion);
      obj.opcion = 0;
      obj.opcion.emit(obj.opcion);
    }
  }
  ngOnChanges(changes) {
    if (changes.opcion && changes.opcion.currentValue != null) {
      if (changes.opcion.currentValue == 1) {
        this.opcion = 1;
        this.actualizarRegistroExtraccion();
      }
    }
    if (changes.solicitudEvaluacionCorneal || ( changes.solicitudEvaluacionCorneal && changes.solicitudEvaluacionCorneal.idhospital)){
      this.hospital_service.getHospitalesActivos(
        this.evtGetIdhospitalSolicitudTejidoCornealHospital,
        this
      );
    }

    if (changes.permisosAtributos) {
      this.permisosAtributos.forEach(element => {
        if (element.id === 16) {
          element.permiso = 2;
        }
        return element;
      });
    }
  }

  ngOnInit() {}
}
