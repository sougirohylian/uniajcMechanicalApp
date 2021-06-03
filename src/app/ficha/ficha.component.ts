import { Component, OnInit } from '@angular/core';
import { Taller } from '../modules/geo-map/map/taller';
import { Router, ActivatedRoute } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  public tallersIniciales:Array<Taller> = [
    {id: 1, nombre: "Talleres de Mecánica Automotriz", longitud: -76.524839,latitud: 3.426034, tipo: 1,
    urlImg: "../../../../assets/imagenes/img/1.jpg",telefono:"31854554",direccion:"Calle 69 # 1-132",servicio:"Mecanica",
    calificacion:"../../../../assets/imagenes/img/estrellas5.jpeg"},
    {id: 2, nombre: "Motorwagen Taller", longitud: -76.535139,latitud: 3.412326, tipo: 2,
    urlImg: "../../../../assets/imagenes/img/2.jpg",telefono:"31654104",direccion:"Carrera 5norte # 69-52",servicio:"Mecanica",
    calificacion:"../../../../assets/imagenes/img/estrellas3.jpeg"},
    {id: 3, nombre: "Arautos Ltda", longitud: -76.512480,latitud: 3.428090, tipo: 3,
    urlImg: "../../../../assets/imagenes/img/3.jpg",telefono:"31759954",direccion:"Calle 15 # 10-25",servicio:"Montallantas",
    calificacion:"../../../../assets/imagenes/img/estrellas5.jpeg"},
    {id: 4, nombre: "Ejes y suspensiones JUAN CARLOS", longitud: -76.526899,latitud: 3.396047, tipo: 1,
    urlImg: "../../../../assets/imagenes/img/4.jpg",telefono:"31854554",direccion:"Carrera 3 # 62-35",servicio:"Montallantas",
    calificacion:"../../../../assets/imagenes/img/estrellas4.jpeg"},
    {id: 5, nombre: "Taller Celis", longitud: -76.508532,latitud: 3.448653, tipo: 2,
    urlImg: "../../../../assets/imagenes/img/5.png",telefono:"31854554",direccion:"Calle 62 # 4-10",servicio:"Repuestos",
    calificacion:"../../../../assets/imagenes/img/estrellas3.jpeg"},
  ];

  taller: Taller = null;
  solicitudes:Array<object> = [];
  constructor(private activatedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    this.cargarficha();
  }

  cargarficha(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        for (let taller of this.tallersIniciales) {
          if(taller.id == id){
            this.taller = taller;
            console.log(this.taller);
          }
        }
      }
    })
  }
  Solicitar(){
    this.solicitudes = [{id: 1, nombre: "Mecanica", solicitud: "Agenda para revisión", idTaller:1}];
    Swal.fire('Solicitud enviada con éxito!')
    this.router.navigate(['/map'])
  }
}
