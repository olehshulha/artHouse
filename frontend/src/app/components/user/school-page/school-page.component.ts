import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-school',
  templateUrl: './school-page.component.html',
  styleUrls: ['./school-page.component.sass']
})
export class SchoolPageComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'School Page' );
  }

  ngOnInit() {
  }

}
