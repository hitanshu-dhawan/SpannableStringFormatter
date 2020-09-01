import { Formatter } from "./Formatter";

export class SpannableStringFormatter {
  static text(text: string): Formatter {
    return new Formatter(text);
  }
}
