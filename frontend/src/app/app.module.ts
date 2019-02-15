import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/user/notfound/notfound.component';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: '', loadChildren: './components/user/user.module#UserModule'},
      { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule'},
      { path: '404', component: NotfoundComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    SharedModule,
    TransferHttpCacheModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
