import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
//modelo
import { BancoModule } from '../modelos/banco/banco.module';


@Injectable({
  providedIn: 'root'
})
export class BancoService {
  
  public url: string;

  constructor(
    public _http: Http
  ) {
      this.url = GLOBAL.url;
   }

  getBanco(){
    return "los datos se han guardado correctamente"; //--msm de prueba
   //return this._http.get(this.url+'banco').map(res =>res.json());
  } 

  addbanco(banco:BancoModule){
    console.log(banco);
    let json = JSON.stringify(banco);
    let params = 'json='+json;
    let headers = new Headers({'content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'insertbanco.php',params,{headers: headers}).map(res => res.json());
  }
}
