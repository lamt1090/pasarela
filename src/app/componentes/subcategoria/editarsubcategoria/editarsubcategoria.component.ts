import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarsubcategoriaService } from '../../../servicios/mostrarsubcategoria.service';
import { SubcategoriaService } from '../../../servicios/subcategoria.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editarsubcategoria',
  templateUrl: './editarsubcategoria.component.html',
  styleUrls: ['./editarsubcategoria.component.css']
})
export class EditarsubcategoriaComponent implements OnInit {

  model:any = {};//variable para guardar lo obtenido del servicio mostrar
  scategoria: any[]; //variable para guardar las categorias
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrarsubcategoriaService,//objeto de conexión con el servicio mostrar
    private _subcategoriaservice: SubcategoriaService //objeto de conexión con el servicio subcategoria
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se trae los datos del servicio mostrar
    this.model=sidata[0];//se guardan los datos del servico mostrar
    this.categorias();//inicialización del metodo
  }

  //metodo que va editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._subcategoriaservice.editsubcategoria(vm.model)//petición al servicio para enviar los datos a modificar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/subcategoria');//se actualiza la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditarsubcategoria:NgForm){
    formeditarsubcategoria.reset();//se resetea el formulario
      this.rt.navigateByUrl('/subcategoria');//se recarga la vista
  }

  //metodo para obtener las categorias
  categorias(){
    let cate=this;
    cate._subcategoriaservice.getcategorias()//petición al servicio para obtener las categorias
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay categorias en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.scategoria=result;//se guardan las categorias obtenidas
            }
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}
