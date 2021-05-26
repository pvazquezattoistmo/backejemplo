import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioBtc } from '../shared/usuario-btc';

@Component({
  selector: 'app-usuario-btc-conjunto',
  templateUrl: './usuario-btc-conjunto.component.html',
  styleUrls: ['./usuario-btc-conjunto.component.css'],
})
export class UsuarioBtcConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() usuarioBtcBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosUsuarioBtc;
  @Input() ocultarConjuntosUsuarioBtc;
  @Input() usuarioBtcService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovUsuarioBtcUsuario;
  usuarioUltMovUsuarioBtcUsuarioEditar : boolean = false;
  @Input() lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste;
  idperfilRedIsssteUsuarioBtcPerfilRedIsssteEditar : boolean = false;
  @Input() lista_idcargoUsuarioBtcCatalogoCargo;
  idcargoUsuarioBtcCatalogoCargoEditar : boolean = false;
  @Input() lista_idhospitalUsuarioBtcHospital;
  idhospitalUsuarioBtcHospitalEditar : boolean = false;

  public listaUsuarioBtcN: UsuarioBtc[] = [];
  @Input() public listaUsuarioBtc: UsuarioBtc[] = [];
  @Output() public listaUsuarioBtcChange = new EventEmitter<UsuarioBtc[]>();
  @Input() public usuarioBtcN: UsuarioBtc = new UsuarioBtc();
  @Output() public usuarioBtcNChange = new EventEmitter<UsuarioBtc>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(usuarioBtc, tipo) {
        this.idSeleccionado = tipo + "-" + usuarioBtc.id;
        this.usuarioBtcN = usuarioBtc;
    }

    ngOnInit() {
        this.usuarioBtcN.id = 0;
        this.listaUsuarioBtcN.push(Object.assign({}, this.usuarioBtcN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new UsuarioBtc();
        pg.id = this.listaUsuarioBtcN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaUsuarioBtcN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let usuarioBtc of this.listaUsuarioBtc) {
            this.usuarioBtcService.actualizarUsuarioBtc(usuarioBtc, this.evtActualiza, this);
        }
        for (let usuarioBtc of this.listaUsuarioBtcN) {
            usuarioBtc.id = null;
            this.usuarioBtcService.guardarUsuarioBtc(usuarioBtc, this.evtGuardar, this);
        }
    }
    evtGuardar(usuarioBtc, obj) {
        obj.agregados++;
        obj.listaUsuarioBtc.push(usuarioBtc);
        if (obj.agregados >= obj.listaUsuarioBtcN.length) {
            obj.usuarioBtcN = new UsuarioBtc();
            obj.listaUsuarioBtcN = [];
            obj.usuarioBtcN.id = 0;
            obj.idSeleccionado = "N-" + obj.usuarioBtcN.id;
            obj.listaUsuarioBtcN.push(Object.assign({}, obj.usuarioBtcN));
            obj.listaUsuarioBtcChange.emit(obj.listaUsuarioBtc);
        }
        if (obj.agregados >= obj.listaUsuarioBtcN.length && 
            obj.actualizados >= obj.listaUsuarioBtc.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaUsuarioBtcN.length && 
            obj.actualizados >= obj.listaUsuarioBtc.length  ) {
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
