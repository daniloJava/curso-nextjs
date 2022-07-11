import Pessoa from "../../components/Pessoa";

export default function ExemploTs() {
  return (
    <div>
      <Pessoa nome="Joao" idade={10} />
      <Pessoa nome="Maria" />
    </div>
  )
}