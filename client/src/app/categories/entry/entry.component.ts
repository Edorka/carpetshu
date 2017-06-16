import { Component, OnInit } from '@angular/core';
import { CategoryParameters } from '../category-parameters'


@Component({
  selector: 'category-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class CategoryEntryComponent implements OnInit {

  parameters = new CategoryParameters("3", 1 ,1, 0)
  constructor(
  ) {

  }

  ngOnInit() {
  }

}
