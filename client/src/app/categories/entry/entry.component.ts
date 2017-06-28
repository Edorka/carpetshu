import { Component, OnInit, Input } from '@angular/core';
import { CategoryParameters } from '../shared/category-parameters'


@Component({
  selector: 'category-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class CategoryEntryComponent implements OnInit {
  parameters: CategoryParameters = {
    name: 'New one',
    tqArbiters: 3,
    oaArbiters: 3,
    ndArbiters: 0
  }
  list: CategoryParameters[]
  @Input('appendTo')
  set appentTo(list: CategoryParameters[]){
      console.log(this);
      console.log(list);
      this.list = list;
  }
  constructor(
  ) {

  }
  ngOnInit() {
    console.log( this.parameters );
  }
  addCategory(){
    console.log('parameters', this.parameters);
    this.list.push(this.parameters);
    this.parameters = new CategoryParameters("new one", 3 , 3, 0)
  }

}
