import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ValidarRequisitosService {

  public url: string;
  public url2: string;
  public url3 : string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
   }

   addvalidarrequisito(validarrequisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('selrequisito',validarrequisito.nrequisito)
                                .set('selcomercio',validarrequisito.ncomercio)
                                .set('selestado',validarrequisito.vestado)
                                .set('archivo',validarrequisito.archivo);
    return this._http.post(this.url+'insertvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }

  editvalidarrequisito(validar):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_val_estado',validar.id_val_req)
                                  .set('selrequisito',validar.nrequisito)
                                  .set('selcomercio',validar.ncomercio)
                                  .set('selestado',validar.vestado)
                                  .set('archivo',validar.archivo);
    return this._http.post(this.url3+'editvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }

  getrequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=requisito');
  }

  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=comercio');
  }

  getestadorequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=estadorequisito');
  }

  getvalidarrequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getvalidarrequisitos');
  }

  getvalidarrequisitosid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idvalreq',id);
    return this._http.post(this.url2+'?opcion=getvalidarrequisitosid',body,{headers: headers,responseType:'text'});
  }
}
