const calculator = require("../code/calculator");

test("should correctly add two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("should correctly subtract two numbers", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});
test("should correctly multiply two numbers", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
test("should correctly divide two numbers", () => {
  expect(calculator.divide(100, 2)).toBe(50);
});
