import { Component, OnInit } from '@angular/core';
import { Category } from '../../category'


@Component({
  selector: 'category-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class CategoryEntryComponent implements OnInit {

  model = new Category("Test", 1 ,1)
  constructor(
  ) {

  }

  ngOnInit() {
  }

}
