import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  timer: Observable<number>;
  constructor() { }

  ngOnInit() {
  }
  start(){
    var timer = Observable.timer(0, 1000);
    timer.subscribe(x => console.log(x));
  }

}
