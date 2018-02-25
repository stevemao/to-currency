const toCurrency = require('./')

test('convert to AUD in Australia', () => {
  expect(toCurrency(14104.25, 'en-AU', 'AUD')).toBe('$14,104.25')
})

test('convert to AUD in the US', () => {
  expect(toCurrency(14104.25, 'en-US', 'AUD')).toBe('A$14,104.25')
})
