import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hospital } from '../shared/hospital';

@Component({
  selector: 'app-hospital-conjunto',
  templateUrl: './hospital-conjunto.component.html',
  styleUrls: ['./hospital-conjunto.component.css'],
})
export class HospitalConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() hospitalBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosHospital;
  @Input() ocultarConjuntosHospital;
  @Input() hospitalService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_identidadFederativaHospitalEntidadFederativa;
  identidadFederativaHospitalEntidadFederativaEditar : boolean = false;
  @Input() lista_usuarioUltMovHospitalUsuario;
  usuarioUltMovHospitalUsuarioEditar : boolean = false;

  public listaHospitalN: Hospital[] = [];
  @Input() public listaHospital: Hospital[] = [];
  @Output() public listaHospitalChange = new EventEmitter<Hospital[]>();
  @Input() public hospitalN: Hospital = new Hospital();
  @Output() public hospitalNChange = new EventEmitter<Hospital>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(hospital, tipo) {
        this.idSeleccionado = tipo + "-" + hospital.id;
        this.hospitalN = hospital;
    }

    ngOnInit() {
        this.hospitalN.id = 0;
        this.listaHospitalN.push(Object.assign({}, this.hospitalN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new Hospital();
        pg.id = this.listaHospitalN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaHospitalN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let hospital of this.listaHospital) {
            this.hospitalService.actualizarHospital(hospital, this.evtActualiza, this);
        }
        for (let hospital of this.listaHospitalN) {
            hospital.id = null;
            this.hospitalService.guardarHospital(hospital, this.evtGuardar, this);
        }
    }
    evtGuardar(hospital, obj) {
        obj.agregados++;
        obj.listaHospital.push(hospital);
        if (obj.agregados >= obj.listaHospitalN.length) {
            obj.hospitalN = new Hospital();
            obj.listaHospitalN = [];
            obj.hospitalN.id = 0;
            obj.idSeleccionado = "N-" + obj.hospitalN.id;
            obj.listaHospitalN.push(Object.assign({}, obj.hospitalN));
            obj.listaHospitalChange.emit(obj.listaHospital);
        }
        if (obj.agregados >= obj.listaHospitalN.length && 
            obj.actualizados >= obj.listaHospital.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaHospitalN.length && 
            obj.actualizados >= obj.listaHospital.length  ) {
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
