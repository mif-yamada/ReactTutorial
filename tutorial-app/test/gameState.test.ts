import { judgementWinner } from '../src/utils/gameState';

const testList = [...Array(3)].map(
  array => ['', 'X', '']);

test('judgeWinner? XorO:', () => {
  expect(judgementWinner(testList)).toBe('X');
});
