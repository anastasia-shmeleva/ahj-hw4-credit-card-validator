import paySystemChecker from '../paySystemChecker';

test('it should return payment system name', () => {
  const input = '378603335610783';

  expect(paySystemChecker(input)).toBe('American Express');
});

// test.each([
//   ['true for valid organization Inn', '7715964180', true],
//   ['false for invalid organization Inn', '7715964999', false],
// ])(('it should be %s'), (_, input, expected) => {
//   expect(isValidInn(input)).toBe(expected);
// });
