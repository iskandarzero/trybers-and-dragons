import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warriorInstance = 0;

  constructor(name: string) {
    super(name);
    Warrior._warriorInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._warriorInstance;
  }
}