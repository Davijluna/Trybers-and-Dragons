import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(attackPoints: number): number {
    throw new Error('Method not implemented.');
  }
}