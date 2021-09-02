import paySystemChecker from '../paySystemChecker';

test('it should return payment system name', () => {
  const input = '378603335610783';

  expect(paySystemChecker(input)).toBe('American Express');
});
