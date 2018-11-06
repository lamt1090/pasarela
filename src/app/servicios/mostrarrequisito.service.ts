import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrequisitoService {
  public editreq: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editreq= data;
    console.log("lo recibi y lo guarde:="+this.editreq);
  }

  get(){
    return this.editreq;
  }
}
