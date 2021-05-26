import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AlmacenTejido } from "../shared/almacen-tejido";

@Component({
  selector: "app-almacen-tejido",
  templateUrl: "./almacen-tejido.component.html",
  styleUrls: ["./almacen-tejido.component.css"]
})
export class AlmacenTejidoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() almacenTejidoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosAlmacenTejido;
  @Input() almacenTejido: AlmacenTejido;
  @Input() almacenTejidoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() almacenTejidoChange = new EventEmitter<AlmacenTejido>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovAlmacenTejidoUsuario;
  usuarioUltMovAlmacenTejidoUsuarioEditar: boolean = false;
  @Input() lista_idoficioDonacionAlmacenTejidoOficioDonacion;
  idoficioDonacionAlmacenTejidoOficioDonacionEditar: boolean = false;
  @Input() enable: boolean;
  listaTemperaturas: Array<{ id: number; descripcion: string }> = [
    {
      id: 2,
      descripcion: "2 ºC"
    },
    {
      id: 3,
      descripcion: "3 ºC"
    },
    {
      id: 4,
      descripcion: "4 ºC"
    },
    {
      id: 5,
      descripcion: "5 ºC"
    },
    {
      id: 6,
      descripcion: "6 ºC"
    },
    {
      id: 7,
      descripcion: "7 ºC"
    },
    {
      id: 8,
      descripcion: "8 ºC"
    }
  ];

  constructor() {}
  actualizarAlmacenTejido() {
    if (this.almacenTejido.id == null) {
      this.almacenTejidoService.guardarAlmacenTejido(
        this.almacenTejido,
        this.evtGuardar,
        this
      );
    } else {
      this.almacenTejidoService.actualizarAlmacenTejido(
        this.almacenTejido,
        this.evtActualiza,
        this
      );
    }
  }
  evtGuardar(almacenTejido, obj) {
    obj.almacenTejido = almacenTejido;
    obj.almacenTejidoChange.emit(obj.almacenTejido);
    obj.opcion = 0;
    obj.opcion.emit(obj.opcion);
  }
  evtActualiza(bandera, obj) {
    if (bandera) {
      obj.almacenTejidoChange.emit(obj.almacenTejido);
      obj.opcion = 0;
      obj.opcion.emit(obj.opcion);
    }
  }
  ngOnChanges(changes) {
    if (changes.opcion && changes.opcion.currentValue != null) {
      if (changes.opcion.currentValue == 1) {
        this.opcion = 1;
        this.actualizarAlmacenTejido();
      }
    }

    if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
      changes.permisosAtributos.currentValue.forEach(element => {
        element.permiso = 2;
        return element;
      });
    }
  }

  ngOnInit() {}
}
