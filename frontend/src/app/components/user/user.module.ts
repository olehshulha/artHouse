import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-auth/user-auth.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserEventsSingleComponent } from './user-events-single/user-events-single.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { SchoolPageComponent } from './school-page/school-page.component';
import { SchoolPageSingleComponent } from './school-page-single/school-page-single.component';
import { OnlineCoursePageComponent } from './online-course-page/online-course-page.component';
import { OnlineCourseSingleComponent } from './online-course-single/online-course-single.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { SharedModule } from '../shared/shared.module';


const userRoutes: Routes = [
	{ path: '', component: UserIndexComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'events', component: UserEventsComponent },
  { path: 'events/:alias', component: UserEventsSingleComponent },
  { path: 'school', component: SchoolPageComponent },
  { path: 'school/:alias', component: SchoolPageSingleComponent },
  { path: 'online-course', component: OnlineCoursePageComponent },
  { path: 'online-course/:alias', component: OnlineCourseSingleComponent },
  { path: 'team', component: TeamPageComponent },
  
  
  
]


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      userRoutes
    ),
  ],
  declarations: [
  	UserLoginComponent, 
  	UserEventsComponent, 
  	UserEventsSingleComponent, 
    UserIndexComponent,
    ContactsPageComponent,
    SchoolPageComponent,
    SchoolPageSingleComponent,
    OnlineCoursePageComponent,
    OnlineCourseSingleComponent,
    TeamPageComponent
  	],
})
export class UserModule { }
