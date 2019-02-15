import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-online-course',
  templateUrl: './online-course-page.component.html',
  styleUrls: ['./online-course-page.component.sass']
})
export class OnlineCoursePageComponent implements OnInit {

  constructor( private title: Title ) {
  	this.title.setTitle( 'Online Course Page' );
  }

  ngOnInit() {
  }

}
