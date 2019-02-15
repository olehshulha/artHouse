import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminGuard } from '../../guards/admin.guard';

const adminRoutes: Routes = [
	{ path: '', component: AdminIndexComponent, canActivate: [AdminGuard] },
	{ path: 'login', component: AdminLoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      adminRoutes
    ),
  ],
  declarations: [AdminLoginComponent, AdminIndexComponent],
  providers: [AdminGuard]
})
export class AdminModule { }
