import { Component, OnInit } from '@angular/core';
import { SubcategoriaModule } from '../../modelos/subcategoria/subcategoria.module';
import { SubcategoriaService } from '../../servicios/subcategoria.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css'],
  providers: [SubcategoriaService]
})
export class SubcategoriaComponent implements OnInit {
  scategoria: any[]; //variable para guardar las categorias
  data: any[];
  public subcategoria: SubcategoriaModule; //objeto de conexión con el modelo

  constructor(
    private _subcategoriaservice: SubcategoriaService //objeto de conexión con el servicio
  ) {
    this.categorias(); //inicialización del metodo
    this.subcategoria = new SubcategoriaModule("","");
   }

  ngOnInit() {
    //this._subcategoriaservice.getcategorias();
    //this.categorias();
  }

  //metodo para realizar la inserción en la tabla categoria
  onsubmit(formsubcategoria: NgForm){
    let vm = this;
    vm._subcategoriaservice.addsubcategoria(vm.subcategoria)//petición al servicio para acceder al metodo de insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formsubcategoria.reset();//se resetea el formulario 
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  //metodo que trae las categorias de la BD
  categorias(){
    let cate=this;
    cate._subcategoriaservice.getcategorias()//petición al servicio para llamar el metodo de buscar categorias
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay datos en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.scategoria=result;//se guardan las categorias
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
