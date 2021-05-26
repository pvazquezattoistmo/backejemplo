import { RecepcionSolicitudEvaluacion } from "./recepcion-solicitud-evaluacion";
import { URLProvider } from '../../shared/url-provider'

export class ConfigurarRecepcionSolicitudEvaluacion {
    crudServiceBaseUrl;
    recepcionSolicitudEvaluacionConsulta;
    tipocampoAgEl;
    campoAgEl;
    rutaAgregar: string;
    rutaActualizar: string;
    rutaEliminar: string;
    rutaLista: string;
    urlprovider: URLProvider;
    titulo:string;
    permisosAtributos;
    permisosTabla;
	altoComponente:number ;
    //   rutaAgregar:string;
    constructor() {
        this.urlprovider= new URLProvider();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion";
        this.rutaLista = this.crudServiceBaseUrl + "/getRecepcionSolicitudEvaluaciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarRecepcionSolicitudEvaluacion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarRecepcionSolicitudEvaluacion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarRecepcionSolicitudEvaluacion";
        this.titulo="Catálogo RecepcionSolicitudEvaluacion";
        this.permisosAtributos= null;
        this.permisosTabla= null;
        this.recepcionSolicitudEvaluacionConsulta = null;
        this.campoAgEl=null;
        this.tipocampoAgEl= null;
		this.altoComponente=500;
    }
    lectura() {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    }
    lecturaP(evt,dat) {
        if (!dat) return null;
		if (typeof dat === 'object')
        return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat.toDto() },
            type: "POST",
            complete:evt
        };
		return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    eliminar() {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    }
    eliminarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaEliminar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    agregar() {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    }
    agregarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaAgregar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
}
