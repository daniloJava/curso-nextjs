import { useState } from "react"

export default function Mouse(props) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const cssStyle = {
    backgroundColor: '#222',
    flexDirection: 'column',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  function quandoMoverOMouse(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
  }

  return (
    <div style={cssStyle} onMouseMove={quandoMoverOMouse}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}