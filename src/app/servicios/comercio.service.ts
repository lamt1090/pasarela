import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.url2= GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
   }

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

  editcomercio(comercio):Observable<any>{
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

  getregimen(): Observable<any>{
    return this._http.get(this.url2+'?opcion=regimen');
  }

  getiva(): Observable<any>{
    return this._http.get(this.url2+'?opcion=iva');
  }

  getrol(): Observable<any>{
    return this._http.get(this.url2+'?opcion=rol');
  }

  getcategoria(): Observable<any>{
    return this._http.get(this.url2+'?opcion=categoria');
  }

  getpais(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  getsubcategoriaopcional(sc): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',sc);
    return this._http.post(this.url2+'?opcion=subcategoriaopcional',body,{headers: headers,responseType:'text'});
    
  }

  getpaisopcional(sp): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',sp);
    return this._http.post(this.url2+'?opcion=paisopcional',body,{headers: headers,responseType:'text'});
    
  }

  getciudadopcional(scd): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',scd);
    return this._http.post(this.url2+'?opcion=ciudadopcional',body,{headers: headers,responseType:'text'});
    
  }

  getmoneda(): Observable<any>{
    return this._http.get(this.url2+'?opcion=moneda');
  }

  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getcomercio');
  }

  getcomercioid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url2+'?opcion=getcomercioid',body,{headers: headers,responseType:'text'});
  }

  eliminarcomercio(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url4+'?opcion=eliminarcomercio',body,{headers: headers,responseType:'text'});
  }

  existecomercio(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',id);
    return this._http.post(this.url5+'?opcion=existecomercio',body,{headers: headers,responseType:'text'});
  }

}
