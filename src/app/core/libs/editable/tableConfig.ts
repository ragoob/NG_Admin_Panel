import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export class TableConfig{
    columns : Columns[];
    Pageable? : boolean | Pageable;
    sortable? :boolean;
    editable: boolean | Editable;
    crud ? : Crud
}

export class Columns {
    title: string;
    translate ? : string;
    name: string;
    type: 'text' | 'number' | 'checkbox' | 'radio' | 'select' | 'dropdown' | 'textarea' | 'date' | 'datetime' | 'time' | 'hidden' | 'file';
    validators?: Array<ValidatorFn>;
    Lookups ? : Observable<any[]>;
    disabled ?: boolean;
    placeholder ? : string;
    value ? : any;
    cellwidth ? : string;
    editable ?:boolean = true;
  }

  export class Pageable{
      rows ? : number = 10
  }
  
  export class Editable{
      mode ? : 'inline' | 'popup' = 'popup';
      actions : Actions[]
  }

  export class Actions{
      name : 'Create' | 'Update' | 'Delete'
  }

  export class Crud{
      Create ? : string | CrudOptions;
      Update ? : string | CrudOptions;
      Delete ? : string | CrudOptions;
  }

  export class CrudOptions{
      apiURL ? : string;
      headers ? : HttpHeaders
  }