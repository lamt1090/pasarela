import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarsubcategoriaService } from '../../../servicios/mostrarsubcategoria.service';
import { SubcategoriaService } from '../../../servicios/subcategoria.service';

@Component({
  selector: 'app-mostrarsubcategoria',
  templateUrl: './mostrarsubcategoria.component.html',
  styleUrls: ['./mostrarsubcategoria.component.css']
})
export class MostrarsubcategoriaComponent implements OnInit {

  ssubcategoria: any[];// variable para guardar las subcategorias
  idsb: any; //variable para guardar la selección del formulario
  subcategoriaid: any[]; //variable para guardar la subcategoria especifica
  data: any;
  constructor(
    private rt: Router,
    private _msbservice: MostrarsubcategoriaService,  //objeto para acceder al servicio mostrar
    private _subcategoriaservice: SubcategoriaService //objeto para acceder al servico  subcategoria
  ) { 
    this.mostrar(); //inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar todas las subcategorias
  mostrar(){
    let sb=this;
    sb._subcategoriaservice.getsubcategorias()//peticion al servicio para obtener las subcategorias de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.ssubcategoria=this.data;//se guardan las subcategorias encontradas
            }
          }else{
              sb = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo que hace llamado al metodo modificar
  modificar(data){
    this.idsb= data;
    if(this.idsb!=0){
      this.idbn(this.idsb);//se llama al metodo para hacer las modificaciones
    }else{
      alert("Error al elegir subcategoria");
    }
  }

  //metodo para modificar
  idbn(idsb){
    let bn=this;
    bn._subcategoriaservice.getsubcategoriaid(idsb)//petición al servicio para buscar la subcategoria escogida
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.subcategoriaid=this.data;//recibe los datos traidos de la BD
              this._msbservice.set(this.subcategoriaid); //se envian al servicio mostrarsubcategoria para guardarlos
              this.rt.navigateByUrl('editarsubcategoria');//se redirecciona a otra vista
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

  //metodo para actualizar
  actualizar(){
    location.reload();//se recarga la vista
  }

  //metodo donde se consulta si se puede eliminar la subcategoria elegida
  eliminar(data){
    this.idsb= data;
    if(this.idsb!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._subcategoriaservice.existesubcategoria(this.idsb)//petición al servicio para acceder al metodo
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta subcategoria, un comercio lo esta usando");
              }else{
                this.eliminaridsubcategoria(this.idsb);//lamado al metodo que realiza la eliminación
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
      alert("Error al elegir el subcategoria");
    }
  }

  //metodo de eliminar
  eliminaridsubcategoria(idsb){
    let bn=this;
    bn._subcategoriaservice.eliminarsubcategoria(idsb)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta subcategoria");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();//recarga la vista
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
