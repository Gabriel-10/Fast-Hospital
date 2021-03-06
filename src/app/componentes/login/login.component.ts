import { Router } from '@angular/router';
import { ServicioService } from './../../servicios/servicio.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  correo: string = '';
  clave: string = '';
  sexo: string = '';
  convert: any;

  constructor(private Http:HttpClient, private ServicioService:ServicioService, private router:Router) {}

  ngOnInit(): void {

         const sign_in_btn = document.querySelector("#sign-in-btn");
         const sign_up_btn = document.querySelector("#sign-up-btn");
         const container = document.querySelector(".containerm");
         sign_up_btn.addEventListener("click", () => {
           container.classList.add("sign-up-mode");
         });

         sign_in_btn.addEventListener("click", () => {
           container.classList.remove("sign-up-mode");
         });
  }

  iniciar() {
    if (this.correo == '' || this.clave == '') {
      alert('campos de login vacios')
    } else {
      this.Http.get("https://finalapis.herokuapp.com/api/iniciar/"+this.correo+"/"+this.clave+"").subscribe(data=>{
        this.convert = data;
      if (this.convert.ok == false) {
        alert("verifique sus datos")
      } else {
        this.ServicioService.enviar(this.convert)
        this.router.navigate(['home'])
      }
    })
    }
  }

  registrar(){
    if (this.nombre == '' || this.correo == '' || this.clave == '' || this.sexo == '') {
      alert('campos de registro vacios')
    } else {
    this.Http.get("https://finalapis.herokuapp.com/api/crear/"+this.nombre+"/"+this.correo+"/"+this.clave+"/"+this.sexo+"").subscribe(data=>{
      console.log(this.sexo);
      this.convert = data;
      alert(this.convert.respuesta)
  })
    }
  }
}


