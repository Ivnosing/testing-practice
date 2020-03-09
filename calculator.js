class Calculator {
  static add(...values) {
    return values.reduce((prev, curr) => prev + curr, 0);
  }
  
  static subtract(...values) {
    return values.slice(1).reduce((prev, curr) => prev - curr, values[0]);
  }
  
  static multiply(...values) {
    return values.reduce((prev, curr) => prev * curr, 1);
  }
  
  static divide(...values) {
    return values.slice(1).reduce((prev, curr) => prev / curr, values[0]);
  }
}

module.exports = Calculator;
