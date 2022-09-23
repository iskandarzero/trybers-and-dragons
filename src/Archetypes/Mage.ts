import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _mageInstance = 0;

  constructor(name: string) {
    super(name);
    Mage._mageInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._mageInstance;
  }
}