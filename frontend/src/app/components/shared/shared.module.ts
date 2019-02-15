import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatInputModule, MatSelectModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule, MatInputModule, MatSelectModule, MatIconModule, MatProgressSpinnerModule
  ],
  declarations: [
	  FooterComponent, 
	  HeaderComponent
  ],
  exports: [
     FooterComponent, 
     HeaderComponent
  ]
})
export class SharedModule { }
