
const hexToInt = (hexValue) => {
  return parseInt(hexValue, 16);
}

const intToBits = (intValue, nBits = 32) => [...Array(nBits)].map((x, i) => (intValue >> i) & 1);

module.exports.hexconversions = { hexToInt: hexToInt, intToBits: intToBits };
