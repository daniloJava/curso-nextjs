import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {

  readonly id: number
  readonly enunciado: string
  readonly respostas: RespostaModel[]
  readonly acertou?: boolean

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou: boolean = false
  ) {
    this.id = id
    this.enunciado = enunciado
    this.respostas = respostas
    this.acertou = acertou
  }

  get respondida() {
    for (let resp of this.respostas) {
      if (resp.revelada) return true
    }
    return false
  }

  get naoRespondida() {
    return !this.respondida
  }

  embaralharRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralhar(this.respostas)
    return new QuestaoModel(this.id, this.enunciado, respostasEmbaralhadas, this.acertou)
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this.respostas[indice]?.certa
    const respostas = this.respostas.map((resp, i ) => {
      const respostaSelecionada = indice === i
      const deveRevelar = respostaSelecionada || resp.certa
      return deveRevelar ? resp.revelar() : resp
    })

    return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
  }

  toObject() {
    return {
      id: this.id,
      enunciado: this.enunciado,
      respondida: this.respondida,
      acertou: this.acertou,
      respostas: this.respostas.map(resp => resp.toObject()),
    }
  }

  static fromObjct(json: QuestaoModel): QuestaoModel {
    const respostas = json.respostas.map(res => RespostaModel.fromObject(res))
    return new QuestaoModel(json.id, json.enunciado, respostas, json.acertou)
  }

}