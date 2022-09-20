import { sum } from "./sum";

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 1)).toBe(2);
    });
  });
