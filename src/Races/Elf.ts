import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static instances = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instances += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;  
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}