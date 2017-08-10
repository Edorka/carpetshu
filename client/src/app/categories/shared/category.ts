import {CategoryParameters} from './category-parameters';
import {Competitor} from "./competitor";
import {Performance} from  "./performance";

export class Category {
  parameters: CategoryParameters;
  competitors: Competitor[];
  performances: Performance[];
  constructor (
    parameters: CategoryParameters = null,
    competitors: Competitor[] = []
  ){
      this.parameters = parameters;
      this.competitors = competitors;
  }
  fromJSON(json: Object){
      this.parameters = json['parameters'] as CategoryParameters;
      this.competitors = json['competitors'] as Competitor[];
  }
  addCompetitor(competitor: Competitor){
      this.competitors.push(competitor);
  }
}
