export function getServerSideProps() {
  return {
    props: {
      numemro: Math.random()
    }
  }
}

export default function Dinamico1(props) {
  return (
    <div>
      <h1>
        Estatico 03
      </h1>
      <h2>{props.numero}</h2>
    </div>
  )
}