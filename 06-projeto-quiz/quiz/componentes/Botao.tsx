import Link from 'next/link'
import style from '../styles/Botao.module.css'

interface BotaoProps {
  href?: string
  texto: string
  onClick?: (e: any) => void
}

export default function Templete(props: BotaoProps) {
  function renderizarBotao() {
    return (<button className={style.botao} 
      onClick={props.onClick}>
        {props.texto}
      </button>)
  }

  return (
      props.href ? (<Link href={props.href}>
        {renderizarBotao()}
      </Link>)
      : renderizarBotao()
  )
}