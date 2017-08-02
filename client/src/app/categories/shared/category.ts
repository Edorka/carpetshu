import {CategoryParameters} from './category-parameters';
import {Competitor} from "./competitor";

export class Category {
  parameters: CategoryParameters;
  competitors: Competitor[];
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
