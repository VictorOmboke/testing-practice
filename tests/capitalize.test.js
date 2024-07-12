const capitalize = require("../code/capitalize");

test("capitalize the first character of a string", () => {
  expect(capitalize("string")).toBe("String");
});
