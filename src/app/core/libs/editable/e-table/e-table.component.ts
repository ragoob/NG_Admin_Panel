import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BsmodalService } from '../../bs-modals/bs-modal/bsmodal.service';
import { ValidatorFn, FormGroup, FormBuilder } from '@angular/forms';
import { TableConfig, Pageable, Editable, Crud, CrudOptions, Columns } from '../tableConfig';
import { TouchSequence } from 'selenium-webdriver';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'e-table',
  templateUrl: './e-table.component.html',
  styleUrls: ['./e-table.component.scss']
})
export class ETableComponent implements OnInit {
 @Input("options") options : TableConfig
 @Input("Data") Data  : any[];
 @Input("columns") columns : Columns[]
 config: any;
 submitted : boolean;
 myForm: FormGroup;
 addButton : boolean;
 editButton : boolean;
 deleteButton: boolean;
  modaltitle  : Observable<string>;
  modalMode : 'Create' | 'Edit' = 'Create'
  constructor(private bsmodelService : BsmodalService,private fb: FormBuilder,private translate : TranslateService,private http : HttpClient) {
    
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
      this.myForm.addControl(
        field.name,
        this.fb.control(field.value ? field.value : '', field.validators)
      );
    }


  }

  onPageChange(event){
    this.config.currentPage = event;
  }

  AddNew(event){
this.modaltitle = this.translate.get('BUTTONS.ADD');
 this.myForm.reset();
 this.bsmodelService.Open();
 this.submitted = false;
  }

  Edit(item : any){
    this.modaltitle = this.translate.get('BUTTONS.EDIT');
    this.bsmodelService.Open();
    this.myForm.setValue(item);
    this.submitted = false;
  }

  Delete(item : any){
    
  }

  saveChanges()
  {
    this.submitted = true;
   if(!this.myForm.valid)
   return;

   if(this.options.crud){
     this.CreateOrUpdate(this.options.crud);
   }
  
   this.bsmodelService.Close();
  }

  CreateOrUpdate(crud  :Crud){
    if(this.modalMode == 'Create')
    this.Create(crud);
    else
   this.Update(crud);
  }

  Create(crud : Crud){
    if((crud.Create as CrudOptions).customFunction){
      (crud.Create as CrudOptions).customFunction(this.myForm.value);
     }

     else{
       let URL : string = typeof crud.Create === 'object' ? 
       (crud.Create as CrudOptions).apiURL : crud.Create;
       let HeaderOptions = (crud.Create as CrudOptions).headers;
       this.http.post(URL,this.myForm.value,{headers : HeaderOptions} ).subscribe(d=> {
             this.Data.push(d);
       });
     }
  }

  Update(crud : Crud){
    if((crud.Update as CrudOptions).customFunction){
      (crud.Update as CrudOptions).customFunction(this.myForm.value);
     }

     else{
       let URL : string = typeof crud.Update === 'object' ? 
       (crud.Update as CrudOptions).apiURL : crud.Update;
       let HeaderOptions = (crud.Create as CrudOptions).headers;
       this.http.put(URL,this.myForm.value,{headers : HeaderOptions}).subscribe(d=> {
             this.Data.push(d);
       });
     }
  }


  
}
