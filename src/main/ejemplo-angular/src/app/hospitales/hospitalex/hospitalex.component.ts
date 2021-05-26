import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hospital } from '../shared/hospital';

@Component({
  selector: 'app-hospitalex',
  templateUrl: './hospitalex.component.html',
  styleUrls: ['./hospitalex.component.css'],
})
export class HospitalexComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() hospitalBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosHospital;
  @Input() hospital:Hospital;
  @Input() hospitalService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() hospitalChange = new EventEmitter<Hospital>();
  @Input() ocultarConjuntos;
  @Input() lista_identidadFederativaHospitalEntidadFederativa;
  identidadFederativaHospitalEntidadFederativaEditar : boolean = false;
  @Input() lista_usuarioUltMovHospitalUsuario;
  usuarioUltMovHospitalUsuarioEditar : boolean = false;


  constructor( ) { }
    actualizarHospital() {
        if (this.hospital.id == null) {
            this.hospitalService.guardarHospital(this.hospital, this.evtGuardar, this);
        } else {
            this.hospitalService.actualizarHospital(this.hospital, this.evtActualiza, this);
        }
    }
    evtGuardar(hospital, obj) {
        obj.hospital = hospital;
        obj.hospitalChange.emit(obj.hospital);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.hospitalChange.emit(obj.hospital);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarHospital() ;
            }
        }
    }


  ngOnInit() {
  }


}
