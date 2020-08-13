const greeting = () => {
  return 'Hello World!'
}

test(`Greeting should be "Hello World!"`, () => {
  expect(greeting()).toBe('Hello World!')
})
