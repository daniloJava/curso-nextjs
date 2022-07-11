export default function Repeticao1() {
  const listaAprovados = [
    'Joao',
    'Maria',
    'Danilo',
  ]
  return (
    <ul>
      {rendereizarLista(listaAprovados)}
    </ul>
  )
}

function rendereizarLista(list) {
  return list.map((nome, i) => <li key={i}>{nome}</li>)
}
