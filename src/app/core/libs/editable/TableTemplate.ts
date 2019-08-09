import { Directive, Input, TemplateRef } from '@angular/core'; 

@Directive({
    selector: '[tableTemplate]'
})
export class TableTemplate {  
    @Input('tableTemplate') name: string;

    constructor(public template: TemplateRef<any>) {}
}