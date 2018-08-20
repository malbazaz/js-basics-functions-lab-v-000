// Code your solution in this file!
function distanceFromHqInBlocks(num){
  let dist;
  if(num > 42) {
    dist = num - 42;
  } else {
    dist = 42 - num
  }
  return dist;
}

function distanceFromHqInFeet(num){
let distft;
if(num > 42) {
  distft = (num - 42)*264;
} else {
  distft = (42 - num)*264;
}
return distft;
}

function distanceTravelledInFeet(num1, num2){
  let dist;
  if(num1 > num2) {
    dist = num1- num2;
  } else {
    dist = num2 - num1;
  }
  return dist;
}
