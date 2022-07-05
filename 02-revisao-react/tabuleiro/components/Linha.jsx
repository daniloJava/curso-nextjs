import styles from '../styles/Linha.module.css'
import Casa from './Casa'

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
    </div>
  )
}