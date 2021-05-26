import { GlobalesService } from './../../shared/globales.service';
import { Usuario } from "./../../usuarios/shared/usuario";
import { HospitalService } from "./../../hospitales/shared/hospital.service";
import { EstudioLaboratorio } from "./../../estudio-laboratorios/shared/estudio-laboratorio";
import { DesgloseCornea } from "./../../desglose-corneas/shared/desglose-cornea";
import { ConteoCelular } from "./../../conteo-celulares/shared/conteo-celular";
import { Input } from "@angular/core";
import { AlmacenEvaluacion } from "./../shared/almacen-evaluacion";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AlmacenEvaluacionService } from "../shared/almacen-evaluacion.service";
import { Hospital } from "../../hospitales/shared/hospital";
import { FileService } from '../../shared/file.service';

declare var bootbox: any;

@Component({
  selector: "app-almacen-evaluacion-crud",
  templateUrl: "./almacen-evaluacion-crud.component.html",
  styleUrls: ["./almacen-evaluacion-crud.component.css"],
  providers: [HospitalService, FileService]
})
export class AlmacenEvaluacionCrudComponent implements OnInit {
  public almacenEvaluacion: AlmacenEvaluacion = new AlmacenEvaluacion();
  @Input() public enable: boolean;
  @Input() public conteoCelularDerecha: ConteoCelular = new ConteoCelular();
  desgloseCorneaIzquierda: DesgloseCornea = new DesgloseCornea();
  desgloseCorneaDerecha: DesgloseCornea = new DesgloseCornea();
  @Input() listaDesgloseCorneaIzquierda: DesgloseCornea[] = [];
  @Input() listaDesgloseCorneaDerecha: DesgloseCornea[] = [];
  @Input() public conteoCelular: ConteoCelular = new ConteoCelular();
  public estudioLaboratorio: EstudioLaboratorio = new EstudioLaboratorio();
  public listaHospitales: Hospital;
  public hospitalCI: Hospital;
  public hospitalCD: Hospital;

  constructor(
    private almacenEvaluacionService: AlmacenEvaluacionService,
    private activatedRoute: ActivatedRoute,
    private hospitalService: HospitalService,
    private globalesService: GlobalesService,
    public fileservice: FileService,
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.almacenEvaluacion.id = id;
      this.almacenEvaluacionService.lazyAlmacenEvaluacion(
        this.almacenEvaluacion,
        this.evn_lazy_AlmacenEvaluacion,
        this
      );
      this.hospitalService.getHospitalesActivos(this.evnHospitales, this);
    }
  }

  evn_lazy_AlmacenEvaluacion(almacenEvaluacion: AlmacenEvaluacion, objeto) {
    (almacenEvaluacion);
    objeto.almacenEvaluacion = almacenEvaluacion;
    if (almacenEvaluacion.evaluacionSolicitud.conteosCelular) {
      almacenEvaluacion.evaluacionSolicitud.conteosCelular.forEach(element => {
        if (element.tipoCornea === 1) {
          objeto.conteoCelular = element;
        } else if (element.tipoCornea === 2) {
          objeto.conteoCelularDerecha = element;
        }
      });
    }
    if (almacenEvaluacion.evaluacionSolicitud.desgloseCorneas) {
      objeto.listaDesgloseCorneaIzquierda = [];
      objeto.listaDesgloseCorneaDerecha = [];
      almacenEvaluacion.evaluacionSolicitud.desgloseCorneas.forEach(element => {
        if (element.tipoCornea === 1) {
          objeto.listaDesgloseCorneaIzquierda.push(element);
        } else {
          objeto.listaDesgloseCorneaDerecha.push(element);
        }
      });
    }

    if (almacenEvaluacion.evaluacionSolicitud.estudiosLaboratorio) {
      almacenEvaluacion.evaluacionSolicitud.estudiosLaboratorio.forEach(
        element => {
          objeto.estudioLaboratorio = element;
        }
      );
    }
  }

  get fechaRecepcion() {
    if (!this.almacenEvaluacion.evaluacionSolicitud) {
      return null;
    }
    return new Date(
      this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.fechaRecepcion
    );
  }

  get horaRecepcion() {
    if (!this.almacenEvaluacion.evaluacionSolicitud) {
      return null;
    }
    return new Date(
      this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.horaRecepcion
    );
  }

  get fechaCultivo() {
    return new Date(this.estudioLaboratorio.fechaRegistro);
  }

  get fechaMicroscopia() {
    if (!this.almacenEvaluacion.evaluacionSolicitud) {
      return null;
    }
    return new Date(
      this.conteoCelular.id
        ? this.conteoCelular.fechaRegistro
        : this.conteoCelularDerecha.fechaRegistro
    );
  }

  get fechaIngresoAlmacen() {
    return new Date(this.almacenEvaluacion.fechaRegistro);
  }

  get diasIngresoAlmacen() {
    if (!this.almacenEvaluacion.evaluacionSolicitud) {
      return null;
    }
    const d = new Date(
      this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.fechaRecepcion
    );
    const diff = Math.abs(d.getTime() - new Date().getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  evnHospitales(hospitales, obj) {
    (hospitales);
    obj.listaHospitales = hospitales;
  }

  doGuardar() {
//    this.almacenEvaluacion.hospitalReceptorCD
    let corneas = this.almacenEvaluacion.evaluacionSolicitud.conteosCelular.length;
    if (corneas === 2 ) {
      if (this.almacenEvaluacion.hospitalReceptorCD === null || this.almacenEvaluacion.hospitalReceptorCI === null){
         bootbox.alert("Es necesario asignar ambas corneas a los hospitales");
         return;
      }
    }else if (corneas === 1 ){
      if (this.almacenEvaluacion.hospitalReceptorCD === null && this.almacenEvaluacion.hospitalReceptorCI === null){
        bootbox.alert("Es necesario asignar la cornea  al hospital");
        return ;
      }
    }else{
      bootbox.alert("No existen corneas a asignar");
      return ;
    }

    bootbox.confirm({
      message: "¿Deseas asignar el tejido?",
      buttons: {
        confirm: {
          label: "Sí",
          className: "btn-primary"
        },
        cancel: {
          label: "No",
          className: ""
        }
      },
      callback: function(result) {
        if (result) {
          this.almacenEvaluacion.usuarioUltMov = new Usuario();
          this.almacenEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
          this.almacenEvaluacionService.actualizarHopitalesAlmacenEvaluacion(
            this.almacenEvaluacion,
            this.evn_actualizarAlmacen,
            this
          );
        }
      }.bind(this)
    });
  }

  evn_actualizarAlmacen(ev, objeto) {
    objeto.almacenEvaluacion.estatusProceso= ev.estatusProceso;
/*    let id = objeto.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      objeto.almacenEvaluacion.id = id;
      objeto.almacenEvaluacionService.lazyAlmacenEvaluacion(
        objeto.almacenEvaluacion,
        objeto.evn_lazy_AlmacenEvaluacion,
        objeto
      );
    }*/
    bootbox.alert("Solicitud enviada.");
  }

  doImprimir() {
    var path: string = 'file/registroRecepcion';
    var otros: string = 'registroRecepcion';
    var parametros: any = { id: this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.id, tipoCornea: 2 };
    var nombre: string = 'registroRecepcion.pdf';
    this.fileservice.downloadFile(nombre, otros, path, parametros);
  }
}
