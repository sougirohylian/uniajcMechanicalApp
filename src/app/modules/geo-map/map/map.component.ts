import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCogs,faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Taller } from './taller';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  faCogs = faCogs;
  faShoppingBag = faShoppingBag;
  title = 'Como usar el Componente Google Maps de Angular 9';
  tallers:Array<Taller> = [];
  criterioNombre: string = "";
  currentIW = null;
  previousIW = null;

  public tallersIniciales:Array<Taller> = [
    {id: 1, nombre: "Talleres de Mecánica Automotriz", longitud: -76.524839,latitud: 3.426034, tipo: 1,
    urlImg: "../../../../assets/imagenes/img/1.jpg"},
    {id: 2, nombre: "Motorwagen Taller", longitud: -76.535139,latitud: 3.412326, tipo: 2,
    urlImg: "../../../../assets/imagenes/img/2.jpg"},
    {id: 3, nombre: "Arautos Ltda", longitud: -76.512480,latitud: 3.428090, tipo: 3,
    urlImg: "../../../../assets/imagenes/img/3.jpg"},
    {id: 4, nombre: "Ejes y suspensiones JUAN CARLOS", longitud: -76.526899,latitud: 3.396047, tipo: 1,
    urlImg: "../../../../assets/imagenes/img/4.jpg"},
    {id: 5, nombre: "Taller Celis", longitud: -76.508532,latitud: 3.448653, tipo: 2,
    urlImg: "../../../../assets/imagenes/img/5.png"},
  ];


  constructor(private router: Router) { }
  lat : any;
  lng : any;
  ngOnInit(): void {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.lat = pos.lat;
         this.lng = pos.lng;
      });
      this.limpiar();
  }


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

  mostrarSitios(tipo){
    this.tallers = [];

    for (let taller of this.tallersIniciales) {
      //Si es 1 es MECÁNICO
      //Si es 2 es MONTACARGAS
      //Si es 3 es REPUESTOS
      if(taller.tipo == tipo){
        this.tallers.push(taller);
      }
    }
    console.log(this.tallers);
  }

  buscar(){
    if(this.criterioNombre.trim().length > 0){
      this.tallers = [];
      for (let taller of this.tallersIniciales) {
        if(taller.nombre.toUpperCase().includes(this.criterioNombre.trim().toUpperCase())){
          this.tallers.push(taller);
        }
      }
    }

  }

  limpiar(){
    this.tallers = this.tallersIniciales;
    this.criterioNombre = "";
  }

  verFicha(taller: Taller){
    this.router.navigate(['/ficha/' + taller.id])
    console.log(taller);
  }

  mapClick() {
      if (this.previousIW) {
        this.previousIW.close();
      }
  }

  markerClick(infoWindow) {
      if (this.previousIW) {
        this.currentIW = infoWindow;
        this.previousIW.close();
      }
      this.previousIW = infoWindow;
  }
  solicitarSos(){
    this.router.navigate(['/requestsos'])
  }
}
