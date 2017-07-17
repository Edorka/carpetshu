import { Injectable } from '@angular/core';
import { Category } from './shared/category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class CategoriesService {
  list: Category[];

  constructor(

    private localStorageService: LocalStorageService

  ) {
    var data:any = this.localStorageService.get('categories');
    if ( data === null ){
        this.list = [ ];
    } else {
        var parsed_data:Category[] = JSON.parse(data);
        this.list = parsed_data;
    }

  }
  getList(): Observable<Category[]> {
    return of(this.list);
  }
  append(category): number{
    var position:number = this.list.length;
    this.list.push(category);
    this.localStorageService.set('categories', JSON.stringify(this.list));
    return position;
  }
  get(position: number): Category{
    console.log('this.list', this.list, position, this.list[position]);
    return this.list[position];
  }

}
