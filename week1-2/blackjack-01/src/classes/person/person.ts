export class Person {
  constructor(
    protected readonly _name: string,
    protected readonly _role: 'player' | 'dealer'
  ) {}

  get name(): string {
    return this._name;
  }

  get role(): string {
    return this._role;
  }
}
