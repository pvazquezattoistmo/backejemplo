import { SolicitudEvaluacionCornealService } from './../shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from './../shared/solicitud-evaluacion-corneal';
import { Component, OnInit } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;
declare var bootbox: any;

@Component({
  selector: 'app-solicitud-evaluacion-corneal-table',
  templateUrl: './solicitud-evaluacion-corneal-table.component.html',
  styleUrls: ['./solicitud-evaluacion-corneal-table.component.css'],
  providers: [
    GlobalesService,
    PermisoAtributoService,
    PermisoTablaService,
    SolicitudEvaluacionCornealService
  ]
})
export class SolicitudEvaluacionCornealTableComponent implements OnInit {
  public validos: any = {
    folio: true,
    cenatra: true,
    fechai: true,
    fechaf: true
  };
  public datosBusqueda: any = {
    folio: '',
    idCenatra: '',
    fechaInicio: Date,
    fechaFin: Date,
  };
  fechaInicio: Date;
  fechaFin: Date;
  public permisosBusquedas: any = [
    {
      etiqueta: 'Folio de Solicitud  de Evaluación Corneal',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCornealRecepcion',
      atributo: 'folio'
    },
    {
      etiqueta: 'Id cenatra',
      permiso: 3,
      tabla: 'solicitudTejidoCornealRecepcion',
      atributo: 'idCenatra',
      validacion: '^[0-9]*$',
      mensaje: "Solo se aceptan id's numéricos"
    },
    {
      etiqueta: 'Fecha Inicio',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCornealRecepcion',
      atributo: 'fechaInicio'
    },
    {
      etiqueta: 'Fecha Fin',
      validacion: null,
      permiso: 3,
      tabla: 'solicitudTejidoCornealRecepcion',
      atributo: 'fechaFin'
    }
  ];
  public idSeleccionada;
  public primero: boolean = true;
  public solicitudEvaluacionCornealSeleccionado: SolicitudEvaluacionCorneal;
  public usuariologueado;
  public permisosAtributos = [];
  public permisosTabla = { tabla: 'solicitudEvaluacionCorneal', permiso: 0, etiqueta: '' };
  public ptabla: boolean = false;
  public pattr: boolean = false;
  enviando: boolean=false;
  constructor(
    public globalesService: GlobalesService,
    public permisoAtributoService: PermisoAtributoService,
    public permisoTablaService: PermisoTablaService,
    public urlProvider: URLProvider,
    public solicitudEvaluacionCornealService: SolicitudEvaluacionCornealService,
    public router :Router
  ) {
    this.solicitudEvaluacionCornealSeleccionado = new SolicitudEvaluacionCorneal();
    this.usuariologueado = globalesService.dameUsuario();
    var discon = '';
    this.getColumnas(this);
  }

  getColumnas(obj) {
    if ($('#tabla_solicitudEvaluacionCorneal').length == 0) {
      setTimeout(() => {
        obj.getColumnas(obj);
      }, 500);
    }
    var dato: any = {};
    var self = obj;
    var columnas = [];
    var columnasNoVisibles = [];
    columnasNoVisibles.push(0);
    columnas.push({ data: 'idSolicitud' });
    columnas.push({ data: 'folioSolicitud' });
    columnas.push({ data: 'idCenatra' });
    columnas.push({ data: 'nombre' });
    columnas.push({ data: 'apellido1' });
    columnas.push({ data: 'apellido2' });
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

    var novisibles: any;
    novisibles = [
      {
        targets: columnasNoVisibles,
        visible: false,
        searchable: false
      }
    ];
    $.fn.dataTableExt.sErrMode = 'none';
    var tabla = $('#tabla_solicitudEvaluacionCorneal').DataTable({
      columnDefs: novisibles,
      language: {
        url: 'assets/Spanish.json'
      },
      columns: columnas
    });
    this.llena(null, null, null);
    $('#tabla_solicitudEvaluacionCorneal tbody').on(
      'click',
      'td',
      function(evt) {
        if (
          evt.currentTarget.cellIndex ==
          $(evt.currentTarget)
            .parent()
            .find('td').length -
            3
        ) {
          var data = $('#tabla_solicitudEvaluacionCorneal')
            .DataTable()
            .row(evt.currentTarget)
            .data();
          this.detalle(data);
        }
        if (
          evt.currentTarget.cellIndex ==
          $(evt.currentTarget)
            .parent()
            .find('td').length -
            2
        ) {
          var data = $('#tabla_solicitudEvaluacionCorneal')
            .DataTable()
            .row(evt.currentTarget)
            .data();
          this.editar(data);
        }
        if (
          evt.currentTarget.cellIndex ==
          $(evt.currentTarget)
            .parent()
            .find('td').length -
            1
        ) {
          var data = $('#tabla_solicitudEvaluacionCorneal')
            .DataTable()
            .row(evt.currentTarget)
            .data();
          this.borrar(data);
        }
      }.bind(this)
    );
  }

