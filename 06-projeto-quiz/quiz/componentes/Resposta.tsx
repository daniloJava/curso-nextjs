import style from '../styles/Resposta.module.css'
import RespostaModel from '../model/resposta';

interface RespostaProps {
  valor: RespostaModel
  indice: number
  letra: string
  corFundoLetra: string
  onResponse: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
  const resposta = props.valor
  const respostaRevelada = resposta.revelada ? style.respostaRevelada : ''

  function renderizarVersoResposta() {
    const renderizarRespostaCerta = () => (
      <div className={style.certa}>
        <div>A Resposta Certa é....</div>
        <div className={style.valor}>{resposta.valor}</div>
      </div>
    )

    const RenderizarRespostaErrada = () => (
      <div className={style.errada}>
        <div>A Resposta Esta errada é....</div>
        <div className={style.valor}>{resposta.valor}</div>
      </div>
    )

    return (
      <div className={style.verso}>
        {resposta.certa ? renderizarRespostaCerta() : RenderizarRespostaErrada()}
      </div>
    )
  }

  return (
    <div className={style.resposta} onClick={() => props.onResponse(props.indice)} >
      <div className={`${respostaRevelada} ${style.conteudoResposta}`}>
        <div className={style.frente}>
          <div className={style.letra} style={{ backgroundColor: props.corFundoLetra }}>
            {props.letra}
          </div>
          <div className={style.valor}>
            {resposta.valor}
          </div>
        </div>
        {renderizarVersoResposta()}
      </div>
    </div>
  )
}