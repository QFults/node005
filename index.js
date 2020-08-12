// let greeting = 'Hello World!'

// let greeting = new String('Hello World!')

// let num = 5

// let num = new Number(5)

// let bool = true

// let bool = new Boolean(true)

// let animal = {
//   name: 'Gerald',
//   type: 'Cow',
//   age: 5,
//   sound: 'Mooo'
// }

// let animal1 = {
//   name: 'Carlos',
//   type: 'Zebra',
//   age: 2,
//   sound: 'Weeee'
// }

function Animal (name, type, age, sound) {
  this.name = name
  this.type = type
  this.age = age
  this.sound = sound
}

let gerald = new Animal('Gerald', 'cow', 5, 'Mooo')
let carlos = new Animal('Carlos', 'zebra', 2, 'Weee')

console.log(gerald)
console.log(carlos)
