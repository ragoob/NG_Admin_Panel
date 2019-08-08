import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { Validators } from '@angular/forms';
import { TableConfig, Editable } from 'src/app/core/libs/editable/tableConfig';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private todoservice : TodoService) { }
  todolist: Observable<Todo[]>;
  tableOption :TableConfig

  ngOnInit() {
    this.tableOption = {
      columns : [{
        name : "id",
        title : "id",
        translate : "",
       type: 'text',
       cellwidth : '10%',
       editable : false,
      },
      {
        name : "userId",
        title : "user Id",
        translate : "",
        type: 'text',
      },
      {
        name : "title",
        title : "Title",
        translate : "",
        type: 'text',
        validators : [Validators.required]
      },
      {
        name : "completed",
        title : "Completed",
        translate : "",
        type : 'checkbox',
        value:true,
        template : `<input type="checkbox" [checked]="item[col.name]" />`
        
      },
      
    ],
    editable : true,
    Pageable :true
    }
    this.LoadTodo();
  }
  LoadTodo(){
    this.todolist = this.todoservice.get();
  }

}
