import { Component, OnInit } from '@angular/core';
import { Category } from './shared/category'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Category[];
  constructor() {
    this.categoriesList = [];
  }

  ngOnInit() {
  }

}
