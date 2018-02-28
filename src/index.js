module.exports = function getZerosCount(number, base) {
  var a = base, arr = [];

  for(var i = 2; i <= 256; i++) {
    if(a % i == 0) {
      arr.push(i);
      a = a / i--;
    };
  };

  if(arr.length == 1) {
    var x = base;
  };

  var sumMinElem = 0, sumMaxElem = 0, minElem = Math.min(...arr), maxElem = Math.max(...arr);
  for(var i = 0; i < arr.length; i++) {
    if(minElem == arr[i]) sumMinElem += arr[i];
    if(maxElem == arr[i]) sumMaxElem += arr[i];
  };

  if(sumMinElem >= 2 * sumMaxElem) x = minElem;
  else x = maxElem;

  var counter = 0, counterOfPower = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == x) counterOfPower++;
  };

  for(var i = x; i <= number; i *= x) {
    counter += Math.floor(number / i);
  };

  if(counterOfPower) return Math.floor(counter / counterOfPower);
  return counter;
}
