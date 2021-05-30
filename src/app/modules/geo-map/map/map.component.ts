import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Como usar el Componente Google Maps de Angular 9'; 
 
  lat = 30.3069;
  lng = -100.8583;
  mapType = 'satellite';
}


