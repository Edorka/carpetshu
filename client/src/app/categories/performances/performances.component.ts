import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service'
import { Category } from '../shared/category'
import { Competitor } from '../shared/competitor'

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {
  id: number;
  category: Category;
  private sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private categories: CategoriesService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['position']; // (+) converts string 'id' to a number
       this.category = this.categories.get(this.id);
       if (this.category === undefined){
          this.router.navigate(['categories'])
       }
    });
  }
  add(competitor: Competitor){
    console.log('adding ',competitor, 'to', this.category);
    this.category.addCompetitor(competitor);
    this.categories.setModified();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
