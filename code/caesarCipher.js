function caesarCipher(string, shift) {
  function shiftChar(char, shift) {
    const isUpperCase = char === char.toUpperCase();
    const alphabetStart = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const alphabetSize = 26;

    const shiftedChar = String.fromCharCode(
      alphabetStart +
        ((char.charCodeAt(0) - alphabetStart + shift) % alphabetSize)
    );

    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
  }

  const shiftedStr = string.replace(/[a-zA-Z]/g, (char) =>
    shiftChar(char, shift)
  );

  return shiftedStr;
}

module.exports = caesarCipher;
