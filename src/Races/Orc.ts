import Race from './Race';

class Orc extends Race {
  maxlifePoints: number;
  static intances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxlifePoints = 74;
    Orc.intances += 1;
  }

  get name(): string {
    return this.name;
  }
    
  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    return Orc.intances;
  }
}

export default Orc;