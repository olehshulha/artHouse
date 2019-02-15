import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.sass']
})
export class UserLoginComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'User Login title' );
  }

  ngOnInit() {
  }

}
