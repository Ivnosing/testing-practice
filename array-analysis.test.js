describe('array analysis', () => {
  const { analyze } = require('./array-analysis');
  
  describe('analyze', () => {
    test('returns object with correct property values', () => {
      const array = [1, 8, 3, 4, 2, 6];
      const analyzed = analyze(array);

      expect(analyzed.average).toBe(4);
      expect(analyzed.min).toBe(1);
      expect(analyzed.max).toBe(8);
      expect(analyzed.length).toBe(6);
    });
  });
});