import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarcategoriaService } from '../../../servicios/mostrarcategoria.service';
import { CategoriaService } from '../../../servicios/categoria.service';


@Component({
  selector: 'app-modificarcategoria',
  templateUrl: './modificarcategoria.component.html',
  styleUrls: ['./modificarcategoria.component.css']
})
export class ModificarcategoriaComponent implements OnInit {
  scategoria: any[];
  idct: any;
  categoriaid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mctservice: MostrarcategoriaService, 
    private _categoriaservice: CategoriaService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let cate=this;
    cate._categoriaservice.getcategorias()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scategoria=this.data;
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

  modificar(data){
    this.idct= data;
    if(this.idct!=0){
      this.idbn(this.idct);
    }else{
      alert("Error al elegir categoria");
    }
  }

  idbn(idct){
    let bn=this;
    bn._categoriaservice.getcategoriaid(idct)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.categoriaid=this.data;
              console.log(this.categoriaid);
              console.log("lo guarde en bancoid");
              this._mctservice.set(this.categoriaid);
              console.log("llegue del servicio voy para editar");
              this.rt.navigateByUrl('editarcategoria');
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

}
