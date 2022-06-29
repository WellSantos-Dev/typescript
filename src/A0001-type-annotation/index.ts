// Basic types
const name: string = "Wellington"
const age: number = 20
const adult: boolean = true


// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfStrings: Array<string> = ["Wellington", "Santos"]

// Objects
const person: {name: string, age: number, adult?: boolean} = {
  name: 'Wellington',
  age: 20,
  adult: true
}

// Functions
function soma(x: number, y:number) {
  return x + y
}

console.log(person.name)

export default name;