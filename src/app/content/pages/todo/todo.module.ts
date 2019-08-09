import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { EditableModule } from 'src/app/core/libs/editable/editable.module';
import { NatComponent } from './nat/nat.component';



@NgModule({
  declarations: [ListComponent, NatComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    LayoutModule,
    EditableModule
    
  ]
})
export class TodoModule { }
