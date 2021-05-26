import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorProcurador } from '../shared/doctor-procurador';

@Component({
  selector: 'app-doctor-procurador-conjunto',
  templateUrl: './doctor-procurador-conjunto.component.html',
  styleUrls: ['./doctor-procurador-conjunto.component.css'],
})
export class DoctorProcuradorConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() doctorProcuradorBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDoctorProcurador;
  @Input() ocultarConjuntosDoctorProcurador;
  @Input() doctorProcuradorService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDoctorProcuradorUsuario;
  usuarioUltMovDoctorProcuradorUsuarioEditar : boolean = false;
  @Input() lista_idhospitalDoctorProcuradorHospital;
  idhospitalDoctorProcuradorHospitalEditar : boolean = false;

  public listaDoctorProcuradorN: DoctorProcurador[] = [];
  @Input() public listaDoctorProcurador: DoctorProcurador[] = [];
  @Output() public listaDoctorProcuradorChange = new EventEmitter<DoctorProcurador[]>();
  @Input() public doctorProcuradorN: DoctorProcurador = new DoctorProcurador();
  @Output() public doctorProcuradorNChange = new EventEmitter<DoctorProcurador>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(doctorProcurador, tipo) {
        this.idSeleccionado = tipo + "-" + doctorProcurador.id;
        this.doctorProcuradorN = doctorProcurador;
    }

    ngOnInit() {
        this.doctorProcuradorN.id = 0;
        this.listaDoctorProcuradorN.push(Object.assign({}, this.doctorProcuradorN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DoctorProcurador();
        pg.id = this.listaDoctorProcuradorN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDoctorProcuradorN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let doctorProcurador of this.listaDoctorProcurador) {
            this.doctorProcuradorService.actualizarDoctorProcurador(doctorProcurador, this.evtActualiza, this);
        }
        for (let doctorProcurador of this.listaDoctorProcuradorN) {
            doctorProcurador.id = null;
            this.doctorProcuradorService.guardarDoctorProcurador(doctorProcurador, this.evtGuardar, this);
        }
    }
    evtGuardar(doctorProcurador, obj) {
        obj.agregados++;
        obj.listaDoctorProcurador.push(doctorProcurador);
        if (obj.agregados >= obj.listaDoctorProcuradorN.length) {
            obj.doctorProcuradorN = new DoctorProcurador();
            obj.listaDoctorProcuradorN = [];
            obj.doctorProcuradorN.id = 0;
            obj.idSeleccionado = "N-" + obj.doctorProcuradorN.id;
            obj.listaDoctorProcuradorN.push(Object.assign({}, obj.doctorProcuradorN));
            obj.listaDoctorProcuradorChange.emit(obj.listaDoctorProcurador);
        }
        if (obj.agregados >= obj.listaDoctorProcuradorN.length && 
            obj.actualizados >= obj.listaDoctorProcurador.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDoctorProcuradorN.length && 
            obj.actualizados >= obj.listaDoctorProcurador.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }            
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizaTodo() ;
            }
        }
    }
  
}
