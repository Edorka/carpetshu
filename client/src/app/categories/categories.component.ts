import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: any[];
  constructor() {
    this.categoriesList = [1, 2, 3, 4, 5];
  }

  ngOnInit() {
  }

}
