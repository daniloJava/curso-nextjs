export default function Filho(props) {
  return (
    <div>
      <h2>Filho</h2>
      <button onClick={props.funcao}>Falar Comigo passando Evento</button>
      <button onClick={() => props.funcao('Me da uma grana')}>Falar Comigo passando parametro</button>
    </div>
  )
}