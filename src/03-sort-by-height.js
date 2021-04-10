/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr.filter((elem) => elem !== -1);
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      // eslint-disable-next-line no-param-reassign,prefer-destructuring
      arr[i] = sorted[0];
      sorted.splice(0, 1);
    }
  }
  return arr;
}

module.exports = sortByHeight;
