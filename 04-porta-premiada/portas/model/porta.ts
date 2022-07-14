export default class PortaModel {
  #numero: number
  #temPresente: boolean
  #selecionada: boolean
  #aberta: boolean

  constructor(numemro: number, temPresente = false, selecionada = false, aberta = false) {
    this.#numero = numemro
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }

  get numero() {
    return this.#numero
  }

  get temPresente() {
    return this.#temPresente
  }

  get selecionada() {
    return this.#selecionada
  }

  get aberta() {
    return this.#aberta
  }

  get fechada() {
    return !this.#aberta
  }

  deselecionar() {
    const selecionada = false
    return new PortaModel(this.numero, this.#temPresente, selecionada, this.aberta)
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new PortaModel(this.numero, this.#temPresente, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.#temPresente, this.selecionada, aberta)
  }

}