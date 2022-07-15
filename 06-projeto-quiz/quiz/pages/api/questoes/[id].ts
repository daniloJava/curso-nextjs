import questoes from '../bancodeQuestoes'

export default function handler(req, res) {
  const idSelecionado = +req.query.id
  const unicaQuestaoOuNada = questoes.filter(qst => qst.id === idSelecionado)

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.toObject())
} 

  res.status(204).send()
}
