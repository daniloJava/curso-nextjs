import style from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

interface QuestaoProps {
  valor: QuestaoModel
  tempoParaResponder?: number
  onResponse: (indice: number) => void
  tempoEsgotado: () => void
}

const letras = [
  { valor: 'A', cor: '#F2C866'},
  { valor: 'B', cor: '#F266BA'},
  { valor: 'C', cor: '#85D4F2'},
  { valor: 'D', cor: '#BCE596'},
]

export default function Questao(props: QuestaoProps) {
  const questao = props.valor
  
  function renderizarResposta() {
    return questao.respostas.map((resp, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resp}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          onResponse={props.onResponse}
        />
      )
    })
  }

  return (
    <div className={style.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador key={questao.id} duracao={props.tempoParaResponder ?? 10} tempoEsgotado={props.tempoEsgotado} />
      {renderizarResposta()}
    </div>
  )
}