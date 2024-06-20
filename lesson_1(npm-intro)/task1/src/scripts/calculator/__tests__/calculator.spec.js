import { sum, mult } from '../calculator.js';

it ('should sum two numbers', () => {
  expect(sum(0, 0)).toEqual(0);
  expect(sum(0, 1)).toEqual(1);
  expect(sum(1, 1)).toEqual(2);
})

it ('should multiply two numbers', () => {
  expect(mult(0, 0)).toEqual(0);
  expect(mult(0, 1)).toEqual(0);
  expect(mult(1, 1)).toEqual(1);
})