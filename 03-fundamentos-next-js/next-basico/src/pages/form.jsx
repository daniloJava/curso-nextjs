import { useState } from "react"

export default function Form() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [usuarios, setUsuarios] = useState([])

  async function salvarUsuario() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ nome, idade }),
      headers: { 'Content-Type': 'application/json' }
    })

    setNome('')
    setIdade(0)

    const resp = await (fetch('/api/form'))
    const users = await resp.json()
    setUsuarios(users.data)
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
    })
  }

  return (
    <div>
      <h2>Integrando com APi </h2>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      <input type="text" value={idade} onChange={e => setIdade(+e.target.value)} />
      <button onClick={salvarUsuario}>Enviar</button>

      <ul>
        {renderizarUsuarios()}
      </ul>
    </div>
  )
}