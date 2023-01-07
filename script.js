class Person {
  constructor(name, job) {
    this.name = name
    this.job = job
  }
  getName() {
    return `Hello my name is ${this.name} `
  }
  getJob() {
    return `and my job is ${this.job}`
  }
}


const person1 = new Person("Emily", "Firefighter")

const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName()}, ${person1.getJob()}`)

})

const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button3 = document.getElementById('button3')
button3.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {

  console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})
