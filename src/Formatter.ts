export class Formatter {
  constructor(private readonly text: string) {}

  public property(property: string, ...values: string[]): Formatter {
    // ...
    return this;
  }

  toString(): string {
    return `{ ${this.text} }`;
  }
}
