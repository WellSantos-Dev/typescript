// Arrays
// Array<T> - T[]

function mostraArray(...args: Array<number>) {
  return args
}

function toUpperCase(...args: string[]): Array<string> {
  return args.map((item) => item.toUpperCase())
}


console.log(mostraArray(1, 2))
console.log(toUpperCase("Teste", "Maiusculo"))