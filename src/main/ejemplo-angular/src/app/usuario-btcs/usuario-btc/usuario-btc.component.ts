import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioBtc } from '../shared/usuario-btc';

@Component({
  selector: 'app-usuario-btc',
  templateUrl: './usuario-btc.component.html',
  styleUrls: ['./usuario-btc.component.css'],
})
export class UsuarioBtcComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() usuarioBtcBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosUsuarioBtc;
  @Input() usuarioBtc:UsuarioBtc;
  @Input() usuarioBtcService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() usuarioBtcChange = new EventEmitter<UsuarioBtc>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovUsuarioBtcUsuario;
  usuarioUltMovUsuarioBtcUsuarioEditar : boolean = false;
  @Input() lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste;
  idperfilRedIsssteUsuarioBtcPerfilRedIsssteEditar : boolean = false;
  @Input() lista_idcargoUsuarioBtcCatalogoCargo;
  idcargoUsuarioBtcCatalogoCargoEditar : boolean = false;
  @Input() lista_idhospitalUsuarioBtcHospital;
  idhospitalUsuarioBtcHospitalEditar : boolean = false;

  
  constructor( ) { }
    actualizarUsuarioBtc() {
        if (this.usuarioBtc.id == null) {
            this.usuarioBtcService.guardarUsuarioBtc(this.usuarioBtc, this.evtGuardar, this);
        } else {
            this.usuarioBtcService.actualizarUsuarioBtc(this.usuarioBtc, this.evtActualiza, this);
        }
    }
    evtGuardar(usuarioBtc, obj) {
        obj.usuarioBtc = usuarioBtc;
        obj.usuarioBtcChange.emit(obj.usuarioBtc);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.usuarioBtcChange.emit(obj.usuarioBtc);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarUsuarioBtc() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
