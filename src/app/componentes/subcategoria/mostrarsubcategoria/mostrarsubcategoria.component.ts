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

  ssubcategoria: any[];
  idsb: any;
  subcategoriaid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _msbservice: MostrarsubcategoriaService, 
    private _subcategoriaservice: SubcategoriaService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let sb=this;
    sb._subcategoriaservice.getsubcategorias()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.ssubcategoria=this.data;
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

  modificar(data){
    this.idsb= data;
    if(this.idsb!=0){
      this.idbn(this.idsb);
    }else{
      alert("Error al elegir subcategoria");
    }
  }

  idbn(idsb){
    let bn=this;
    bn._subcategoriaservice.getsubcategoriaid(idsb)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.subcategoriaid=this.data;
              this._msbservice.set(this.subcategoriaid);
              this.rt.navigateByUrl('editarsubcategoria');
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

  actualizar(){
    location.reload();
  }

  eliminar(data){
    this.idsb= data;
    if(this.idsb!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._subcategoriaservice.existesubcategoria(this.idsb)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta subcategoria, un comercio lo esta usando");
              }else{
                this.eliminaridsubcategoria(this.idsb);
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

  eliminaridsubcategoria(idsb){
    let bn=this;
    bn._subcategoriaservice.eliminarsubcategoria(idsb)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta subcategoria");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();
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
