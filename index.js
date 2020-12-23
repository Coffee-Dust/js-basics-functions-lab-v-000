// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return (42 > blocks) ? 42 - blocks : blocks - 42
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blockDiff = startBlock - endBlock
  return (startBlock - endBlock) * 264
}