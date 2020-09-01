import { Formatter } from "./Formatter";

export class SpannableStringFormatter {
  public static text(text: string): Formatter {
    return new Formatter(text);
  }
}
