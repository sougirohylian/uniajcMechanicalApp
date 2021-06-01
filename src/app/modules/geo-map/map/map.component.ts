import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCogs,faShoppingBag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  faCogs = faCogs;
  faShoppingBag = faShoppingBag;
  title = 'Como usar el Componente Google Maps de Angular 9'; 
  
  constructor() { }
  lat : any;
  lng : any;
  ngOnInit(): void {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.lat = pos.lat;
         this.lng = pos.lng;
      });
      
  }
  public tallers:Array<object> = [
    {nombre: "Talleres de Mecánica Automotriz", longitud: -76.524839,latitud: 3.426034},
    {nombre: "Motorwagen Taller", longitud: -76.535139,latitud: 3.412326},
    {nombre: "Arautos Ltda", longitud: -76.512480,latitud: 3.428090},
    {nombre: "Ejes y suspensiones JUAN CARLOS", longitud: -76.526899,latitud: 3.396047},
    {nombre: "Taller Celis", longitud: -76.508532,latitud: 3.448653}
];
  
  /*lat = 3.42158;
  lng = -76.5205;*/
  
  mapType = 'satellite';
  public form: FormGroup = new FormGroup({
    name: new FormControl({ value: null, disabled: false }, [Validators.required, Validators.minLength(5), Validators.email])
  });
  doSearch() {
    console.log( this.form , this.form.value);

    //this.router.navigate(['/map'])
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
}


