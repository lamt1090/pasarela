import { Component, OnInit } from '@angular/core';
import { BancoModule } from '../../modelos/banco/banco.module';
import { BancoService } from '../../servicios/banco.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [BancoService]
})
export class BancoComponent implements OnInit {
  sbanco: any[];
  data: any;
  public banco : BancoModule;

  constructor(
    private _bancoservice: BancoService
  ) { 
    this.banco= new BancoModule("");
    this.editar();
  }

  ngOnInit() {
   
  }

  onsubmit(formbanco: NgForm){
    let vm = this;

    vm._bancoservice.addbanco(vm.banco)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formbanco.reset();
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }


  editar(){
    let cate=this;
    cate._bancoservice.getbancos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sbanco=this.data;
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

  modificar(){
    console.log("en modificar");
  }

}
