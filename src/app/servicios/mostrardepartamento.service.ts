import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrardepartamentoService {
  public editdpto: any[];
  constructor() { }

  set(data){
    this.editdpto= data;
  }

  get(){
    return this.editdpto;
  }
}
