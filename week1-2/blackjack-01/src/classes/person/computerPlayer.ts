import type { Card } from '../card/card';
import { Person } from './person';

export class ComputerPlayer extends Person {
  constructor(name: string, card: Card) {
    const role = 'player';
    super(name, role, card);
  }
}
