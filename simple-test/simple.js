const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result;
let expected;

test('sum adds two numbers', () => {
  const result = sum(3, 7);
  const expected = 4;
  expect(result).toBe(expected);
});

test('subtract subtracts two numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  }
  catch (error) {
    console.error(`${title} failed: ${error}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`Expected ${expected}, got ${result}`);
      }
    },
  }
}