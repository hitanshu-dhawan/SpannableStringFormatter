import { SpannableStringFormatter } from "../src/index";

test("test", () => {
  SpannableStringFormatter.text("SpannableStringParser")
    .property("text-color", "#0000FF")
    .property("text-decoration", "underline", "strike-through")
    .toString();
});
