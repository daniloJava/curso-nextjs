import { useState } from "react"

export default function Formulario() {
  const [valor, setValor] = useState('')

  const alterarInput = () => {
    setValor(valor + "!")
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <span>{valor}</span>
      <input type="text" name="valor" id="value" value={valor} onChange={e => setValor(e.target.value)} />
      <button onClick={alterarInput}>Alterar</button>
    </div>
  )
}