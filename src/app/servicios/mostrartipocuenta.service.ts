import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrartipocuentaService {
  public edittpcuenta: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.edittpcuenta= data;
    console.log("lo recibi y lo guarde:="+this.edittpcuenta);
  }

  get(){
    return this.edittpcuenta;
  }
}
