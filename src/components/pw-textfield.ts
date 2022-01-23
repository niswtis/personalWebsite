
declare global {
  interface HTMLElementTagNameMap {
    'pw-textfield': textfield
  }
}
class textfield extends HTMLElement {
  inputElement: HTMLInputElement
  regexExpression: RegExp
  inputValidation: boolean = false

  static get is (): string {
    return 'pw-textfield'
  }

  get value (): string {
    return this.inputElement.value
  }

  get validity (): boolean {
    return this.inputValidation
  }

  set regexExp (value: RegExp){
    this.regexExpression = value
    this.inputElement.addEventListener('keyup', this.validate.bind(this))  
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes(): string[] {
    return ['content']
  }

  connectedCallback (): void {
    this.render()
  }

  render (): void {
    this.shadowRoot.innerHTML = `
      <style>
        :host .inputTextBox{
          display: flex;
          flex-direction: column;
          background-color: var(--pw-background-light);
          transition: background-color 1s ease;
          width: 100%;
          border-radius: 5px;
        }

        :host .inputTextBox input{
          border: none;
          height: 35px;
          margin: 5px;
          padding: 10px;
          background-color: var(--pw-background-light);
          transition: background-color 1s ease, color 1s ease;
          color: var(--pw-text-light);
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
        }

        :host .inputTextBox input::placeholder{
          transition: color 0.5s ease;
        }

        :host .inputTextBox input:hover::placeholder{
          color: var(--pw-text-highlighted)
        }

        :host .inputTextBox label{
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          margin: 10px 5px 5px 15px;
        }

        input[invalid] {
          outline: none;
          border-radius: 2px;
          border: 1px solid red!important;
        }
      </style>

      <div class="inputTextBox nameInput">
        <label>${this.getAttribute('label')}</label>
        <input type="text" placeholder="${this.getAttribute('placeholder')}"></input>
      </div>
    `

    this.inputElement = this.shadowRoot.querySelector('.inputTextBox input')
  }

  validate() {
    const validated = this.regexExpression.test(this.inputElement.value)
    this.inputValidation = false

    if (!validated) {
      this.inputElement.setAttribute('invalid', '')
    }
    else {
      this.inputElement.removeAttribute('invalid')
      this.inputValidation = true
    }
  }
}

customElements.define(textfield.is, textfield)
export default textfield.is