import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarpaisService {
  public editpais: any[];
  constructor() { }

  set(data){
    this.editpais= data;
  }

  get(){
    return this.editpais;
  }
}
