import QuestaoModel from '../model/questao'
import style from '../styles/Questionario.module.css'
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioProps {
  questao: QuestaoModel
  ultimaPergunta: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  onProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

  function onResponse(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={style.questionario}>
      {props.questao ?
        <Questao valor={props.questao}
          tempoParaResponder={6}
          onResponse={onResponse}
          tempoEsgotado={props.onProximoPasso} />
        : false
      }
      <Botao texto={props.ultimaPergunta ? 'Finalizar' : 'Próxima'} onClick={props.onProximoPasso} />
    </div>
  )
}