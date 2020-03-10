class Cipher {
  /**
   * Ciphers a string using the Caesar cipher technique
   *
   * @static
   * @param {string} plainText Text to cipher
   * @returns {string} Caesar ciphered text
   * @memberof Cipher
   */
  static caesar(plainText) {
    return plainText
      .split('')
      .map(
        char => Cipher._getChar(Cipher._getCharCodeOffsetted(char, 1)))
      .join('');
  }

  /**
   * Get char code offseted
   * 
   * @private
   * @param {string} char
   * @param {number} offset
   * @returns {number}
   * @memberof Cipher
   */
  static _getCharCodeOffsetted(char, offset = 1) {
    return char.match(/[A-Za-z]/) ? char.charCodeAt(0) + offset : char;
  }

  /**
   * Get char from charcode
   * 
   * @private
   * @param {number} charCode
   * @returns {string}
   * @memberof Cipher
   */
  static _getChar(charCode) {
    return typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
  }
}

module.exports = Cipher;