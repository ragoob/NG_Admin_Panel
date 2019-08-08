import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TextInputFieldComponent } from './text-input-field/text-input-field.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
		path: 'text-input-field',
		component: TextInputFieldComponent,
		data: {
			permissions: {
			
			}
    }

  },

  {
		path: 'form',
		component: FormComponent,
		data: {
			permissions: {
			
			}
    }

  },

   

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class FormsRoutingModule { }
