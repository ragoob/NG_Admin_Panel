import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputFieldComponent } from './text-input-field/text-input-field.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form/form.component';
import { GenericFormModule } from 'src/app/core/libs/generic-form/generic-form.module';



@NgModule({
  declarations: [TextInputFieldComponent, FormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    GenericFormModule
  ]
})
export class FormsModule { }
