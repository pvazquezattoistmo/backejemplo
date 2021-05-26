import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestionMuestraMicrobiologia } from '../shared/gestion-muestra-microbiologia';

@Component({
  selector: 'app-gestion-muestra-microbiologia',
  templateUrl: './gestion-muestra-microbiologia.component.html',
  styleUrls: ['./gestion-muestra-microbiologia.component.css'],
})
export class GestionMuestraMicrobiologiaComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() gestionMuestraMicrobiologiaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosGestionMuestraMicrobiologia;
  @Input() gestionMuestraMicrobiologia:GestionMuestraMicrobiologia;
  @Input() gestionMuestraMicrobiologiaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() gestionMuestraMicrobiologiaChange = new EventEmitter<GestionMuestraMicrobiologia>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario;
  usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion;
  idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar : boolean = false;
  @Input() enable: boolean;

  constructor( ) { }
    actualizarGestionMuestraMicrobiologia() {
        if (this.gestionMuestraMicrobiologia.id == null) {
            this.gestionMuestraMicrobiologiaService.guardarGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evtGuardar, this);
        } else {
            this.gestionMuestraMicrobiologiaService.actualizarGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evtActualiza, this);
        }
    }
    evtGuardar(gestionMuestraMicrobiologia, obj) {
        obj.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarGestionMuestraMicrobiologia() ;
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
          changes.permisosAtributos.currentValue.forEach(element => {
            element.permiso = 2;
            return element;
          });
        }
    }


  ngOnInit() {
  }


}
