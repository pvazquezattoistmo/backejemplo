import { SolicitudTejidoCornealService } from './../shared/solicitud-tejido-corneal.service';
import { Component, OnInit } from "@angular/core";
import { SolicitudTejidoCorneal } from "../shared/solicitud-tejido-corneal";
import { GlobalesService } from "../../shared/globales.service";
import { URLProvider } from "../../shared/url-provider";
import { PermisoAtributoService } from "../../permiso-atributos/shared/permiso-atributo.service";
import { PermisoTablaService } from "../../permiso-tablas/shared/permiso-tabla.service";
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;
declare var bootbox: any;

@Component({
  selector: "app-solicitud-tejido-corneal-table",
  templateUrl: "./solicitud-tejido-corneal-table.component.html",
  styleUrls: ["./solicitud-tejido-corneal-table.component.css"],
  providers: [
    GlobalesService,
    PermisoAtributoService,
    PermisoTablaService,
    SolicitudTejidoCornealService
  ]
})
export class SolicitudTejidoCornealTableComponent implements OnInit {
  public primero: boolean = true;
  public solicitudTejidoCornealSeleccionado: SolicitudTejidoCorneal;
  public usuariologueado;
  public permisosAtributos = [];
  public permisosTabla = { tabla: 'solicitudTejidoCorneal', permiso: 0, etiqueta: '' };
  public idSeleccionado;
  public ptabla: boolean = false;
  public pattr: boolean = false;
  public validos: any = {
    folio: true,
    numExp: true,
    fechai: true,
    fechaf: true
  };
  public datosBusqueda: any = {
    folio: '',
    numExpediente: '',
    fechaInicio: new Date(),
    fechaFin: new Date()
  };

  fechaInicio: Date;
  fechaFin: Date;

  public permisosBusquedas: any = [
    {
      etiqueta: 'Folio de Solicitud  de Tejido Corneal',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCorneal',
      atributo: 'folio'
    },
    {
      etiqueta: 'Número de Expediente',
      permiso: 3,
      tabla: 'solicitudTejidoCorneal',
      atributo: 'numExpediente',
      validacion: null,
    },
    {
      etiqueta: 'Fecha Inicio',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCorneal',
      atributo: 'fechaInicio'
    },
    {
      etiqueta: 'Fecha Fin',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCorneal',
      atributo: 'fechaFin'
    }
  ];

  constructor(
    public globalesService: GlobalesService,
    public permisoAtributoService: PermisoAtributoService,
    public permisoTablaService: PermisoTablaService,
    public urlProvider: URLProvider,
    public solicitudTejidoCornealService: SolicitudTejidoCornealService,
    public router :Router
  ) {
    //this.url = this.urlProvider;
    this.solicitudTejidoCornealSeleccionado = new SolicitudTejidoCorneal();
    this.usuariologueado = globalesService.dameUsuario();
    var discon = "";
    this.getColumnas(this);

  }

