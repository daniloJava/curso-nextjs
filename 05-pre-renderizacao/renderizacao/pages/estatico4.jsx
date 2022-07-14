export async function getStaticProps() {
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()
  return {
    props: {
      produtos
    }
  }
}

export default function Estatico4(props) {
  function renderizarProdutos() {
    return props.produtos.map(prod => {
      return <li key={produto.id}>ID DO PRODUTO {produto.id} {produto.nome} tem Preço de R$ {produto.preco}</li>
    })
  }
  return (
    <div>
      <h1>
        Estatico 04
      </h1>
      <ul>
        {renderizarProdutos()}
      </ul>
    </div>
  )
}