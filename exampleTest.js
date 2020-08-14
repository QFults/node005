const greeting = () => {
  return 'Hello World!'
}

test(`Greeting should be "Hello World!"`, () => {
  expect(greeting()).toBe('Hello World!')
})

test('Returned value should be type string', () => {
  expect(typeof greeting()).toBe('string')
})

test('Returned string should not be empty', () => {
  expect(greeting().length).toBeGreaterThan(0)
})
