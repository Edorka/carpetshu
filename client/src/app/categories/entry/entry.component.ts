import { Component, OnInit, Input } from '@angular/core';
import { CategoryParameters } from '../shared/category-parameters'
import { Category } from '../shared/category'

@Component({
  selector: 'category-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

export class CategoryEntryComponent implements OnInit {
  parameters: CategoryParameters;
  list: Category[];
  @Input('appendTo')
  set appentTo(list: Category[]){
      this.list = list;
  }
  constructor(
  ) {
    this.parameters = new CategoryParameters("New");
  }
  ngOnInit() {
    console.log( this.parameters );
  }
  addCategory(){
    var category = new Category(this.parameters);
    console.log('category', category);
    this.list.push(category);
    this.parameters = new CategoryParameters("new one")
  }

}
