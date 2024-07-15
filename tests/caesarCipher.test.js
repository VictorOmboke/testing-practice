const caesarCipher = require("../code/caesarCipher");

test("test wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("test case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("test punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
