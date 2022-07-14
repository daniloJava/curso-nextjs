export async function getServerSideProps() {
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()
  return {
    props: {
      produtos
    }
  }
}

export default function Dinamico2(props) {
  function renderizarProdutos() {
    return props.produtos.map(prod => {
      return <li key={prod.id}>ID DO PRODUTO {prod.id} {prod.nome} tem Preço de R$ {prod.preco}</li>
    })
  }
  return (
    <div>
      <h1>
        Dinamico 02
      </h1>
      <ul>
        {renderizarProdutos()}
      </ul>
    </div>
  )
}