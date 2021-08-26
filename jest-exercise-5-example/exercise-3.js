function isWaterBoiling(degreesCelsius) {
  if (typeof degreesCelsius === 'number') {
    if(degreesCelsius >= 108) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Illegal input';
  }
}

module.exports = { isWaterBoiling }