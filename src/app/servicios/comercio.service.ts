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

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
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
}
