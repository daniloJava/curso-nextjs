import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho name="Parasquevi" familia={props.familia}></Filho>
      <Filho name="Renato" familia={props.familia}></Filho>
      <Filho { ...props } familia={props.familia}></Filho>
    </div>
  )
}