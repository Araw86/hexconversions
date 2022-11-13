/**
 * function converst string hex value to integer
 * @param {string} hexValue 
 * @returns int value of hex
 */
const hexToInt = (hexValue) => {
  return parseInt(hexValue, 16);
}

/**
 * function converst int to hex string
 * @param {integer} intValue 
 * @returns return string hex value
 */
const intToHex = (intValue) => {
  return intValue.toString(16).toUpperCase();
}

/**
 * function convert int value intValue to nBits array of bits 
 * @param {integer} intValue 
 * @param {integer} nBits 
 * @returns array of bits
 */
const intToBits = (intValue, nBits = 32) => [...Array(nBits)].map((x, i) => (intValue >> i) & 1);

const intToBlocks = (intValue, startBit, blockSize) => ((intValue >> startBit) & (Math.pow(2, blockSize) - 1))

const hexconversions = { hexToInt: hexToInt, intToHex: intToHex, intToBits: intToBits, intToBlocks: intToBlocks };

module.exports = hexconversions;
