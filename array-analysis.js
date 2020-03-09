/**
 * Returns the average number in an array of numbers
 *
 * @param {number[]} arr
 */
function average(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

/**
 * Returns the minimum value from an array of numbers
 *
 * @param {number[]} arr
 */
function min(arr) {
  return Math.min(...arr);
}

/**
 * Returns the maximum value from an array of numbers
 *
 * @param {number[]} arr
 */
function max(arr) {
  return Math.max(...arr);
}

/**
 * Analyzes an array and returns an object with the following properties: average, min, max, and length.
 *
 * @param {number[]} arr
 */
function analyze(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  }
}

module.exports = { analyze };