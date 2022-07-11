export default function Somentepar(props) {
  const numeropar = props.numero % 2 === 0
  return numeropar ? <h3>{props.numero}</h3> : null
}