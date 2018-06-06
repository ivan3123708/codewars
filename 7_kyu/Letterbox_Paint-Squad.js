var paintLetterboxes = function(start, end) {
  var result= [];
  var nums = '';
  var digits = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };

  for (let i = start; i <= end; i++) {
    nums += i;
  }

  for (let i = 0; i < nums.length; i++) {
    digits[nums[i]]++
  }

  for (key in digits) {
    result.push(digits[key]);
  }

  return result;
};