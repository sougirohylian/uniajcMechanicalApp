import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestsos',
  templateUrl: './requestsos.component.html',
  styleUrls: ['./requestsos.component.css']
})
export class RequestsosComponent implements OnInit {

  constructor() { }
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
  }
}
