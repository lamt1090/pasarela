import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarcategoriaService } from '../../../servicios/mostrarcategoria.service';
import { CategoriaService } from '../../../servicios/categoria.service';

@Component({
  selector: 'app-mostrarcategoria',
  templateUrl: './mostrarcategoria.component.html',
  styleUrls: ['./mostrarcategoria.component.css']
})
export class MostrarcategoriaComponent implements OnInit {

  scategoria: any[]; //variable para guardar las categorias de la BD
  idct: any; //cariable para guardar la selección del formulario
  categoriaid: any[];//variable para guardar una categoria especifica
  data: any;
  constructor(
    private rt: Router,
    private _mctservice: MostrarcategoriaService, //objeto de conexión al mostrar
    private _categoriaservice: CategoriaService //objeto de coneción al servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo mostrar
  mostrar(){
    let cate=this;
    cate._categoriaservice.getcategorias()//petición al servicio para obtener las categorias de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scategoria=this.data;// se guardan los datos obtenidos 
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

  //metodo para saber que categoria modificar
  modificar(data){
    this.idct= data;
    if(this.idct!=0){
      this.idbn(this.idct);//llamdo al metodo modificar
    }else{
      alert("Error al elegir categoria");
    }
  }

  //metodo modificar
  idbn(idct){
    let bn=this;
    bn._categoriaservice.getcategoriaid(idct)//petición al servicio para obtener los datos de la categoria a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.categoriaid=this.data; //se obtienen lso datos de la cansulta
              this._mctservice.set(this.categoriaid);// se envian al mostrar para guardar los datos
              this.rt.navigateByUrl('editarcategoria'); //se redirecciona las vista
            }
          }else{
              bn = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para actializar
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo para saber que categoria eliminar
  eliminar(data){
    this.idct= data;
    if(this.idct!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._categoriaservice.existecategoria(this.idct)//petición el servicio para saber si la categoria se puede eliminar o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta categoria, tiene una subcategoria");
              }else{
                this.eliminaridcategoria(this.idct);//lamado al metodo eliminar
              }
            }else{
                cat = result.data;
            }
        },
        error => {
            console.log(<any>error);
        }
        )
        
      }
    }else{
      alert("Error al elegir la categoria");
    }
  }

  //metodo elimianr
  eliminaridcategoria(idct){
    let bn=this;
    bn._categoriaservice.eliminarcategoria(idct)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta categoria");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();//se recarga la página
            }
          }else{
              bn = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }
  

}
