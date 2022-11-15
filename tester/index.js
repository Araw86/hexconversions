const hexconversions = require("hexconversions");
console.log(hexconversions.hexToInt("0x123"));

console.log(hexconversions.intToBits(123));


console.log(hexconversions.intToHex(123));

console.log(hexconversions.intToBlock(123, 2, 3));

console.log(hexconversions.blockToInt(3, 2, 3));

const blockArray = [{ startBit: 1, blockSize: 2 }, { startBit: 3, blockSize: 2 }];
console.log(hexconversions.intToBlockObjectArray(123, blockArray));
hexconversions.intToBlockObjectArray(123, blockArray).forEach(element => {
  console.log(element);
});

const blockArrayWithInt = [{ startBit: 1, blockSize: 2, intValue: 2 }, { startBit: 3, blockSize: 2, intValue: 3 }];

console.log(hexconversions.blockObjectArrayToInt(blockArrayWithInt));


console.log(hexconversions.maskAndUpdateIntWithBlockObject(15, { startBit: 0, blockSize: 2, intValue: 2 }));
