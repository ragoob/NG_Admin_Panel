import {Component, TemplateRef, ContentChild, Input} from '@angular/core';
import { TableTemplate } from './TableTemplate';
import { ETableComponent } from './e-table/e-table.component';

@Component({
  selector: 'column',
  template: ``,
 
})
export class ColumnComponent {
  @Input() value: string;
  @Input() header: string;
    
  @ContentChild('tableHeaderTemplate',{static: true}) headerTemplate: TemplateRef<any>;
  @ContentChild('tableBodyTemplate',{static: true}) bodyTemplate: TemplateRef<any>;

  constructor(public table: ETableComponent) {
      table.addColumn(this);
	}

}