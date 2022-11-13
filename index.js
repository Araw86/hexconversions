
function hexToInt(hexValue) {
  return parseInt(hexValue, 16);
}

function intToBits(intValue) {
  const bitArray = intValue.toString(2);

}

export const hexconversions = { hexToInt: hexToInt };

const result = intToBits(123);
console.log(result);