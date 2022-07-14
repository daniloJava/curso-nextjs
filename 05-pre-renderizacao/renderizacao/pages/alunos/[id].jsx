export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { id: '1231' }},
      { params: { id: '58946' }},
      { params: { id: '345' }},
    ]
  }
}


export async function getStaticProps({ params }) {
  const idAluno = params.id
  const resp = await fetch(`http://localhost:3000/api/alunos/${idAluno}`)
  const alunos = await resp.json()
  return {
    props: {
      alunos
    }
  }
}

export default function AlunosPorId(props) {
  function renderizarAlunos() {
    return props.alunos.map(aluno => {
      return <li key={aluno.id}>ID do aluno {aluno.id} - {aluno.nome} email {aluno.email}</li>
    })
  }
  return (
    <div>
      <h1>
        Detalhes do aluno
      </h1>
      <ul>
        {renderizarAlunos()}
      </ul>
    </div>
  )
}