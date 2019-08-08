import { Component, OnInit } from '@angular/core';
import { GenericFormField } from 'src/app/core/libs/generic-form/g-form/g-form.component';
import { Validators } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Loaded : boolean = true;
  fields: Array<GenericFormField> = [
    { name: 'firstName', title: 'الأسم الأول', type: 'text', validators: [Validators.required],colclass : 'col-md-4' },
    { name: 'lastName', title: 'الأسم الاخير', type: 'text', validators: [Validators.required] ,colclass : 'col-md-4'},
    {
      name: 'todo', title: 'المهام', type: 'dropdown',
      LookupInfo : {
        valuefield : 'id',
        textfield : 'title'
      },
      placeholder : 'اختر',
      validators: [Validators.required],
      colclass : 'col-md-4'

    },
    { name: 'age', title: 'العمر', type: 'number' , validators: [Validators.required],colclass : 'col-md-4'},
    { name: 'date', title: 'التاريخ', type: 'date' , validators: [Validators.required],colclass : 'col-md-4'},
    { name: 'datetime', title: 'التاريخ مع الوقت', type: 'datetime' , validators: [Validators.required],colclass : 'col-md-4'},
    { name: 'time', title: 'الوقت', type: 'time' , validators: [Validators.required],colclass : 'col-md-4'},

    { name: 'notes', title: 'ملاحظات', type: 'textarea',colclass : 'col-md-12' },
    { name: 'agbAccepted', title: 'العمر مقبول ؟ ', type: 'checkbox' ,value : true,colclass : 'col-md-12'},
  ];

  formGroups = [
    { name: 'first-group' }
  ];
  savechanges : Function = function (values ? : any):void{

    alert('Saved Successfuly : '  + JSON.stringify(values))
    };
 
  constructor(private todoservice : TodoService) { 
  

  }

  ngOnInit() {

    this.fields[2].Lookups = this.todoservice.get()
  }

 

}
