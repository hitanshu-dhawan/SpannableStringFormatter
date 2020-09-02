import { Declaration } from "./Declaration";

export class Formatter {
  private readonly declarations: Declaration[] = [];

  constructor(private readonly text: string) {}

  public property(property: string, ...values: string[]): Formatter {
    this.declarations.push({ property, values });
    return this;
  }

  public toString(): string {
    return `{ \`${this.text}\` <${this.text}/> }`;
  }
}
