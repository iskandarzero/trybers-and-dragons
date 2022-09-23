import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this._halflingInstance;
  }
}