  getColumnas(obj) {
    if ($('#tabla_solicitudTejidoCorneal').length == 0) {
      setTimeout(() => {
        obj.getColumnas(obj);
      }, 500);
    }
    var dato: any = {};
    var self = obj;
    var columnas = [];
    var columnasNoVisibles = [];
    columnasNoVisibles.push(0);
    columnas.push({data: 'idSolicitud'});
    columnasNoVisibles.push({data: 'idHospitalSolicitante'});
    columnas.push({ data: "folioSolicitud" });
    columnas.push({ data: "hospitalSolicitante" });
    columnas.push({ data: "nombre" });
    columnas.push({ data: "apellido1" });
    columnas.push({ data: "numExpReceptor" });
    columnas.push({
      data: function(oObj) {
        return "<div style='  text-align: center;' ><span style=\"cursor: pointer\"> <img src=\"assets/imagenes/svg/binocular.svg\" alt=\"Detalle\"  style=\"width: 30px;\" /> </span></div>";
      }
    });
    columnas.push({
      data: function(oObj) {
        return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-edit\"  style=\"cursor: pointer\"></span></div>";
      }
    });
    columnas.push({
      data: function(oObj) {
        return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-trash\"  style=\"cursor: pointer\"></span> </div>";
      }
    });
    columnasNoVisibles.push({data: 'estatusProceso'});
    var novisibles: any;
    novisibles = [
      {
        targets: columnasNoVisibles,
        visible: false,
        searchable: false
      }
    ];
    $.fn.dataTableExt.sErrMode = "none";
    var tabla = $("#tabla_solicitudTejidoCorneal").DataTable({
      columnDefs: novisibles,
      language: {
        url: "assets/Spanish.json"
      },
      columns: columnas
    });
    this.llena(null, null, null);
    $('#tabla_solicitudTejidoCorneal tbody').on('click', 'td', function(evt) {
      if (  evt.currentTarget.cellIndex ==   $(evt.currentTarget) .parent() .find('td').length -   3 ) {
        var data = $('#tabla_solicitudTejidoCorneal')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        this.detalle(data);
      }
      if (  evt.currentTarget.cellIndex ==   $(evt.currentTarget) .parent() .find('td').length -   2 ) {
        var data = $('#tabla_solicitudTejidoCorneal')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        this.editar(data);
      }
      if (  evt.currentTarget.cellIndex ==   $(evt.currentTarget) .parent() .find('td').length -   1 ) {
        var data = $('#tabla_solicitudTejidoCorneal')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        this.borrar(data);
      }
    }.bind(this));
}

detalle(dato) {
  this.idSeleccionado = dato.idSolicitud;
  $('#myModal').modal('show');
}
editar(dato) {
  bootbox.dialog({
    title: 'Mensaje de confirmación de edición',
    message:
      '¿Desea editar la Solicitud?',
    size: 'large',
    onEscape: true,
    backdrop: true,
    buttons: {
      se: {
        label: 'Aceptar',
        className: 'btn-primary',
        callback: function () {
          if(dato.estatusProceso != "2"){
            this.globalesService.registraIdSolicitudTejido(dato.idSolicitud);
          this.router.navigateByUrl('/solicitud-tejido-corneal-crud/'+dato.idSolicitud);
          }else{
            bootbox.alert('El registro no se puede editar porque ya está en recepción');
          }
         }.bind(this)
      },
      cn: {
        label: 'Cancelar',
        className: 'btn-default',
      }
    }
  });
}

borrar(dato) {
  if(dato){
  // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
    bootbox.confirm({
      message: "¿Está seguro de eliminar?",
      buttons: {
        confirm: {
          label: "Sí",
          className: "btn-primary"
        },
        cancel: {
          label: "No",
          className: 'btn-danger'
        }
      },
      callback: function(result) {
    if (result) {
      let envio = {
        id: dato.idSolicitud,
        baja: true
      };
      if(dato.estatusProceso != "2"){
        this.solicitudTejidoCornealService.bajaSolicitudesTejidoByID(
          envio,
          this.evtBorrar,
          this
        );
      }else{
    bootbox.alert('El registro no se puede eliminar porque ya está en recepción');
return;
      }
    }
  }.bind(this)});
  }

}

evtBorrar(bandera, obj) {
  if (bandera) {
    bootbox.alert('Datos eliminados con éxito');
    obj.llena({});
  }
}
  ngOnInit() {}

  //******************************************************************************************
  //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
  //******************************************************************************************

  // **********************************************************************************
  // **********************************************************************************
  cambio_solicitudTejidoCorneal(solicitudTejidoCorneal) {
    $('#tabla_solicitudTejidoCorneal')
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }

  llena(dato, fechaInicio, fechaFin) {

    let datoenviar;
    if (dato) {
      datoenviar = Object.assign({}, dato);
    } else {
      datoenviar = {};
    }
    if (dato && fechaInicio) {
      datoenviar.fechaInicio = fechaInicio.getTime();
    } else {
      delete datoenviar.fechaInicio;
    }
    if (dato && fechaFin) {
      datoenviar.fechaFin = fechaFin.getTime();
    } else {
      delete datoenviar.fechaFin;
    }
    (datoenviar);
    let tabla = $('#tabla_solicitudTejidoCorneal').DataTable();
    tabla.clear().draw();
    $.ajax({
      url:
        this.urlProvider.serverURL + 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByConsulta',
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        data.forEach(function(enty) {
          var obj: any = {};
          obj.idSolicitud = enty.idSolicitud;
          obj.idHospitalSolicitante = enty.idHospitalSolicitante;
          obj.folioSolicitud = enty.folioSolicitud;
          obj.hospitalSolicitante = enty.hospitalSolicitante;
          obj.nombre = enty.nombre;
          obj.apellido1 = enty.apellido1;
          obj.numExpReceptor = enty.numExpReceptor;
          obj.estatusProceso = enty.estatusProceso;
          tabla.row.add(obj).draw(false);
        });
      },
      data: JSON.stringify(datoenviar)
    });
  }

}
