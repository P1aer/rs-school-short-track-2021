/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // бинарный поиск
  let begin = 0;
  let end = array.length - 1;
  let mid = Math.floor((end + begin) / 2);

  while (begin <= end) {
    mid = Math.floor((end + begin) / 2);
    if (array[mid] === value) return mid;
    if (array[mid] < value) begin = mid + 1;
    if (array[mid] > value) end = mid - 1;
  }
  return -1;
}

module.exports = findIndex;
