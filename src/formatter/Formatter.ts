import { Declaration } from "./Declaration";
import { Constants } from "./Constants";

export class Formatter {
  private readonly declarations: Declaration[] = [];

  constructor(private readonly text: string) {}

  public property(property: string, ...values: string[]): Formatter {
    if (values.length == 0) return this;

    this.declarations.push({ property, values });

    return this;
  }

  public toString(): string {
    if (this.declarations.length == 0) return this.text;

    const template = Constants.SPANNABLE_STRING_TEMPLATE;

    return template
      .replace(Constants.TEXT, this.text)
      .replace(
        Constants.DECLARATIONS,
        this.declarations
          .map(({ property, values }) => `${property}:${values.map((value) => `\`${value}\``).join("|")}`)
          .join(";")
      );
  }
}
