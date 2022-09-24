import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _firstPlayer: Fighter;
  private _secondPlayer: Fighter;

  constructor(firstPlayer: Fighter, secondPlayer: Fighter) {
    super(firstPlayer);
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  fight() {
    while (this._firstPlayer.lifePoints !== -1
      && this._secondPlayer.lifePoints !== -1) {
      this._firstPlayer.attack(this._secondPlayer);
      this._secondPlayer.attack(this._firstPlayer);
    }

    return this._firstPlayer.lifePoints === -1 ? -1 : 1;
  }
}
