import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import style from '../styles/Temporizador.module.css'

interface TemporizadorProps {
  key: any
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
  return ( 
    <div className={style.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={120}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={[
          ['#BCE506', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}