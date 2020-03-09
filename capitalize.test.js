describe('capitalize', () => {
  const { capitalize } = require('./capitalize');

  test('returns the given string with its first character capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns null if passed a nullish value', () => {
    expect(capitalize(undefined)).toBe(null);
  });
});
