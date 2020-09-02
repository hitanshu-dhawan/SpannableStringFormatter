import { SpannableStringFormatter } from "../src/index";

test("test", () => {
  expect(
    SpannableStringFormatter.text("SpannableStringParser")
      .property("text-color", "#0000FF")
      .property("text-decoration", "underline", "strike-through")
      .toString()
  ).toBe(
    "{ `SpannableStringParser` <text-color:`#0000FF`;text-decoration:`underline`|`strike-through`/> }"
  );
});
