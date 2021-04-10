/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
// ^-начало строки, $-конец, 2 кортежа 5раз с символами, затем кортеж без тире
const isMAC48Address = (n) => /^([0-9A-F]{2}[-]){5}([0-9A-F]{2})$/i.test(n);

module.exports = isMAC48Address;
