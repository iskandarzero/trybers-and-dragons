import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromancerInstance = 0;

  constructor(name: string) {
    super(name);
    Necromancer._necromancerInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._necromancerInstance;
  }
}