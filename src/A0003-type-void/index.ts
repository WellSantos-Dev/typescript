// Void refere-se a algo sem retorno.

function semRetorno(...args: Array<string>): void {
  console.log(args.join(' '))
}

const person = {
  name: 'Wellington',
  surname: 'Santos',

  sayName(): void {
    console.log(this.name, this.surname)
  }
}

semRetorno('Wellington', 'Santos')
person.sayName()