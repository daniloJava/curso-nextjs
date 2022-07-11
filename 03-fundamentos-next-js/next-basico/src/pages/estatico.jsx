export function getStaticProps() {
  return {
    props: {
      numero: Math.random() * 1000
    }
  }
}

export default function Estatico(props) {
  return (
    <div>
      <h2>Rota dinamica {props.numero} </h2>
    </div>
  )
}