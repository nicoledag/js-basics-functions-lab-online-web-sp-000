// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const hdqr = 42;
  if (street > hdqr) {
    return street - hdqr;
  }
  else {
    return hdqr - street;
  }
}
