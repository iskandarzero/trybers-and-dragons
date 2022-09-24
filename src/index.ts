import Character from './Character';
import { Mage, Ranger, Warrior } from './Archetypes';
import { Dwarf, Elf, Orc } from './Races';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';
import getRandomInt from './utils';

const race1 = new Elf('Dez leonhardt', getRandomInt(1, 10));
const race2 = new Dwarf('Onyx Rocksmith', getRandomInt(1, 10));
const race3 = new Orc('Brugo Vicenguini', getRandomInt(1, 10));

const archetype1 = new Warrior(race1.name);
const archetype2 = new Ranger(race2.name);
const archetype3 = new Mage(race3.name);

const player1 = new Character(race1.name, race1, archetype1);
const player2 = new Character(race2.name, race2, archetype2);
const player3 = new Character(race3.name, race3, archetype3);

for (let i = 0; i < getRandomInt(1, 8); i += 1) {
  player1.levelUp(); 
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };