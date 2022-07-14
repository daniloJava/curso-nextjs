export function getStaticProps() {
  // para regerar a pagina estática depois do parametros em segundos revalidate.
  return {
    revalidate: 10,
    props: {
      numemro: Math.random()
    }
  }
}

export default function Estatico3() {
  return (
    <div>
      <h1>
        Estatico 03
      </h1>
      <h2>{props.numero}</h2>
    </div>
  )
}