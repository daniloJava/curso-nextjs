function acao1() {
  console.log('acao1')
}

export default function botao() {

  function acao2() {
    console.log('acao1')
  }

  function acao4(e) {
    console.log(e)
  }

  return (
    <div>
      <button onClick={acao1}>Clieck 1</button>
      <button onClick={acao2}>Clieck 2</button>
      <button onClick={() => console.log('acao3') }>Clieck 3</button>
      <button onClick={acao4}>Clieck 4</button>
      <div><input type="text" onChange={e => console.log(e.target.value)} /></div>
    </div>
  )
}
