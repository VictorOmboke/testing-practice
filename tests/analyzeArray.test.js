const analyzeArray = require("../code/analyzeArray");

test("test if analyze array correctly returns the average, min, max, and length of the array [1, 8, 3, 4, 2, 6]", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expected = { average: 4, min: 1, max: 8, length: 6 };
  expect(result).toEqual(expected);
});
