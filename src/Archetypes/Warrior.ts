import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static instances = 0;
  energyType: EnergyType;

  constructor(
    name:string,
  ) {
    super(name);
    this.energyType = 'stamina';
    Warrior.instances += 1;
  }

  get name(): string {
    return this.name;
  }

  static createdArchetypeInstances() {
    return Warrior.instances;
  }
}