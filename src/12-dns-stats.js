/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach((dom) => {
    // переворачиваем массив
    const splited = dom.split('.').reverse();
    splited.reduce((str, item) => {
      let strcopy = str;
      // добавляем строку с точкой в начале
      strcopy += `.${item}`;
      // добавляем в объект
      if (result[strcopy]) {
        result[strcopy]++;
      } else {
        result[strcopy] = 1;
      }
      return strcopy;
    }, '');
  });
  return result;
}

module.exports = getDNSStats;
