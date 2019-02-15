import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-team',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.sass']
})
export class TeamPageComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'Team Page' );
  }

  ngOnInit() {
  }

}
