import { useState } from "react"

export default function Contador() {
  const [numero, setNumero] = useState(0)

  return (
    <div>
      <h1>Contador</h1>
      <span>Valor {numero }</span>
      <button onClick={() => setNumero(numero - 1)}>-</button>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  )
}