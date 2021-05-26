import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {GlobalesService} from '../../../shared/globales.service';
import {FormGroup, FormControl, NgForm, NgModel} from '@angular/forms';

@Component({
    selector: 'app-componente-identificador',
    templateUrl: './componente-identificador.component.html',
    styleUrls: ['./componente-identificador.component.css'],
    providers: [GlobalesService]
})
export class ComponenteIdentificadorComponent implements OnInit {
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
    @ViewChild('componenteInput') componenteInput: NgModel;

    datoCambio() {
      setTimeout(() => {
        this.dato = this.datointerno;
        this.datoChange.emit(this.dato);
      });
    }
    constructor(private globalesService: GlobalesService) {}
    get alertar() {
            if (!this.requerido  && this.dato == null) {
                if (!this.valido) {
                  setTimeout(() => {
                    this.valido = true;
                    this.validoChange.emit(this.valido);
                  });
                }
            } else
                if (this.datointerno && !isNaN(Number(this.datointerno.toString()))) {
                    if (!this.valido) {
                      setTimeout(() => {
                        this.valido = true;
                        this.validoChange.emit(this.valido);
                      });
                    }
                } else {
                    if (this.valido) {
                      setTimeout(() => {
                        this.valido = false;
                        this.validoChange.emit(this.valido);
                      });
                    }
                }
                let salida = false;
        if (this.componenteInput && (this.componenteInput.dirty || this.componenteInput.touched)) {
            salida = !this.valido;
        }

        return salida;
//        return this.globalesService.arequerido(this, this.componente, this.atributo) &&
//                !this.buscar &&  ( this.datointerno && isNaN(Number(this.datointerno.toString())) );
    }
    get requerido() {
        if (this.componenteInput && this.componenteInput.errors && this.componenteInput.errors.required)
            return true
        return false;
    }
    get patron() {
        if (this.componenteInput && this.componenteInput.errors && this.componenteInput.errors.pattern)
            return true
        return false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes && changes.dato && (changes.dato.currentValue !== undefined) && changes.dato.currentValue != this.datointerno)
            this.datointerno = changes.dato.currentValue;
    }
}
