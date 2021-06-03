import { Component, OnInit } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestsos',
  templateUrl: './requestsos.component.html',
  styleUrls: ['./requestsos.component.css']
})
export class RequestsosComponent implements OnInit {

  constructor(private router: Router) { }
  lat : any;
  lng : any;
  mapType = 'satellite';
  solicitudes:Array<object> = [];
  ngOnInit(): void {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.lat = pos.lat;
         this.lng = pos.lng;
      });
  }
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
  Solicitar(){
    this.solicitudes = [{id: 1, nombre: "Mecanica", solicitud: "Agenda para revisión", idTaller:1}];
    Swal.fire('Solicitud enviada con éxito!')
    this.router.navigate(['/map'])
  }
}
