import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarcategoriaService {
  public editct: any[];
  constructor() { }

  set(data){
    this.editct= data;
  }

  get(){
    return this.editct;
  }
}
