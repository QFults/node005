const Mather = require('../Mather.js')

test('New mather should be instance of Mather', () => {
  const mather = new Mather(2, 2)
  expect(mather).toBeInstanceOf(Mather)
})

test('Should add a and b together', () => {
  const mather = new Mather(2, 2)
  expect(mather.add()).toBe(4)
})

test('Should subtract b from a', () => {
  const mather = new Mather(2, 2)
  expect(mather.subtract()).toBe(0)
})

test('Should multiply a and b', () => {
  const mather = new Mather(2, 2)
  expect(mather.multiply()).toBe(4)
})

test('Should divide a and b', () => {
  const mather = new Mather(2, 2)
  expect(mather.divide()).toBe(1)
})
