import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {GlobalesService} from '../../../shared/globales.service';
import {NgModel} from '@angular/forms';

@Component({
    selector: 'app-componente-cadena-combo',
    templateUrl: './componente-cadena-combo.component.html',
    styleUrls: ['./componente-cadena-combo.component.css'],
    providers: [GlobalesService]

})
export class ComponenteCadenaComboComponent implements OnInit {
    @Input() public buscar: boolean = true;
    @Input() public componente: string;
    @Input() public atributo: string;
    @Input() public permisosAtributos;
    @Input() public dato: string;
    /*
     *----- Agregados start----
    */
    @Input() public posicion: string = 'default';
    @Input() public sizeLB: string = '100';
    @Input() public sizeInput: string = '100';
    @Input() public isVisibleLB: boolean = true;
    @Input() public isVisibleInput: boolean = true;
    @Input() public alineacion: string = 'text-justify';
    /*
     *----- Agregados end----
    */
    @Output() public datoChange = new EventEmitter<string>();
    public datointerno: string;
    @Input() public valido: boolean = false;
    @Output() public validoChange = new EventEmitter<boolean>();
    public opciones: any[];
    constructor(private globalesService: GlobalesService) {

    }

    ngOnInit() {
        if (this.permisosAtributos.length > 0) {
            this.opciones = this.globalesService.avalidacion(this, this.componente, this.atributo).split("|");
        }

    }

    datoCambio() {
      setTimeout(() => {
        this.dato = this.datointerno;
        this.datoChange.emit(this.dato);
      });
    }

    ngOnChanges(changes) {
        if (changes && changes.dato && (changes.dato.currentValue !== undefined) && changes.dato.currentValue != this.datointerno)
            this.datointerno = changes.dato.currentValue;

        if (changes && changes.permisosAtributos &&
            (changes.permisosAtributos.currentValue !== undefined) && changes.permisosAtributos.length > 0) {
            this.opciones = this.globalesService.avalidacion(this, this.componente, this.atributo).split("|");
        }
        this.opciones = this.globalesService.avalidacion(this, this.componente, this.atributo).split("|");

    }

    get alertar(): boolean {
        if (this.globalesService.arequerido(this, this.componente, this.atributo)) {
            if ((this.datointerno == null || this.datointerno == "")) {
                // valido es falso
                if (this.valido) {
                  setTimeout(() => {
                    this.valido = false;
                    this.validoChange.emit(this.valido);
                  });
                }
            } else {
                // valido es verdadero
                if (!this.valido) {
                  setTimeout(() => {
                    this.valido = true;
                    this.validoChange.emit(this.valido);
                  });
                }
            }
        }else{
            if (!this.valido) {
              setTimeout(() => {
                this.valido = true;
                this.validoChange.emit(this.valido);
              });
            }
        }
        return this.globalesService.arequerido(this, this.componente, this.atributo) && (this.datointerno == null || this.datointerno == "") && !this.buscar;
    }
}
