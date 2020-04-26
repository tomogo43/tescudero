import { Component, OnInit, Inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialog-data';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit, AfterViewInit {
  map: google.maps.Map;
  lat = 0;
  lng = 0;
  coordinate: google.maps.LatLng;
  mapOptions: google.maps.MapOptions;

  marker: google.maps.Marker;

  place: string;
  content: string;

  

  constructor(private dialogRef: MatDialogRef<DialogOverviewComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.place = data.place;
    this.content = data.content;

    // lattitude et longitude
    this.lat = data.lat;
    this.lng = data.lng;
    // coordonnées
    this.coordinate = new google.maps.LatLng(this.lat, this.lng);
    // map options
    this.mapOptions = {
      center: this.coordinate,
      zoom: 15
    }

    // marker 
    this.marker = new google.maps.Marker({
      position: this.coordinate,
      map: this.map
    })
  }

  ngOnInit(): void {
  }

  /* Initialise map */
  initialiseMap() {
    console.log(this.mapOptions);
    this.map = new google.maps.Map(
      this.gmap.nativeElement, this.mapOptions
    );
    this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.initialiseMap();
  }

  @ViewChild('mapContainer', {static: false}) gmap:ElementRef;

}
