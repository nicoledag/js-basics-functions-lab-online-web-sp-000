// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  const hdqr = 42;
  if (blocks > hdqr) {
    return blocks - hdqr;
  }
  else {
    return hdqr - blocks;
  }
}

function distanceFromHqInFeet(street) {
  const blockInFeet = 264;
  return distanceFromHqInBlocks(blocks) * blockInFeet;



}
