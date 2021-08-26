const { setOrigin, bookTrip, goOnTrip, getPosition, reset } = require('./exercise-5');

/**
 * Testfall:
 * Kolla att "origin" sätts och returnerar "true"
 * Kolla att vi får fel om tom sträng skickas
 */
beforeEach(() => {
  //Används för att "tömma" variablerna inför varje test för att starta om. Detta för att varje test ska vara
  //oberoende av varandra
  reset();
});

it('should return true if origin is set with valid parameter', () => {
  const expected = true;

  const actual = setOrigin('Göteborg');

  expect(actual).toBe(expected);
});

it('should return error if non-empty string', () => {
  const expected = 'Origin can not be an empty string';

  const actual = setOrigin('');

  expect(actual).toBe(expected);
});

/*
* Testfall:
* Kolla att vi kan boka en resa
* 
* Kolla att vi får fel om "origin" och "destination" är samma
* Kolla att vi får fel om tom sträng skickas 
*/

it('should book a trip to the destination', () => {
  const expected = true;
  setOrigin('Göteborg');

  const actual = bookTrip('London');

  expect(actual).toBe(expected);
});

it('should return error if origin and destination are the same', () => {
  const expected = 'Destination and origin can not be the same';
  setOrigin('Göteborg');

  const actual = bookTrip('Göteborg');

  expect(actual).toBe(expected);
});

it('should return error if non-empty string', () => {
  const expected = 'Destination can not be an empty string';
  setOrigin('Göteborg');

  const actual = bookTrip('');

  expect(actual).toBe(expected);
});

/*
* Testfall:
* Kolla att vi kan resa från "origin" till "destination"
* 
* Kolla att vi får fel om "origin" inte är satt
* Kolla att vi får fel om "destination" inte är satt
*/

it('should return true and travel to destination', () => {
  const expected = true;
  setOrigin('Göteborg');
  bookTrip('London');
  const actual = goOnTrip();

  expect(actual).toBe(expected);
});

it('should return an error if origin is not set', () => {
  const expected = 'Origin or destination not set';
  bookTrip('London');

  const actual = goOnTrip();

  expect(actual).toBe(expected);
});

it('should return an error if destination is not set', () => {
  const expected = 'Origin or destination not set';
  setOrigin('Göteborg');

  const actual = goOnTrip();

  expect(actual).toBe(expected);
});


/*
* Testfall:
* Kolla att innan resa så är position satt till "origin"
* Kolla att efter resa så är position satt till "destination"
*/

it('should return current position equal to origin', () => {
  const expected = 'Göteborg'
  setOrigin('Göteborg');

  const actual = getPosition();

  expect(actual).toBe(expected);
});

it('should return current position equal to destination', () => {
  const expected = 'London';
  setOrigin('Göteborg');
  bookTrip('London');
  goOnTrip();

  const actual = getPosition();

  expect(actual).toBe(expected);
});