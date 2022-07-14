// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() *  (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    {id: 1, nome: 'celular', preco: 2132},
    {id: 3, nome: 'mouse', preco: 12.12},
    {id: 4, nome: 'Carro novo', preco: 23423},
    {id: numeroAleatorio(), nome: 'HD', preco: 185.33},
    {id: numeroAleatorio(), nome: 'HD 12', preco: 2485.33},
  ])
}
