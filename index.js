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


function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  else {
    return (destination - start) * 264;
  }

}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
