export default class Archetype {
  private name: string;
  private special: number;
  private cost: number;

  constructor(name: string, special: number, cost: number) {
    this.name = name;
    this.special = special;
    this.cost = cost;
  }
}
