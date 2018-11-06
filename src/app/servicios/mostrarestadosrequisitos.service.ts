import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarestadosrequisitosService {
  public editestreq: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editestreq= data;
    console.log("lo recibi y lo guarde:="+this.editestreq);
  }

  get(){
    return this.editestreq;
  }
}
