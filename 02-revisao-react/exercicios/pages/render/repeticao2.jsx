import listaProduto from "../../data/listaProduto"

function rendereizarLista(list) {
  return list.map((produto) => (
    <tr key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>{produto.preco}</td>
    </tr>
  ))
}

export default function repeticao2() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>codigo</th>
            <th>Nome</th>
            <th>preco</th>
          </tr>
        </thead>
        <tbody>
          {rendereizarLista(listaProduto)}
        </tbody>
      </table>
    </div>
  )
}