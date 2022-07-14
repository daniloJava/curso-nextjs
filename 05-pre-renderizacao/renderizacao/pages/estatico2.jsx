export function getStaticProps() {
  return {
    props: {
      numemro: Math.random()
    }
  }
}

export default function Estatico2() {
  return (
    <div>
      <h1>
        Estatico 02
      </h1>
      <h2>{props.numero}</h2>
    </div>
  )
}