import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild( 'mapDiv' ) mapDivElement!: ElementRef;

  constructor(
    private placesServices: PlacesService,
    private mapServices: MapService
  ) { }

  ngAfterViewInit(): void {
    if ( !this.placesServices.useLocation ) throw Error( 'No hay placesServices.userlocation' );
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);
      new Marker( { color: 'red' })
        .setLngLat( this.placesServices.useLocation )
        .setPopup( popup )
        .addTo( map )
      this.mapServices.setMap( map );
    
    
  }

}
