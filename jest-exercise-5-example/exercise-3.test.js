const { isWaterBoiling } = require('./exercise-3');

/**
 * Året är 2027. Som en del i ett system för kylning av reaktorer i fusionskraftverk, som ditt företag bygger, 
 * behövs en modul som talar om när olika kylvätskor börjar koka. 
 * Din uppgift är att skriva den första funktionen. 
 * Till din hjälp har du en kravspec i form av några kommentarer i koden:

// Returns true if water would be boiling at the specified temperature 
// Throws an Error on illegal input isWaterBoiling(degreesCelsius);
*/

it('should return true if water would be boiling at the specified temperature', () => {
  //Arrange
  const expected = true;

  //Act
  const actual = isWaterBoiling(110);

  //Assert
  expect(actual).toBe(expected);
});

it('should return false if water would not be boiling at the specified temperature', () => {
  //Arrange
  const expected = false;

  //Act
  const actual = isWaterBoiling(50);

  //Assert
  expect(actual).toBe(expected);
});

it('should return error if illegal input', () => {
  //Arrange
  const expected = 'Illegal input';

  //Act
  const actual = isWaterBoiling('Hej');

  //Assert
  expect(actual).toBe(expected);
});
