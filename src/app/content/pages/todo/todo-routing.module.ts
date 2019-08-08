import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
		path: '',
		component: ListComponent,
		data: {
			permissions: {
			
			}
    }

  }
   

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  ,exports : [RouterModule]
})
export class TodoRoutingModule { }
