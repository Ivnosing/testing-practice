/**
 * Capitalizes the first character of a string and returns it
 *
 * @param {string} text
 */
function capitalize(text) {
  return text && text[0] ? text[0].toLocaleUpperCase() + text.slice(1) : null;
}

module.exports = { capitalize };
