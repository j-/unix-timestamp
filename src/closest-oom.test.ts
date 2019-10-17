import { getClosestOOM } from './closest-oom';

it('returns 0 for 100/100', () => {
  const left = 100;
  const right = 100;
  const expected = 0;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});

it('returns 1 for 100/1000', () => {
  const left = 100;
  const right = 1000;
  const expected = 1;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});

it('returns 2 for 100/10000', () => {
  const left = 100;
  const right = 10000;
  const expected = 2;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});

it('returns -1 for 100/10', () => {
  const left = 100;
  const right = 10;
  const expected = -1;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});

it('returns 3 for 1571296379.654/1571295312004', () => {
  const left = 1571296379.654;
  const right = 1571295312004;
  const expected = 3;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});

it('returns Infinity for 0/1571295312004', () => {
  const left = 0;
  const right = 1571295312004;
  const expected = Infinity;
  const actual = getClosestOOM(left, right);
  expect(actual).toEqual(expected);
});
