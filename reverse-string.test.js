describe('reverseString', () => {
  const { reverseString } = require('./reverse-string');
  
  test('returns the given string but reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
