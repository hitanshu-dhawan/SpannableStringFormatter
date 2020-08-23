import add from "../src/index";

test("Test add function", () => {
  expect(add(1, 1)).toBe(2);
  expect(add(1, 2)).toBe(3);
  expect(add(2, 1)).toBe(3);
  expect(add(0, 0)).toBe(0);
});
