export default function jsx4() {
  const conteudo = "Estou no JS.!"
  return (
    <div>
      <h1>Integracao Jsx</h1>
      <h2>{conteudo}</h2>
      <h2>{entre(5, 1, 10)}</h2>
    </div>
  )
}

function entre(valor, min, max) {
  if(valor >= min && valor <= max) {
    return "SIM"
  }
  return "NAO"
}