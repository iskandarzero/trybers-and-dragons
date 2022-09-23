import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._elfInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this._elfInstance;
  }
}