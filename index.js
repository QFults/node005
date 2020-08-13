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

// function Animal (name, type, age, sound) {
//   this.name = name
//   this.type = type
//   this.age = age
//   this.sound = sound
// }

// let gerald = new Animal('Gerald', 'cow', 5, 'Mooo')
// let carlos = new Animal('Carlos', 'zebra', 2, 'Weee')

// console.log(gerald)
// console.log(carlos)

// function Movie (title, director, plot, isGood) {
//   this.title = title
//   this.director = director
//   this.plot = plot
//   this.isGood = isGood || true
//   this.printInfo = function () {
//     console.log(`
//       Title: ${this.title}
//       Director: ${this.director}
//       Plot: ${this.plot}
//     `)
//   }
// }

// let goodfellas = new Movie('Goodfellas', 'Martin Scorsese', 'short plot', true)
// let theRoom = new Movie('The Room', 'Tommy Wiseau', 'short plot')

// console.log(goodfellas, theRoom)



// goodfellas.printInfo()

function Person (name, age, email, address) {
  this.name = name
  this.age = age
  this.email = email
  this.address = address
}

function Student (name, age, email, address, grade, gpa) {
  Person.call(this, name, age, email, address)
  this.grade = grade
  this.gpa = gpa
}

let student = new Student('Jack', 18, 'jack@gmail.com', '123 South St', 12, 3.8)

console.log(student)

function Teacher (name, age, email, address, subject, room) {
  Person.call(this, name, age, email, address)
  this.subject = subject
  this.room = room
}

let teacher = new Teacher('John', 47, 'john@gmail.com', '234 Main St', 'English', 403)

console.log(teacher)

// function Student (name, age, email, address, grade, gpa) {
//   this.name = name
//   this.age = age
//   this.email = email
//   this.address = address
//   this.grade = grade
//   this.gpa = gpa
// }

// function Teacher (name, age, email, address, subject, room) {
//   this.name = name
//   this.age = age
//   this.email = email
//   this.address = address
//   this.subject = subject
//   this.room = room
// }
