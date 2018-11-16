import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { CategoriaService } from '../../../servicios/categoria.service';
import { MostrarcategoriaService } from '../../../servicios/mostrarcategoria.service';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  model:any = {};//variable para guardar los datos del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarcategoriaService,//objeto de conexión con el mostrar
    private _categoriaservice: CategoriaService //objeto de coenxión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos guardados en el mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._categoriaservice.editcategoria(vm.model)//petición al servicio para enviar los datos a modificar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/categoria');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditarcategoria:NgForm){
    formeditarcategoria.reset();//se resetea el formualrio
      this.rt.navigateByUrl('/categoria');//se redirecciona la vista
  }

}
