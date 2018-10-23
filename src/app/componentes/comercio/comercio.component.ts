import { Component, OnInit } from '@angular/core';
import { ComercioModule } from '../../modelos/comercio/comercio.module';
import { ComercioService } from '../../servicios/comercio.service';


@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css'],
  providers: [ComercioService]
})
export class ComercioComponent implements OnInit {
  sc: any;
  sp: any;
  scd: any;
  data: any[];
  sregimen : any[];
  siva : any[];
  srol : any[];
  scategoria : any[];
  spais : any[];
  ssubcategoria : any[];
  sdepartamento : any[];
  sciudad : any[];
  smoneda : any[];
  public comercio: ComercioModule;

  constructor(
    private _comercioservice: ComercioService
  ) { 
    this.comercio = new ComercioModule("","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  }

  ngOnInit(){
    this.rol();
    this.categoria();
    this.pais();
    this.regimen();
    this.iva();
    this.moneda();
    //this.prueba();
    
  }

  prueba(){
    console.log("prueba");
  }

  onsubmit(){
    let vm = this;
    vm._comercioservice.addcomercio(vm.comercio)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    ) 
  }

  onSelection(){
    this.sc= this.comercio.catc;
    if(this.sc!=0){
      this.sb(this.sc);
    }else{
      alert("Error en la elección de categoria");
    }
  }

  sb(sc){
    let cate=this;
    cate._comercioservice.getsubcategoriaopcional(sc)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay subcategorias para esta opción")
            }else{
              this.ssubcategoria=this.data;
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

  onSelectionpais(){
    this.sp= this.comercio.npais;
    if(this.sp!=0){
      this.sd(this.sp);
    }else{
      alert("Error al elegir el país");
    }
  }

  sd(sp){
    let pais=this;
    pais._comercioservice.getpaisopcional(sp)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay departamento para esta opción")
            }else{
              this.sdepartamento=this.data;
            }
          }else{
              pais = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }
  
  onSelectiondepartamento(){
    this.scd= this.comercio.ndep;
    if(this.scd!=0){
      this.scity(this.scd);
    }else{
      alert("Error al elegir el departamento");
    }
  }

  scity(scd){
    
    let dpto=this;
    dpto._comercioservice.getciudadopcional(scd)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay ciudades para esta opción")
            }else{
              this.sciudad=this.data;
            }
          }else{
              dpto = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  regimen(){
    let cate=this;
    cate._comercioservice.getregimen()
    .subscribe(
      result => {
          if(result.code != 200){

            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.sregimen=result;
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

  iva(){
    let cate=this;
    cate._comercioservice.getiva()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.siva=result;
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

  rol(){
    let cate=this;
    cate._comercioservice.getrol()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.srol=result;
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

  categoria(){
    let cate=this;
    cate._comercioservice.getcategoria()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
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

  pais(){
    let cate=this;
    cate._comercioservice.getpais()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.spais=this.data;
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

  moneda(){
    let cate=this;
    cate._comercioservice.getmoneda()
    .subscribe(
      result => {
          if(result.code != 200){
                        
            this.data=result;

            if(this.data['status']== false){
              alert("No existen monedas en la base de datos")
            }else{
              this.smoneda=this.data;
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
