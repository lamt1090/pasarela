import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrardepartamentoService {
  public editdpto: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editdpto= data;
    console.log("lo recibi y lo guarde:="+this.editdpto);
  }

  get(){
    return this.editdpto;
  }
}
