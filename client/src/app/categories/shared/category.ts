import {CategoryParameters} from './category-parameters';
import {Competitor} from "./competitor";

export class Category {
  parameters: CategoryParameters;
  competitors: Competitor[];
  constructor (
    parameters: CategoryParameters,
    competitors: Competitor[] = []
  ){
      this.parameters = parameters;
      this.competitors = competitors;
  }
}
