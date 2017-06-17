import { Component, OnInit, Input } from '@angular/core';
import { CategoryParameters } from '../category-parameters'


@Component({
  selector: 'category-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class CategoryEntryComponent implements OnInit {
  list: any[]
  @Input('appendTo')
  set appentTo(list: any[]){
      console.log(list);
      this.list = list;
  }
  parameters = new CategoryParameters("", 3 , 3, 0)
  constructor(
  ) {

  }

  ngOnInit() {
    console.log( this.list );
  }
  addCategory(){
    console.log('parameters', this.parameters);
    this.list.push(this.parameters);
    this.parameters = new CategoryParameters("", 3 , 3, 0)
  }

}
