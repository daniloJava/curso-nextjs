// String
let nome = 'Jukinha'
console.log(nome)

// numbers 
let idade = 27
console.log(idade)
idade = 28.9
console.log(idade)

// boolean
let isMaior = false
console.log(isMaior)

let minhaIdade: any
minhaIdade = 24
console.log(typeof minhaIdade)


// Array
let hobbies: any[] = ['jogar', 'caminhar']
console.log(hobbies[1])
console.log(typeof hobbies)

//tuplas 
let enderecos: [string, number, string] = ["avenida brasil", 90, 'bairro']
console.log(enderecos)

// Enum
enum Cor {
  Cinza,
  Verde, 
  Vermelho
}

let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)

// Any
let carro: any = 'BMW'
console.log(carro)