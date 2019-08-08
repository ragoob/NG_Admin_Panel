import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from 'src/app/core/services/AuthService';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PagesComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule
   
  
    
  ],
  providers: [AuthService]
})
export class PagesModule { }
