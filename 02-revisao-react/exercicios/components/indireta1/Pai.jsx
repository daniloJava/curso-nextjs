import Filho from "./Filho";

export default function Pai(props) {
  function falaComingo(param) {
    console.log(param)
    console.log("Fala COmigo")
  }

  return (
    <div>
      <Filho funcao={falaComingo}></Filho>
    </div>
  )
}