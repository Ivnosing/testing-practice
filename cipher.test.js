describe('Cipher', () => {
  const Cipher = require('./cipher');

  describe('caesar', () => {
    test('returns the text ciphered using Caesar cipher technique', () => {
      expect(Cipher.caesar('Hello Caesar!')).toBe('Ifmmp Dbftbs!');
    });
  });
});