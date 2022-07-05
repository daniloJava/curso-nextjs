// JSX nova versao do React facilitou tudo
export default function segundo() {

  return (
    <div>
      {spanRepeat(10)}
    </div>
  )
}

const spanRepeat = (count = 10) => {
  const conteudo = []
  for (let index = 1; index <= count; index++) {
    conteudo.push(<span>{index}{index === count ? '' : ','}</span>)
  }
  return conteudo
}
