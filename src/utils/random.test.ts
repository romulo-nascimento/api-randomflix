import { getRandomElement } from './random';

describe('utils/random', () => {
  it('should return a random element', () => {
    const fruits = ['apple', 'banana'];
    const selectedFruit = getRandomElement(fruits);

    expect(fruits.includes(selectedFruit)).toBeTruthy();
  });
});