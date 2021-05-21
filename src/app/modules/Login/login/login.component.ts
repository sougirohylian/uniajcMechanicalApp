import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from'../../../_services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'UNIAJC.Mechanical';
  public user:string;
  public pass:string;
  users:any;
  constructor(private AutenticacionService:AutenticacionService) { }

  ngOnInit(): void {
  }
  login(){
    this.AutenticacionService.read_Users().subscribe(
      data=>{
        this.users=data.map(e=>{
          return{
            IdUsuario:e.payload.doc.id,
            Usuario:e.payload.doc.data()['Usuario'],
            Password:e.payload.doc.data()['Password'],
            Estado:e.payload.doc.data()['Estado'],
            FechaRegistro:e.payload.doc.data()['FechaRegistro'],
            IdRol:e.payload.doc.data()['IdRol']
          }
        })
      }
    )
  }
}
