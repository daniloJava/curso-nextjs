import style from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Templete(props: QuestaoProps) {
  return (
    <div className={style.questao}>

    </div>
  )
}