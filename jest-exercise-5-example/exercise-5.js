    /* 5a. Attempts to define the user's current location. The
     * parameter must be a non-empty string. Returns true if successful.
     *
     * Testfall:
     * Kolla att "origin" sätts och returnerar "true"
     * Kolla att vi får fel om tom sträng skickas
     */
let origin = '';
let destination = '';
let currentPosition = '';

function setOrigin(city) {
  if (city.length > 0) {
    origin = city;
    currentPosition = city;
    return true;
  } else {
    return 'Origin can not be an empty string';
  }
}

    /* 5b. Attempts to book a trip (buy a ticket) to the destination.
     * The parameter must be a non-empty string that is not equal
     * to the origin position. Returns true if successful.
     * 
     * Testfall:
     * Kolla att vi kan boka en resa
     * 
     * Kolla att vi får fel om "origin" och "destination" är samma
     * Kolla att vi får fel om tom sträng skickas 
     */
function bookTrip(dest) {
  if (origin !== dest) {
    if (dest.length > 0) {
      destination = dest;
      return true;
    } else {
      return 'Destination can not be an empty string';
    }
  } else {
    return 'Destination and origin can not be the same';
  }
}

    /* 5c. Attempts to travel from an origin to a destination.
     * Requires both origin and destination to be set. Should
     * throw an Error if either origin or destination has not
     * been set. Returns false if origin and destination have been
     * set, but have incorrect values; otherwise returns true.
     * 
     * Testfall:
     * Kolla att vi kan resa från "origin" till "destination"
     * 
     * Kolla att vi får fel om "origin" inte är satt
     * Kolla att vi får fel om "destination" inte är satt
     */
function goOnTrip() {
  if (origin.length > 0 && destination.length > 0) {
    currentPosition = destination;
    return true;
  } else {
    return 'Origin or destination not set';
  }
}

    /* 5d. Returns the current position of the user. Before a trip
     * has been made, the position is equal to origin. After a
     * trip it is equal to destination. May throw an exception.
     * 
     * Testfall:
     * Kolla att innan resa så är position satt till "origin"
     * Kolla att efter resa så är position satt till "destination"
     */	
function getPosition() {
  return currentPosition;
}

//Används för att "tömma" variablerna inför varje test för att starta om. Detta för att varje test ska vara
//oberoende av varandra
function reset() {
  origin = '';
  destination = '';
  currentPosition = '';
}

module.exports = { setOrigin, bookTrip, goOnTrip, getPosition, reset }