describe('Calculator', () => {
  const Calculator = require('./calculator');

  describe('add', () => {
    test('returns the sum of all the values passed', () => {
      expect(Calculator.add(1, 2, 3)).toBe(1 + 2 + 3);
    });
  });

  describe('subtract', () => {
    test('returns the subtraction of all the values passed', () => {
      expect(Calculator.subtract(7, 2, 4, 7)).toBe(7 - 2 - 4 - 7);
    });
  });

  describe('multiply', () => {
    test('returns the multiplication of all the values passed', () => {
      expect(Calculator.multiply(2, 2, 2)).toBe(2 * 2 * 2);
    });
  });

  describe('divide', () => {
    test('returns the division of all the values passed', () => {
      expect(Calculator.divide(10, 2, 3)).toBe(10 / 2 / 3);
    });
  });
});