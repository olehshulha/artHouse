import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.sass']
})
export class ContactsPageComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'Contacts Page' );
  }

  ngOnInit() {
  }

}
