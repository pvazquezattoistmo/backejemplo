import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorProcurador } from '../shared/doctor-procurador';

@Component({
  selector: 'app-doctor-procurador',
  templateUrl: './doctor-procurador.component.html',
  styleUrls: ['./doctor-procurador.component.css'],
})
export class DoctorProcuradorComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() doctorProcuradorBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDoctorProcurador;
  @Input() doctorProcurador:DoctorProcurador;
  @Input() doctorProcuradorService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() doctorProcuradorChange = new EventEmitter<DoctorProcurador>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDoctorProcuradorUsuario;
  usuarioUltMovDoctorProcuradorUsuarioEditar : boolean = false;
  @Input() lista_idhospitalDoctorProcuradorHospital;
  idhospitalDoctorProcuradorHospitalEditar : boolean = false;

  
  constructor( ) { }
    actualizarDoctorProcurador() {
        if (this.doctorProcurador.id == null) {
            this.doctorProcuradorService.guardarDoctorProcurador(this.doctorProcurador, this.evtGuardar, this);
        } else {
            this.doctorProcuradorService.actualizarDoctorProcurador(this.doctorProcurador, this.evtActualiza, this);
        }
    }
    evtGuardar(doctorProcurador, obj) {
        obj.doctorProcurador = doctorProcurador;
        obj.doctorProcuradorChange.emit(obj.doctorProcurador);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.doctorProcuradorChange.emit(obj.doctorProcurador);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDoctorProcurador() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
