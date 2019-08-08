import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
		path: '',
		component: PagesComponent,
		data: {
			permissions: {
			
			}
    },
    children: [
      {
				path: '',
        component : DashboardComponent
      },
      {
				path: 'forms',
				loadChildren: './forms/forms.module#FormsModule'
      },
      
      {
				path: 'todo',
				loadChildren: './todo/todo.module#TodoModule'
			},
    ]

    
  },

  {
    path: 'login',
    component : LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
