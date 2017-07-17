import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service'
import { Category } from './shared/category'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Category[];
  constructor(
    private _categoriesService: CategoriesService
  ) {
    this._categoriesService = _categoriesService;
    this.categoriesList = [];
  }

  ngOnInit() {
    //console.log('new subscription', this.categoriesList);
    this._categoriesService.getList()
        .subscribe(categories => {
          this.categoriesList = categories;
        });
  }

}
