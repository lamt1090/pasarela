import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  public url5: string; //url para saber si se puede eliminar un registro, es decir si no es foranea en otra tabla

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2= GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
   }

  //metodo para insertar comercios
  addcomercio(comercio):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('creplegal',comercio.cedularl)
                                .set('nrl',comercio.nombrerpl)
                                .set('ereplegal',comercio.emailrl)
                                .set('cereplegal',comercio.celularrl)
                                .set('telreplegal',comercio.telefonorl)
                                .set('namecomercio',comercio.nombrecomercio)
                                .set('nit',comercio.nit)
                                .set('selectsubcateg',comercio.subcatc)
                                .set('selectregimen',comercio.nregimen)
                                .set('selectiva',comercio.viva)
                                .set('selectciudad',comercio.nciu)
                                .set('address',comercio.dirsucu)
                                .set('nsucursal',comercio.nsucursal)
                                .set('cuser',comercio.cedulauser)
                                .set('nuser',comercio.nombreuser)
                                .set('ceuser',comercio.celularuser)
                                .set('euser',comercio.emailuser)
                                .set('claveuser',comercio.clave)
                                .set('selectrol',comercio.roluser)
                                .set('namecaja',comercio.ncaja);
    return this._http.post(this.url+'insertcomercio.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un comercio
  editcomercio(comercio):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_comercio',comercio.id_comercio)
                                .set('namecomercio',comercio.nombre)
                                .set('nit',comercio.nit)
                                .set('selectsubcateg',comercio.id_sub_cat)
                                .set('selectregimen',comercio.id_regimen)
                                .set('selectiva',comercio.id_iva)
                                .set('cedreplegal',comercio.cedula_rep_legal);
    return this._http.post(this.url3+'editcomercio.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener el listado de regimen 
  getregimen(): Observable<any>{
    return this._http.get(this.url2+'?opcion=regimen');
  }

  //metodo para obtener los valores de iva que hay en la base de datos
  getiva(): Observable<any>{
    return this._http.get(this.url2+'?opcion=iva');
  }

  //metodo para obtener los roles
  getrol(): Observable<any>{
    return this._http.get(this.url2+'?opcion=rol');
  }

  //metodo para obtener las categorias
  getcategoria(): Observable<any>{
    return this._http.get(this.url2+'?opcion=categoria');
  }

  //metodo para obtener los paises
  getpais(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  //metodo para obtener la sucursal segun la categoria elegida
  getsubcategoriaopcional(sc): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',sc);
    return this._http.post(this.url2+'?opcion=subcategoriaopcional',body,{headers: headers,responseType:'text'});
    
  }

  //metodo para obtener el departamento segun el país elegido
  getpaisopcional(sp): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',sp);
    return this._http.post(this.url2+'?opcion=paisopcional',body,{headers: headers,responseType:'text'});
    
  }

  //metodo para obtener la ciudad según el departamento elegido
  getciudadopcional(scd): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',scd);
    return this._http.post(this.url2+'?opcion=ciudadopcional',body,{headers: headers,responseType:'text'});
    
  }

  //metodo para obtener las monedas
  getmoneda(): Observable<any>{
    return this._http.get(this.url2+'?opcion=moneda');
  }

  //metodo para obtener los comercios registrados
  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getcomercio');
  }

  //metodo para un comercio en especifico
  getcomercioid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url2+'?opcion=getcomercioid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un comercio
  eliminarcomercio(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url4+'?opcion=eliminarcomercio',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el codigo de un comercio es forenea en otra tabla
  existecomercio(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url5+'?opcion=existecomercio',body,{headers: headers,responseType:'text'});
  }

  //metodo para obterner las subcategorias que existan en la base de datos
  getsubcategoria(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getsubcategorias');
  }

}
