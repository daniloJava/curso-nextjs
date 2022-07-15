export default class RespostaModel {
  readonly valor: string
  readonly certa: boolean
  readonly revelada: boolean

  constructor(valor: string, certa: boolean, revelada = false) {
    this.valor = valor
    this.certa = certa
    this.revelada = revelada
  } 

  static certa(valor: string) {
    return new RespostaModel(valor, true)
  }

  static errada(valor: string) {
    return new RespostaModel(valor, false)
  }

  revelar() {
    return new RespostaModel(this.valor, this.certa, true)
  }

  toObject() {
    return {
      valor: this.valor,
      certa: this.certa,
      revelada: this.revelada,
    }
  }

  static fromObject(json: RespostaModel): RespostaModel {
    return new RespostaModel(json.valor, json.certa, json.revelada)
  }

}