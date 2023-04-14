import type { CardTypes } from "../interfaces/interfaces";

export class Participant {
  constructor(
    private readonly _name: string,
    private readonly _role: string,
    private _cards: CardTypes[] = []
  ) {}

  get name(): string {
    return this._name;
  }

  get role(): string {
    return this._role;
  }

  get cards(): CardTypes[] {
    return this._cards;
  }

  set cards(cards) {
    this._cards = cards;
  }
}
