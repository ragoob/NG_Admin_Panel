import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TableConfig, Editable } from 'src/app/core/libs/editable/tableConfig';
import { YearService } from 'src/app/core/services/yearService';
import { Observable } from 'rxjs';
export class Year{
  dateFrom:Date;
dateTo: Date;
id: number;
isActive: boolean;
name: string;

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private yearservice : YearService) { }
  todolist: Observable<Year[]>;
  tableOption :TableConfig

  ngOnInit() {
    this.tableOption = {
      columns : [{
        name : "id",
        title : "id",
        translate : "",
       type: 'hidden',
       cellwidth : '10%',
       value : 0
      },
      {
        name : "dateFrom",
        title : "تاريخ البداية",
        translate : "",
        type: 'date',
        value : new Date(),
        validators : [Validators.required]
      },
      {
        name : "dateTo",
        title : "تاريخ النهاية",
        translate : "",
        type: 'date',
        value : new Date(),
        validators : [Validators.required]
      },
      {
        name : "name",
        title : "الأسم",
        translate : "",
        type : 'text',
        validators : [Validators.required,Validators.maxLength(4)]
    
        
      },

      {
        name : "isActive",
        title : "الحالة",
        translate : "",
        type : "checkbox",
        value:true,
        
      },
      
    ],
    editable : true,
    Pageable :true,
    
    }

    this.LoadTodo();
   
  }

  

  LoadTodo(){
    this.todolist = this.yearservice.get();
  }

  delete(item: Year){
   this.yearservice.delete(item.id)
   .subscribe(d=> {
     this.LoadTodo();
   },error=> {alert(error.error)});
  }
  Savechanges(item : Year){
    var observe : Observable<any>;
    if(item.id > 0)
      observe =   this.yearservice.put(item);
      else
      observe = this.yearservice.post(item);
      observe.subscribe(d=> {
    
     this.LoadTodo();
   },error=>{alert(error.error)})
  }
}
