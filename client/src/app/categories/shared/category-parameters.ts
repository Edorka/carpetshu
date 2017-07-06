export class CategoryParameters {
  name: string;
  oaArbiters: number;
  tqArbiters: number;
  ndArbiters: number;
  constructor (
    name: string,
    oaArbiters: number = 3,
    tqArbiters: number = 3,
    ndArbiters: number = 0
  ){
    this.name = name;
    this.oaArbiters = oaArbiters;
    this.tqArbiters = tqArbiters;
    this.ndArbiters = ndArbiters;
  }
}
