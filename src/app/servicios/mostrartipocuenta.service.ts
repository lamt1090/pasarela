import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrartipocuentaService {
  public edittpcuenta: any[];
  constructor() { }

  set(data){
    this.edittpcuenta= data;
  }

  get(){
    return this.edittpcuenta;
  }
}
