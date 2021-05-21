import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AutenticacionService} from'../../../_services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   *
   */
  title = 'UNIAJC.Mechanical';
  /**
   *
   */
  public user:string;

  /**
   *
   */
  public pass:string;

  /**
   *
   */
  users:any;


  public form: FormGroup = new FormGroup({
    email: new FormControl({ value: null, disabled: false }, [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl({ value: null, disabled: false }, [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private AutenticacionService:AutenticacionService,
    private router: Router
    ) { }

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



  doLogin() {
    console.log( this.form , this.form.value);

    this.router.navigate(['/map'])
  }
}
