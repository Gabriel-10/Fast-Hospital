import { Router } from '@angular/router';
import { ServicioService } from './../../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {
  salir = false;
  pacientes: any;
  nombre: any;
  model: NgbDateStruct;


  datos: any;

  constructor(private ServicioService:ServicioService, private http:HttpClient, config: NgbModalConfig, private modalService: NgbModal, private router:Router) {
    $(document).ready(function(){
      $('.nav_btn').click(function(){
        $('.mobile_nav_items').toggleClass('active');
      });
    });
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.ServicioService.$getObjectSource.subscribe(data => {
      this.datos = data;
      this.pacientes = this.datos.pacientes;
      console.log(this.datos);
    })
  }

  open(content) {
    this.modalService.open(content, {size:'xl'});
  }

  openVerticallyCentered(eliminar) {
    this.modalService.open(eliminar, { centered: true });
  }

  editarP(id){
    alert(id)
    this.router.navigate(['editar'])
  }

  irHome(){
    this.router.navigate(['home'])
  }

  borrar(nombre, apellido){
    this.nombre = nombre + " " + apellido;
  }

}
