import { Injectable } from '@angular/core';
import { Category } from './shared/category';

@Injectable()
export class CategoriesService {
  list: Category[];

  constructor() {
    this.list = [  ];
  }
  getList(): Promise<Category[]> {
    return Promise.resolve(this.list);
  }
  append(category): number{
    var position:number = this.list.length;
    this.list.push(category);
    return position;
  }
  get(position: number): Category{
    console.log('this.list', this.list, position, this.list[position]);
    return this.list[position];
  }

}
