import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarestadosrequisitosService {
  public editestreq: any[];
  constructor() { }

  set(data){
    this.editestreq= data;
  }

  get(){
    return this.editestreq;
  }
}
