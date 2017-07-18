import { Injectable } from '@angular/core';
import { Category } from './shared/category';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class CategoriesService {
  list: Category[];
  private changes = new ReplaySubject<Category[]>();
  private modified = new ReplaySubject<Boolean>();
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
    this.changes.subscribe(list => this.save(list));
    this.modified.next(false);
    this.changes.next(this.list);
  }

  save(list: Category[]){
    console.log('saving')
    this.localStorageService.set('categories', JSON.stringify(list));
    this.modified.next(false);
  }
  getModified(): Observable<Boolean>{
    return this.modified.asObservable();
  }
  getList(): Observable<Category[]> {
    return this.changes.asObservable();
  }
  append(category): number{
    let position:number = this.list.length;
    this.list.push(category);
    this.changes.next(this.list);
    this.modified.next(true);
    return position;
  }
  get(position: number): Category{
    return this.list[position];
  }

}
