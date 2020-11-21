import { ServicioService } from './../../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css']
})
export class EditarPacientesComponent implements OnInit {

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
  }

  irHome(){
    this.router.navigate(['home'])
  }

}
