/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 */
function trimProperties(obj) {
  const entries = Object.entries(obj);
  const trimmedObj = entries.reduce((acc, entry) => {
    return { ...acc, [entry[0]]: entry[1].trim() };
  }, {});
  return trimmedObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed

 */
function trimPropertiesMutation(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => (obj[key] = obj[key].trim()));
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 */
function findLargestInteger(integers) {
  const largest = integers.reduce((acc, int) =>
    acc.integer >= int.integer ? acc : int
  );
  return largest.integer;
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber + 1;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   */
  countDown() {
    this.count === 0 ? this.count : this.count--;
    return this.count;
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.seasons = ["spring", "summer", "fall", "winter"];
    this.now = 0;
    // ✨ initialize whatever properties are needed
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"

   */
  next() {
    this.now === 3 ? (this.now = 0) : this.now++;
    return this.seasons[this.now];
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initializes with zero miles
    this.tankSize = tankSize;
    this.tank = tankSize;
    this.mpg = mpg;
    this.range = mpg * this.tank;
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   */
  drive(distance) {
    const actualDistance = distance > this.range ? this.range : distance;
    this.odometer = this.odometer + actualDistance;
    this.tank = this.tank - actualDistance / this.mpg;
    this.range = this.mpg * this.tank;
    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   */
  refuel(gallons) {
    this.tank = this.tankSize < this.tank ? this.tankSize : gallons;
    this.range = this.mpg * this.tank;
    return this.range;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 */
function isEvenNumberAsync(number) {
  const isEven = (num) => !(num % 2);
  const promise = new Promise((resolve, reject) => {
    (typeof number === "number") & !isNaN(number)
      ? resolve(isEven(number))
      : reject("number must be a number");
  });
  return promise;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
