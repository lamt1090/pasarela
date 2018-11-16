import { Component, OnInit } from '@angular/core';
import { CategoriaModule } from '../../modelos/categoria/categoria.module';
import { CategoriaService } from '../../servicios/categoria.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {
  
  public categoria: CategoriaModule; //objeto de conexión con el modelo

  constructor(
    private _categoriaservice: CategoriaService //objeto de conexión con el servicio
  ) {
    this.categoria= new CategoriaModule("");
   }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formcategoria: NgForm){
    let vm = this;

    vm._categoriaservice.addcategoria(vm.categoria)//petició al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formcategoria.reset();//se resetea el formulario
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  
}
