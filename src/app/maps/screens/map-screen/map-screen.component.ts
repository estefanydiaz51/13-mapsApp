import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styles: [
  ]
})
export class MapScreenComponent {

  constructor(
    private placesService: PlacesService
  ) { 
    console.log( this.placesService.getUserLocation() );
  }


  get isUserLocationReady () {
    return this.placesService.isUserLocationReady;
  }
}
