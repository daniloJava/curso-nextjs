import { useEffect } from 'react'
import { useState } from 'react'
import QuestaoModel from '../model/questao'
import Questionario from '../componentes/Questionario'
import { useRouter } from '../node_modules/next/router'



const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const [idDasQuestoes, setIdDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idDasQuestoes = await resp.json()
    setIdDasQuestoes(idDasQuestoes)
  }

  async function carregarQuestao(id: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const json = await resp.json()
    setQuestao(QuestaoModel.fromObjct(json))
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idDasQuestoes.length > 0 && carregarQuestao(idDasQuestoes[0])
  }, [idDasQuestoes])

  function idProximaPergunta() {
    const proximoIndice = idDasQuestoes.indexOf(questao.id) + 1
    return idDasQuestoes[proximoIndice]
  }

  function onProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irParaProximaQuestao(proximoId) : finalizar()
  }

  function irParaProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  return questao ?
    <Questionario
      questao={questao}
      ultimaPergunta={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      onProximoPasso={onProximoPasso}
    />
    : false
}
