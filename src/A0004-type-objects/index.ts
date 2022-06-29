const objectA: {chaveA: string, chaveB: string, [key: string]: string} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB'
}

objectA.chaveA = "Outro valor"
objectA.chaveC = "Teste"

console.log(objectA)