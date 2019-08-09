import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ETableComponent } from './e-table/e-table.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { LayoutModule } from 'src/app/content/layout/layout.module';
import { BsModalsModule } from '../bs-modals/bs-modals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { TableTemplate } from './TableTemplate';
import { ColumnComponent } from './ColumnComponent';


@NgModule({
  declarations: [ETableComponent,ColumnComponent, TableTemplate],
  imports: [
    CommonModule,
    NgxPaginationModule,
    LayoutModule,
    BsModalsModule,
    ReactiveFormsModule,
    AccordionModule,
    DropdownModule,
    RouterModule,
    CalendarModule

   
    
  ],
  exports : [ETableComponent,ColumnComponent]

})
export class EditableModule { }
