import { Component, OnInit } from '@angular/core';
import { CategoryParameters } from './category-parameters'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: CategoryParameters[];
  constructor() {
    this.categoriesList = [];
  }

  ngOnInit() {
  }

}
