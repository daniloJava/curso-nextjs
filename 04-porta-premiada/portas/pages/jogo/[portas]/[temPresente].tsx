import style from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarportas, criarPortas } from "../../../functions/portas"
import { useRouter } from '../../../node_modules/next/router'
import Link from '../../../node_modules/next/link'


const MINIMO_PORTAS_VALIDAS = 3
const MAXIMO_PORTAS_VALIDAS = 100
const MINIMO_PRESENTES = 1
export default function Jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  function renderizarPortas() {
    return portas.map(porta => <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarportas(portas, novaPorta))}></Porta>)
  }

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const qtdPortasValida = portas >= MINIMO_PORTAS_VALIDAS && portas <= MAXIMO_PORTAS_VALIDAS
    const temPresenteValido = temPresente >= MINIMO_PRESENTES  && temPresente <= portas

    setValido(qtdPortasValida && temPresenteValido)

  } , [portas])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  } ,[router?.query])


  return (
    <div id={style.jogo}>
      <div className={style.portas}>
        {valido ? renderizarPortas() : <h2>Valores invalidos </h2>}
      </div>
      <div className={style.botoes}>
        <Link href='/'>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
