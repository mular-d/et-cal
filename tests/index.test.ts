import { add } from "..";

describe("add should calculate a sum properly", () => {
  test("two positive numbers", () => {
    expect(add(4, 5)).toBe(9);
  });
  test("two negative numbers", () => {
    expect(add(-4, -5)).toBe(-9);
  });
});
