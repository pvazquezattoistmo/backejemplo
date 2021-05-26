import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestionMuestraMicrobiologia } from '../shared/gestion-muestra-microbiologia';

@Component({
  selector: 'app-gestion-muestra-microbiologia-conjunto',
  templateUrl: './gestion-muestra-microbiologia-conjunto.component.html',
  styleUrls: ['./gestion-muestra-microbiologia-conjunto.component.css'],
})
export class GestionMuestraMicrobiologiaConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() gestionMuestraMicrobiologiaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosGestionMuestraMicrobiologia;
  @Input() ocultarConjuntosGestionMuestraMicrobiologia;
  @Input() gestionMuestraMicrobiologiaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario;
  usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion;
  idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar : boolean = false;

  public listaGestionMuestraMicrobiologiaN: GestionMuestraMicrobiologia[] = [];
  @Input() public listaGestionMuestraMicrobiologia: GestionMuestraMicrobiologia[] = [];
  @Output() public listaGestionMuestraMicrobiologiaChange = new EventEmitter<GestionMuestraMicrobiologia[]>();
  @Input() public gestionMuestraMicrobiologiaN: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
  @Output() public gestionMuestraMicrobiologiaNChange = new EventEmitter<GestionMuestraMicrobiologia>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(gestionMuestraMicrobiologia, tipo) {
        this.idSeleccionado = tipo + "-" + gestionMuestraMicrobiologia.id;
        this.gestionMuestraMicrobiologiaN = gestionMuestraMicrobiologia;
    }

    ngOnInit() {
        this.gestionMuestraMicrobiologiaN.id = 0;
        this.listaGestionMuestraMicrobiologiaN.push(Object.assign({}, this.gestionMuestraMicrobiologiaN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new GestionMuestraMicrobiologia();
        pg.id = this.listaGestionMuestraMicrobiologiaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaGestionMuestraMicrobiologiaN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let gestionMuestraMicrobiologia of this.listaGestionMuestraMicrobiologia) {
            this.gestionMuestraMicrobiologiaService.actualizarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.evtActualiza, this);
        }
        for (let gestionMuestraMicrobiologia of this.listaGestionMuestraMicrobiologiaN) {
            gestionMuestraMicrobiologia.id = null;
            this.gestionMuestraMicrobiologiaService.guardarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.evtGuardar, this);
        }
    }
    evtGuardar(gestionMuestraMicrobiologia, obj) {
        obj.agregados++;
        obj.listaGestionMuestraMicrobiologia.push(gestionMuestraMicrobiologia);
        if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length) {
            obj.gestionMuestraMicrobiologiaN = new GestionMuestraMicrobiologia();
            obj.listaGestionMuestraMicrobiologiaN = [];
            obj.gestionMuestraMicrobiologiaN.id = 0;
            obj.idSeleccionado = "N-" + obj.gestionMuestraMicrobiologiaN.id;
            obj.listaGestionMuestraMicrobiologiaN.push(Object.assign({}, obj.gestionMuestraMicrobiologiaN));
            obj.listaGestionMuestraMicrobiologiaChange.emit(obj.listaGestionMuestraMicrobiologia);
        }
        if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length && 
            obj.actualizados >= obj.listaGestionMuestraMicrobiologia.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length && 
            obj.actualizados >= obj.listaGestionMuestraMicrobiologia.length  ) {
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
