/**
 * Reverses a string and returns it
 *
 * @param {string} text
 */
function reverseString(text) {
  return text ? text.split('').reverse().join('') : null;
}

module.exports = { reverseString };
