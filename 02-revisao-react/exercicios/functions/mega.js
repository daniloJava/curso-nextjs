export default function mega(quantidade = 6, numeros = []) {
  let qtd = +quantidade
  if (qtd < 6 && qtd > 60) {
    throw 'Quantidade invalida!'
  }

  if (numeros.length === qtd) {
    return numeros.sort((n1, n2) => n1 - n2)
  }

  const novoAleatorio = parseInt(Math.random() * 60 + 1)
  if(!numeros.includes(novoAleatorio)) {
    return mega(qtd, [...numeros, novoAleatorio])
  }

  return mega(qtd, numeros)
}
