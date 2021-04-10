/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = '';
  const word = str.split('');
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      let k = 2;
      i++;
      while (word[i] === word[i + 1] && i !== word.length - 1) {
        k++;
        i++;
      }
      string += k;
    }
    string += word[i];
  }
  return string;
}

module.exports = encodeLine;
