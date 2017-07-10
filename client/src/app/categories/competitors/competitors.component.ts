import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service'
import { Category } from '../shared/category'

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})
export class CompetitorsComponent implements OnInit {
  id: number;
  category: Category;
  private sub: any;
  constructor(private route: ActivatedRoute, private categories: CategoriesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['position']; // (+) converts string 'id' to a number
       this.category = this.categories.get(this.id);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
