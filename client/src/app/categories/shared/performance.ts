import {Competitor} from "./competitor";

export class Performance {
  competitor: Competitor;
  techQualityScore: number = 0.0;
  overAllScore: number = 0.0;
  nanDuScore: number = 0.0;
  begins: Date;
  duration: number = 0;

  constructor ( competitor:Competitor ){
    this.competitor = competitor;

  }

}
