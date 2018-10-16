import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   adddepartamento(departamento):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',departamento.npais).set('name_departamento',departamento.nombre);
    return this._http.post(this.url+'insertdepartamento.php',body,{headers: headers,responseType:'text'});
  }
}
