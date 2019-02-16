/// <reference types="@types/leaflet" />
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-user-contacts',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.sass']
})
export class ContactsPageComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 21, attribution: '...' })
    ],
    zoom: 18,
    center: latLng(50.4516409, 30.5107086),
  };
  markers =  [ 
    marker(
			[ 50.4516409, 30.5107086 ],
			{
				icon: icon({
					iconSize: [ 75, 75 ],
					iconUrl: '/assets/images/map-marker.png'
				})
			}
		)
  ];
  constructor( private title: Title ) {
    this.title.setTitle( 'Contacts Page' );
    
  }
  ngOnInit() {
  }

}
