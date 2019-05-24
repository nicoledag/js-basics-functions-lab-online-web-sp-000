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

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;

}


function distanceTravelledInFeet(street1, street2) {
  if (street1 > street2) {
    return (street1 - street2) * 264;
  }
  else {
    return (street2 - street1) * 264;
  }


}
