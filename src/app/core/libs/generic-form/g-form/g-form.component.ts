import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'g-form',
  templateUrl: './g-form.component.html',
  styleUrls: ['./g-form.component.scss']
})
export class GFormComponent implements OnInit {
  formchanged : boolean;
  initValues : any = {};
  myForm: FormGroup;
  @Input('fields') fields: Array<GenericFormField> = [];
  @Input('savechange') savechangeFunction : Function;
  @Input('pageTitle') pageTitle : string;
  @Input('pageIcon') pageIcon : string;
  @Input('pageDescription') pageDescription : string;
  @Input('HasBackButton') HasBackButton : boolean;
  @Input('BackButtonRoute') BackButtonRoute : string;
  @Input('disableSubmit') disableSubmit : boolean;
  @Input('rowColsCls') rowColsCls : string = 'col-md-12';
  submitted : boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fields.forEach(f=> {
      if(!f.colclass)
      f.colclass = 'col-md-12';
    })
    this.myForm = this.fb.group({});

    for (let field of this.fields) {
      this.myForm.addControl(
        field.name,
        this.fb.control(field.value ? field.value : '', field.validators)
      );
    }

     this.initValues = this.myForm.value;
    this.formChanges();
  }

  saveChanges(){
    this.submitted = true;
   if(!this.myForm.valid)
   return;

   this.savechangeFunction(this.myForm.value);
  }

  formChanges() {

    this.myForm.valueChanges.subscribe(changes => {
      for (let prop in changes) {
        
        if (changes[prop] != this.initValues[prop]) {
          this.formchanged = true;
          break;
        }

        else {
          this.formchanged = false;
        }
      }
    });
  }

}

export class GenericFormField {
  title: string;
  translate ? : string;
  name: string;
  type: 'text' | 'number' | 'checkbox' | 'select' | 'dropdown' | 'textarea' | 'date' | 'datetime' | 'time';
  validators?: Array<ValidatorFn>;
  LookupInfo?: LookupInfo;
  Lookups ? : Observable<any[]>;
  disabled ?: boolean;
  placeholder ? : string;
  value ? : any;
  colclass? : string = 'col-md-12'
}

export class LookupInfo {
  valuefield: string;
  textfield : string;
}




