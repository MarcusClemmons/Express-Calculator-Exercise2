
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  
  
  function Mode(arr) {
  let freqCounter = createFrequencyCounter(arr);
  let count = 0;
  let mostFrequent;
  for (let key in freqCounter) {
  if (freqCounter[key] > count) {
  mostFrequent = key;
  count = freqCounter[key];
  }
  }
  return +mostFrequent;
  }
  
  
  function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }
  
  function Mean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
  return acc + cur;
  }) / nums.length
  }
  
  function Median(nums){
  nums.sort((a, b) => a - b);
  let middleIndex = Math.floor(nums.length / 2);
  let median;
  if (nums.length % 2 === 0) {
  median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
  median = nums[middleIndex];
  }
  return median
  }
  
  
  
  module.exports = {
    createFrequencyCounter: createFrequencyCounter  ,
    Mean:Mean ,
    Median: Median,
    Mode: Mode ,
    convertAndValidateNumsArray: convertAndValidateNumsArray
  };
  