import type { Card } from '../card/card';
import { Person } from './person';

export class Player extends Person {
  constructor(card: Card) {
    const name = 'あなた';
    const role = 'player';
    super(name, role, card);
  }
}
