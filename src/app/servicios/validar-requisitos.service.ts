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

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   addvalidarrequisito(validarrequisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('selrequisito',validarrequisito.nrequisito)
                                .set('selcomercio',validarrequisito.ncomercio)
                                .set('selestado',validarrequisito.vestado)
                                .set('archivo',validarrequisito.archivo);
    return this._http.post(this.url+'insertvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }
}
