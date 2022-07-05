import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Cadastro Principal"
        secundario="Incluir, alterar e deletar"
      />
      <Titulo
        principal="Pagina de consulta"
        secundario="consulta deletar"
        pequeno
      />
    </div>
  )

}