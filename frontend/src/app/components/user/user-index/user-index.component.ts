import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.sass']
})
export class UserIndexComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'ArtHouse' );
  }

  ngOnInit() {
  }

}
