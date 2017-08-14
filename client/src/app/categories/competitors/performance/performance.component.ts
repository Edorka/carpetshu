import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { Category } from '../../shared/category'
import { CategoryParameters } from '../../shared/category-parameters'
import { Competitor } from '../../shared/competitor'
import { CategoriesService } from '../../categories.service'

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit, OnDestroy {
  categoryId: number;
  competitorId: number;
  category: Category;
  parameters: CategoryParameters;
  competitor: Competitor;
  private sub: any;
  private timerSub: Subscription;
  timer: Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router, private categories: CategoriesService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.categoryId = +params['position']; // (+) converts string 'id' to a number
       this.category = this.categories.get(this.categoryId);
       this.parameters = this.category.parameters;
       this.competitorId = +params['competitorId'];
       this.competitor = this.category.competitors[this.competitorId];
       if (this.category === undefined || this.competitor === undefined){
          this.router.navigate(['categories'])
       }
    });
  }
  start(){
    var timer = Observable.timer(0, 1000);
    this.timerSub = timer.subscribe(x => console.log(x));
  }
  ngOnDestroy(){
    this.timerSub.unsubscribe();
  }
}
