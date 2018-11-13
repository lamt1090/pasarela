import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrequisitoService {
  public editreq: any[];
  constructor() { }

  set(data){
    this.editreq= data;
  }

  get(){
    return this.editreq;
  }
}
