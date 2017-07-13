import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service'
import { Category } from './shared/category'
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Category[];
  constructor(private _categoriesService: CategoriesService,
              private localStorageService: LocalStorageService
  ) {
    this._categoriesService = _categoriesService;
  }

  ngOnInit() {
    this._categoriesService.getList()
        .then(categories => {
          this.categoriesList = categories
          this.localStorageService.set('categories', JSON.stringify(categories));
        });
  }

}
