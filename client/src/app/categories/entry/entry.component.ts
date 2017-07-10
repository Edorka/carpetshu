import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../categories.service'
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

  constructor(private _categoriesService: CategoriesService) {
    this._categoriesService = _categoriesService;
    this.parameters = new CategoryParameters("New");
  }
  ngOnInit() {
    console.log( this.parameters );
  }
  addCategory(){
    var category = new Category(this.parameters);
    this._categoriesService.append(category);
    this.parameters = new CategoryParameters("new one")
  }


}
