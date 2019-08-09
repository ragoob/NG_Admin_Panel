import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BsmodalService } from '../../bs-modals/bs-modal/bsmodal.service';
import { ValidatorFn, FormGroup, FormBuilder } from '@angular/forms';
import { TableConfig, Pageable, Editable, Crud, CrudOptions, Columns } from '../tableConfig';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ColumnComponent } from '../ColumnComponent';
import * as moment from 'moment';
@Component({
  selector: 'e-table',
  templateUrl: './e-table.component.html',
  styleUrls: ['./e-table.component.scss']
})
export class ETableComponent implements OnInit {
  @Output() onSavechange  = new EventEmitter();
  @Output() OnDelete = new EventEmitter();
 @Input("options") options : TableConfig
 @Input("Data") Data  : any[];
 columns: ColumnComponent[] = [];
 config: any;
 submitted : boolean;
 myForm: FormGroup;
 addButton : boolean;
 editButton : boolean;
 deleteButton: boolean;
  modaltitle  : Observable<string>;
  modalMode : 'Create' | 'Edit' = 'Create'
  seleteditem : any ={};
  formchanged : boolean;
  constructor(private bsmodelService : BsmodalService,private fb: FormBuilder,private translate : TranslateService,private http : HttpClient) {
    
   }

   addColumn(column) {
    this.columns.push(column);
}

  ngOnInit() {
   if(this.options == null)
   throw('ArgumentNullException table options')

   if(this.options.Pageable){
    this.config = {
      itemsPerPage: this.options.Pageable instanceof Pageable || typeof this.options.Pageable === 'object' ? 
      (this.options.Pageable as Pageable).rows : 10,
      currentPage: 1,
  
    };

   }

    
    this.editButton = this.options.editable instanceof Editable || typeof this.options.editable === 'object' ? 
     (this.options.editable as Editable).actions.find(a=> a.name == 'Update') != null : this.options.editable;
        this.addButton =this.options.editable instanceof Editable || typeof this.options.editable === 'object' ?
          (this.options.editable as Editable).actions.find(a=> a.name == 'Create') != null : this.options.editable;
        this.deleteButton = this.options.editable instanceof Editable || typeof this.options.editable === 'object' ?
         (this.options.editable as Editable).actions.find(a=> a.name == 'Delete') != null : this.options.editable;
   
    this.myForm = this.fb.group({});

    for (let field of this.options.columns) {
      console.log(field.name , field.value)
      this.myForm.addControl(
        field.name,
        this.fb.control(field.value ? field.value : '', field.validators)
      );
    }

    this.formChanges();

  }

  formChanges() {
    this.myForm.valueChanges.subscribe(changes => {
      for (let prop in changes) {
      
        if (changes[prop] != this.seleteditem[prop]) {
          this.formchanged = true;
          break;
        }

        else {
          this.formchanged = false;
        }
      }
    });
  }



  delete(){
    this.OnDelete.emit(this.seleteditem);
    this.bsmodelService.close('delete');
  }
  saveChanges() { 
      this.submitted = true;
      if(!this.myForm.valid)
      return;
      this.onSavechange.emit(this.myForm.value);
      this.bsmodelService.close('create');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      
   // only run when property "data" changed
   if (propName === 'Data') {
     
        //  this line will update  values 
        this.Data = changes[propName].currentValue;
       
   }
  }
}

  onPageChange(event){
    this.config.currentPage = event;
  }

  AddNew(event){
    this.modalMode = 'Create'
this.modaltitle = this.translate.get('BUTTONS.ADD');
for (let field of this.options.columns) {
 this.seleteditem[field.name] = field.value != null ? field.value : '';
}
this.myForm.setValue(this.seleteditem);
 this.bsmodelService.open('create')
 this.submitted = false;
  }

  Edit(item : any){
    this.modalMode = 'Edit'
    this.modaltitle = this.translate.get('BUTTONS.EDIT');
    this.bsmodelService.open('create');
    for (let key in item) {
      let value = item[key];
     if(typeof value === 'string'){
       let d =  moment(new Date(value));
       if((value.indexOf('/') > 0 || value.indexOf('-') > 0) && d.isValid()){
        this.seleteditem[key] = new Date(value);
       }
       else
       this.seleteditem[key]  = value;
     }
     else
     this.seleteditem[key]= value;
    
  }

    this.myForm.setValue(this.seleteditem);
  
    this.submitted = false;
    
  }

  Remove(item : any){
    this.seleteditem = item;
    this.bsmodelService.open('delete')
  }

  Openformmodal(){
    this.bsmodelService.open('create')
  }
  
}
