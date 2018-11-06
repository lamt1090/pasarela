import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../servicios/categoria.service';
import { MostrarcategoriaService } from '../../../servicios/mostrarcategoria.service';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  model:any = {};
  public sidcategoria : any[];
 
  constructor(
    public rt : Router,
    private mostrar: MostrarcategoriaService,
    private _categoriaservice: CategoriaService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._categoriaservice.editcategoria(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/categoria');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarcategoria:NgForm){
    formeditarcategoria.reset();
      this.rt.navigateByUrl('/categoria');
  }

}
