import { useEffect, useState } from "react";
import Item from "../../components/Item";
import Lista from "../../components/Lista";
import mega from "../../functions/mega"

export default function MegaSena() {
  const [numeros, setNumeros] = useState([])
  const [qtd, setQtd] = useState(6)

  useEffect(() => setNumeros(mega()), [])

  function renderNumeros() {
    return numeros.map(numero => <Item key={numero + ''} conteudo={numero} />)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>
        Mega Sena
      </h1>
      <div>
        <Lista>
          {renderNumeros()}
        </Lista>
      </div>
      <div>
        <input type="number" name="Numeros" min={6} max={20} value={qtd}
          onChange={e => setQtd(e.target.value)} />
        <button onClick={() => setNumeros(mega(qtd))}>Gerar Numeros</button>
      </div>
    </div>
  )

}