interface Pessoa {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function daUmsalve(pessoa: Pessoa) {
  console.log('Salvee! '+ pessoa.nome )
}

function mudarNome( pessoa: Pessoa) {
  pessoa.nome = 'Joanna'
}

const pessoa: Pessoa = {
  nome: 'juka',
  idade: 23,
  saudar(sobrenome: string) {
    console.log('ola meu nome é '+ this.nome + " " + sobrenome)
  }
}

daUmsalve(pessoa)
mudarNome(pessoa)
daUmsalve(pessoa)
pessoa.saudar('Oliveira')

class Cliente implements Pessoa {
  nome: string = ''
  saudar(sobrenome: string): void {
    console.log('Meu nom é' + this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Juka'
daUmsalve(meuCliente)
meuCliente.saudar(' pereira ')

// Interface Funcao
interface FuncaoCaluclo {
  (a: number, b:number): number
}

let potencia: FuncaoCaluclo

potencia = (base:number, exp: number): number => {
  return Math.pow(exp, base)
}

console.log(potencia(2, 10))