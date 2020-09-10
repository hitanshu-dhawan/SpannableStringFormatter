import { SpannableStringFormatter } from "../src/index";

describe("text having no properties or no values", () => {
  test("text having no property", () => {
    expect(SpannableStringFormatter.text("Hitanshu Dhawan").toString()).toBe("Hitanshu Dhawan");
  });

  test("text having single property with no value", () => {
    expect(SpannableStringFormatter.text("Hitanshu Dhawan").property("text-color").toString()).toBe("Hitanshu Dhawan");
  });

  test("text having multiple properties with no values", () => {
    expect(
      SpannableStringFormatter.text("Hitanshu Dhawan").property("text-color").property("text-decoration").toString()
    ).toBe("Hitanshu Dhawan");
  });
});

describe("text having single property", () => {
  test("text having single property with single value", () => {
    expect(SpannableStringFormatter.text("Hitanshu Dhawan").property("text-color", "#0000FF").toString()).toBe(
      "{ `Hitanshu Dhawan` <text-color:#0000FF/> }"
    );
  });

  test("text having single property with multiple values", () => {
    expect(
      SpannableStringFormatter.text("Hitanshu Dhawan")
        .property("text-decoration", "underline", "strike-through")
        .toString()
    ).toBe("{ `Hitanshu Dhawan` <text-decoration:underline|strike-through/> }");
  });
});

describe("text having multiple properties", () => {
  test("text having multiple properties with single values", () => {
    expect(
      SpannableStringFormatter.text("Hitanshu Dhawan")
        .property("text-color", "#0000FF")
        .property("text-decoration", "underline")
        .toString()
    ).toBe("{ `Hitanshu Dhawan` <text-color:#0000FF;text-decoration:underline/> }");
  });

  test("text having multiple properties with multiple values", () => {
    expect(
      SpannableStringFormatter.text("Hitanshu Dhawan")
        .property("text-color", "#0000FF")
        .property("text-decoration", "underline", "strike-through")
        .toString()
    ).toBe("{ `Hitanshu Dhawan` <text-color:#0000FF;text-decoration:underline|strike-through/> }");
  });
});
