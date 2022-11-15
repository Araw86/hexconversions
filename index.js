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

/**
 * 
 * @param {integer} intValue input value to be filtered
 * @param {integer} startBit which bit to start filter 
 * @param {integer} blockSize how many bits to filter
 * @returns 
 */
const intToBlock = (intValue, startBit, blockSize) => ((intValue >> startBit) & (Math.pow(2, blockSize) - 1))

/*
  blockArray = [startBit: 0, blockSize:1 ]
*/

/**
 * Take hex value in int. And for each block parse the value. Store back to block array
 * @param {integer} intValue - hex value
 * @param {Array} blockArray - array of object with block descriptions ex: blockArray = [startBit: 0, blockSize:1 ]
 * @returns return array of blocks ex blockArray = [startBit: 0, blockSize:1, intValue: 1] if int value have 1 on bit 0
 */
const intToBlockObjectArray = (intValue, blockArray) => blockArray.map(x => ({ ...x, intValue: intToBlock(intValue, x.startBit, x.blockSize) }))

/**
 * convert block to integer value
 * @param {integer} blockValue value in block
 * @param {integer} startBit start bit of block
 * @param {integer} blockSize size of block
 * @returns integer with block value on correct place
 */
const blockToInt = (blockValue, startBit, blockSize) => ((blockValue & (Math.pow(2, blockSize) - 1)) << startBit);

/**
 * function take blockArray and create int from it
 * @param {Array} blockArray array of block objects in this format [{ startBit: 1, blockSize: 2, intValue: 2 },...]
 * @returns retunr integer form block
 */
const blockObjectArrayToInt = (blockArray) => blockArray.reduce((value, currentBlock) => (value | blockToInt(currentBlock.intValue, currentBlock.startBit, currentBlock.blockSize)), 0);

/**
 * Function take int and mask it based on blockObject and replace content with block object value. The mask size is by default 32 bits possible to change
 * @param {integer} intValue value to be masked and updated
 * @param {Object} blockObject blockObject containing info which bits to mask and value to replace it format: [{ startBit: 1, blockSize: 2, intValue: 2 },...]
 * @param {integer} nBits masking size 
 * @returns 
 */
const maskAndUpdateIntWithBlockObject = (intValue, blockObject, nBits = 32) => ((intValue & ((Math.pow(2, nBits) - 1) ^ blockToInt(Math.pow(2, blockObject.blockSize) - 1, blockObject.startBit, blockObject.blockSize))) | blockToInt(blockObject.intValue, blockObject.startBit, blockObject.blockSize));


const hexconversions = { hexToInt: hexToInt, intToHex: intToHex, intToBits: intToBits, intToBlock: intToBlock, blockToInt: blockToInt, intToBlockObjectArray: intToBlockObjectArray, blockObjectArrayToInt: blockObjectArrayToInt, maskAndUpdateIntWithBlockObject: maskAndUpdateIntWithBlockObject };

module.exports = hexconversions;
