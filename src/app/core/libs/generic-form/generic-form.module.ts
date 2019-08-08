import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GFormComponent } from './g-form/g-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/content/layout/layout.module';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {DropdownModule} from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [GFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    AccordionModule,
    DropdownModule,
    RouterModule,
    CalendarModule
  ],
  exports : [GFormComponent]
})
export class GenericFormModule { }
