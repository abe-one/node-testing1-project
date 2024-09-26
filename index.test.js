const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });

  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const expected = 9;
    const integers = [
      { integer: 1 },
      { integer: 9 },
      { integer: 2 },
      { integer: 3 },
    ];
    const actual = utils.findLargestInteger(integers);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  let initialCount = 4;

  beforeEach(() => {
    counter = new utils.Counter(initialCount); // each test must start with a fresh counter
  });

  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toEqual(initialCount);
  });

  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toEqual(initialCount - 1);
  });

  test("[8] the count eventually reaches zero but does not go below zero", () => {
    for (let i = 0; i < initialCount; i++) {
      counter.countDown();
    }
    expect(counter.countDown()).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;

  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toMatch(/summer/i);
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 1; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.next()).toMatch(/fall/i);
  });

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 1; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.next()).toMatch(/winter/i);
  });

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 1; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.next()).toMatch(/spring/i);
  });

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 1; i < 5; i++) {
      seasons.next();
    }
    expect(seasons.next()).toMatch(/summer/i);
  });

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 1; i < 40; i++) {
      seasons.next();
    }
    expect(seasons.next()).toMatch(/spring/i);
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    expect(focus.drive(30)).toEqual(30);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(300);
    expect(focus.tank).toEqual(10);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    expect(focus.drive(600)).toEqual(600);
    focus.refuel(100);
    expect(focus.drive(600)).toEqual(1200);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    const range = focus.range;
    expect(focus.refuel(20)).toEqual(range);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", () => {
    expect.assertions(1);
    return utils
      .isEvenNumberAsync(4)
      .then((bool) => expect(bool).toEqual(true));
  });
  test("[20] resolves false if passed an odd number", () => {
    expect.assertions(1);
    return utils
      .isEvenNumberAsync(5)
      .then((bool) => expect(bool).toEqual(false));
  });
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    expect.assertions(1);
    return utils
      .isEvenNumberAsync({})
      .catch((err) => expect(err).toMatch(/number must be a number/i));
  });
  test('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    expect.assertions(1);
    return utils
      .isEvenNumberAsync(NaN)
      .catch((err) => expect(err).toMatch(/number must be a number/i));
  });
});