  detalle(dato) {
    this.idSeleccionada = dato.idSolicitud;
    $('#myModal').modal('show');
  }
  editar(dato) {
    bootbox.dialog({
      title: 'Mensaje de confirmación de edición',
      message:
        '¿Qué desea editar?',
      size: 'large',
      onEscape: true,
      backdrop: true,
      buttons: {
        se: {
          label: 'Solicitud de Evaluación',
          className: 'btn-primary',
          callback: function () {
            this.globalesService.registraIdSolicitudEvaluacion(dato.idSolicitud);
            this.router.navigateByUrl('/solicitud-evaluacion-corneal-crud/'+dato.idSolicitud);
           }.bind(this)
        },
        re: {
          label: 'Registro de Extracción',
          className: 'btn-info',
          callback: function () {
            this.globalesService.registraIdSolicitudEvaluacion(dato.idSolicitud);
            this.router.navigateByUrl('/registro-extraccion-crud/'+dato.idSolicitud);

          }.bind(this)
        },
      }
    });
  }
  borrar(dato) {
    if(dato){
    // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
    //   buttons: {
    //     confirm: {
    //       label: "Sí",
    //       className: "btn-primary"
    //     },
    //     cancel: {
    //       label: "No",
    //       className: ""
    //     }
    //   },
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
        this.solicitudEvaluacionCornealService.bajaSolicitudesEvaluacionByID(
          envio,
          this.evtBorrar,
          this
        );
      }
    }.bind(this)});
  }

  }

  evtBorrar(bandera, obj) {
    if (bandera == true) {
      bootbox.alert('Datos eliminados con éxito');
      obj.llena({});
    }else{
         bootbox.alert('No de pude eliminar una solicitud cuando fue enviada a recepción');
    }
  }
  ngOnInit() {}

  cambio_solicitudEvaluacionCorneal(solicitudEvaluacionCorneal) {
    $('#tabla_solicitudEvaluacionCorneal')
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }

  llena(dato, fechaInicio, fechaFin) {
    this.enviando= true;
    let fechaI;
    let fechaF;

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
    let tabla = $('#tabla_solicitudEvaluacionCorneal').DataTable();
    tabla.clear().draw();
    $.ajax({
      url:
        this.urlProvider.serverURL + 'solicitudEvaluacionCorneal/getSolicitudesEvaluacionByFiltro',
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        data.forEach(function(enty) {
          var obj: any = {};
          obj.idSolicitud = enty.idSolicitud;
          obj.folioSolicitud = enty.folioSolicitud;
          obj.idCenatra = enty.idCenatra;
          obj.nombre = enty.nombre;
          obj.apellido1 = enty.apellido1;
          obj.apellido2 = enty.apellido2;
          tabla.row.add(obj).draw(false);
        });
        this.enviando= false;
      }.bind(this),

      data: JSON.stringify(datoenviar)
    }).fail( function( jqXHR, textStatus, errorThrown ) {
      this.enviando= false;
    }.bind(this));
  }
}
