import type { Card } from '../card/card';
import { Person } from './person';

export class Player extends Person {
  constructor(card: Card) {
    const name = 'あなた'
    super(name, card);
  }
}
