import { ComponenteIdentificadorComponent } from './../../core/componentes-personalizados/componente-identificador/componente-identificador.component';
import { SolicitudTejidoCorneal } from './../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal';
import { SolicitudTejidoCornealRecepcionService } from './../shared/solicitud-tejido-corneal-recepcion.service';
import { Component, OnInit } from "@angular/core";
import { SolicitudTejidoCornealRecepcion } from "../shared/solicitud-tejido-corneal-recepcion";
import { GlobalesService } from "../../shared/globales.service";
import { URLProvider } from "../../shared/url-provider";
import { PermisoAtributoService } from "../../permiso-atributos/shared/permiso-atributo.service";
import { PermisoTablaService } from "../../permiso-tablas/shared/permiso-tabla.service";
import { Router } from '@angular/router';
import { SolicitudTejidoCornealService } from '../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service';

declare var $: any;
declare var DataTable: any;
declare var bootbox: any;

@Component({
  selector: "app-solicitud-tejido-corneal-recepcion-table",
  templateUrl: "./solicitud-tejido-corneal-recepcion-table.component.html",
  styleUrls: ["./solicitud-tejido-corneal-recepcion-table.component.css"],
  providers: [
    GlobalesService,
    PermisoAtributoService,
    PermisoTablaService,
    SolicitudTejidoCornealService,
    SolicitudTejidoCornealRecepcionService
  ]
})
export class SolicitudTejidoCornealRecepcionTableComponent implements OnInit {
  public idSeleccionado;
  public tipo = -1;
  public primero: boolean = true;
  public solicitudTejidoCornealRecepcionSeleccionado: SolicitudTejidoCornealRecepcion;
  public usuariologueado;
  public permisosAtributos = [];
  public permisosTabla = {
    tabla: "solicitudTejidoCornealRecepcion",
    permiso: 0,
    etiqueta: ""
  };
  public ptabla: boolean = false;
  public pattr: boolean = false;
  public folioSolicitudTejidoCorneal;
  public numeroExpedienteReceptor;
  public estatusProceso;
  public url;
  constructor(
    public globalesService: GlobalesService,
    public permisoAtributoService: PermisoAtributoService,
    public permisoTablaService: PermisoTablaService,
    public urlProvider: URLProvider,
    public router: Router,
     public solicitudTejidoCornealService :SolicitudTejidoCornealService,
     public SolicitudTejidoCornealRecepcionService: SolicitudTejidoCornealRecepcionService
  ) {
    this.url = this.urlProvider;
    this.solicitudTejidoCornealRecepcionSeleccionado = new SolicitudTejidoCornealRecepcion();
    this.usuariologueado = globalesService.dameUsuario();
    var discon = "";
    if (this.usuariologueado) {
      if (this.usuariologueado.perfil) {
        discon = "with perfil.id = " + this.usuariologueado.perfil.id;
        var cadena2 =
          "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " +
          discon +
          " where pa.tabla= 'solicitudTejidoCornealRecepcion'";
        this.permisoTablaService.custom(cadena2, this.evtTablas, this);
      }
    }
  }
  evtTablas(lista, obj) {
    if (lista.length >= 0) {
      obj.permisosTabla = lista[0];
      obj.ptabla = true;
      var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
      var cadena1 =
        "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " +
        discon +
        " where pa.tabla= 'solicitudTejidoCornealRecepcion'";
      obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
    }
  }
  evtAtributos(lista, obj) {
    obj.permisosAtributos = lista;
    obj.pattr = true;
    if (obj.ptabla && obj.pattr) {
      setTimeout(function() {
        obj.getColumnas(obj);
      }, 500);
    }
  }
  get muestraTabla() {
    return this.ptabla && this.pattr;
  }
  editarTegido(id){
   this.router.navigateByUrl("/solicitud-tejido-corneal-crud/"+id);
  }
  getColumnas(obj) {
    var dato: any = {};
    var self = obj;
    var columnas = [];
    var columnasNoVisibles = [];
    columnasNoVisibles.push(0);
    columnas.push({ data: "idSolicitud" } );
    columnasNoVisibles.push(1);
    columnas.push({ data: "tipo" } );
    columnas.push({ data: "folioSolicitud" });
    columnas.push({ data: "hospital" });
    columnas.push({ data: "nombre" });
    columnas.push({ data: "primerApellido" });
    columnas.push({ data: "numeroExpediente" });
    columnas.push({
      data: function(oObj) {
        return "<div style='  text-align: center;' ><span style=\"cursor: pointer\"> <img src=\"assets/imagenes/svg/binocular.svg\" alt=\"Detalle\"  style=\"width: 30px;\" /> </span></div>";
      }
    });
    columnas.push({
      data: function (oObj) {
        return "<div style='  text-align: center;' > <span class=\"glyphicon glyphicon-edit\"  style=\"cursor: pointer\"></span> </div>";
      }
    } );
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
                searchable: true
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
            ("entra");
        var tabla = $('#tabla_solicitudTejidoCornealRecepcion').DataTable({
            columnDefs: novisibles,
            language: {
                url: "assets/Spanish.json"
            },
            initComplete: function(settings, json) {
                var xs = $("#tabla_solicitudTejidoCornealRecepcion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
                        self.primero = false;
                    });
            },
            "drawCallback": function () {
              $('[data-toggle="tooltip"]').tooltip();
          },
            columns: columnas,

        });
        this.llenaInicial();
    $('#tabla_solicitudTejidoCornealRecepcion tbody').on('click', 'td', function (evt) {
      if (  evt.currentTarget.cellIndex ==   $(evt.currentTarget) .parent() .find('td').length -   3 ) {
        var data = $('#tabla_solicitudTejidoCornealRecepcion')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        this.detalle(data);
        (data);
      }
      // Se capta el evento editar de data table
      if(evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find("td").length - 2)
      {  var data = $('#tabla_solicitudTejidoCornealRecepcion')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        this.editar(data);
      }
      if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find("td").length - 1) {
        var data = $('#tabla_solicitudTejidoCornealRecepcion')
        .DataTable()
        .row(evt.currentTarget)
        .data();
      this.borrar(data);

      }

    }.bind(this));
  }

  detalle(dato) {
    this.tipo= dato.tipo;
    this.idSeleccionado = dato.id;
    if (this.tipo==1)
        $('#myModal').modal('show');
    else
        $('#evaluacionModal').modal('show');
  }

  editar(dato) {
    if(dato.tipo==1){
      this.globalesService.registraIdSolicitudTejidoC(dato.id);
      (dato.idSolicitud);
      this.router.navigateByUrl('/solicitud-tejido-corneal-crud/'+dato.id);
    }else{
      if(dato.tipo==2){
        bootbox.dialog({
          title: 'Mensaje de confirmación de edición',
          message:
            '¿Que desa editar?',
          size: 'large',
          onEscape: true,
          backdrop: true,
          buttons: {
            se: {
              label: 'Registro de Recepción',
              className: 'btn-primary',
              callback: function () {
                this.globalesService.registraIdSolicitudTejidoC(dato.id);
                (dato);
                this.router.navigateByUrl('/recepcion-solicitud-evaluacion-crud/'+dato.id);
               }.bind(this)
            },
            re: {
              label: 'Registro de Oficio de Donación',
              className: 'btn-info',
              callback: function () {
                this.globalesService.registraIdSolicitudEvaluacionTejido(dato.id);
                this.router.navigateByUrl('/oficio-donacion-crud/' + dato.id);
              }.bind(this)
            },
          }
        });
      }
    }

  }

  borrar(dato) {
    (dato);
    if(dato.tipo == "1"){
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
          id: dato.id,
          baja: true
        };
        this.SolicitudTejidoCornealRecepcionService.bajaSolicitudByID(
          envio,
          this.evtBorrar,
          this
        );
      }
    }.bind(this)});
  }else{
    if(dato.tipo == "2"){
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
            id: dato.id,
            baja: true
          };
        this.SolicitudTejidoCornealRecepcionService.bajaSolicitudByID(
            envio,
            this.evtBorrar,
            this
          );
        }
      }.bind(this)});
    }
  }

  }

  evtBorrar(bandera, obj) {
    if (bandera) {
      bootbox.alert('Datos eliminados con éxito');
      obj.llenaInicial({});
    }
  }

  ngOnInit() {}
  cambio_solicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion) {
    $("#tabla_solicitudTejidoCornealRecepcion")
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }
  // **********************************************************************************
  // **********************************************************************************
  // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
  // **********************************************************************************
  // **********************************************************************************

  //******************************************************************************************
  //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
  //******************************************************************************************
  aetiqueta(tabla, atributo) {
    for (let elemento of this.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo)
        return elemento.etiqueta;
    }
    return "";
  }


  avisible(tabla, atributo) {
    for (let elemento of this.permisosAtributos) {
      if (
        elemento.tabla == tabla &&
        elemento.atributo == atributo &&
        (elemento.permiso & 2) == 2
      )
        return true;
    }
    return false;
  }

  // **********************************************************************************
  // **********************************************************************************

