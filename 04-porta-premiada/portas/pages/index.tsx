import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import Link from "../node_modules/next/link";
import style from '../styles/Form.module.css'

export default function Form() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={style.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas?"
            value={qtdPortas}
            onChange={novaQtde => setQtdPortas(novaQtde) } />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text="Porta com Presente?"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente) } />
        </Cartao>
        <Cartao bgcolor='#28a085'>
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={style.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