llenaInicial(){
  let dato = {

};
let tabla = $("#tabla_solicitudTejidoCornealRecepcion").DataTable();
tabla.clear().draw();
$.ajax({
  url:
    this.url.serverURL +
    "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByFiltro",
  type: "post",
  dataType: "json",
  contentType: "application/json",
  success: function(data) {
    data.forEach(function(enty) {
      (data);
      var obj : any= {} ;
      obj.id = enty.id;
      obj.tipo = enty.tipo;
     // obj.esatusProceso = enty.esatusProceso;
      obj.folioSolicitud = enty.folioSolicitud;
      obj.hospital = enty.hospital;
      obj.nombre = enty.nombre;
      obj.primerApellido = enty.primerApellido;
      obj.numeroExpediente = enty.numeroExpediente;
      tabla.row.add(obj).draw(false);
    });
  },
  data: JSON.stringify(dato)
});

}

  buscarByfiltere() {
    let dato = {

        "folioSolicitudTejidoCorneal": this.folioSolicitudTejidoCorneal,
        "numeroExpedienteReceptor": this.numeroExpedienteReceptor,
        "estatusProceso": this.estatusProceso
    };
    (dato);
    let tabla = $("#tabla_solicitudTejidoCornealRecepcion").DataTable();
    tabla.clear().draw();
    $.ajax({
      url:
        this.url.serverURL +
        "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByFiltro",
      type: "post",
      dataType: "json",
      contentType: "application/json",
      success: function(data) {
        (data);
        data.forEach(function(enty) {
          var obj : any= {} ;
          obj.id = enty.idSolicitud;
          obj.tipo = enty.tipo;
       //   obj.esatusProceso = enty.esatusProceso;
          obj.folioSolicitud = enty.folioSolicitud;
          obj.hospital = enty.hospital;
          obj.nombre= enty.nombre;
          obj.primerApellido = enty.primerApellido;
          obj.numeroExpediente = enty.numeroExpediente;
          tabla.row.add(obj).draw(false);
        });
      },
      data: JSON.stringify(dato)
    });
  }
}
