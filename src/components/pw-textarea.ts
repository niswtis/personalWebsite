class textarea extends HTMLElement {
  inputElement: HTMLInputElement

  static get is (): string {
    return 'pw-textarea'
  }

  get value (): string {
    return this.inputElement.value
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
        :host .inputTextArea{
          display: flex;
          flex-direction: column;
          width: 100%;
          border: none;
          background-color: var(--pw-background-light);
          color: var(--pw-text-light);
          transition: background-color 1s ease, color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          border-radius: 5px;
        }

        :host .inputTextArea label{
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          margin: 10px 5px 5px 15px;
        }

        :host .inputTextArea textarea{
          border: none;
          background-color: var(--pw-background-light);
          color: var(--pw-text-light);
          transition: background-color 1s ease, color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          resize: vertical;
        }

        :host .inputTextArea textarea::placeholder{
          transition: color 0.5s ease;
        }

        :host .inputTextArea textarea:hover::placeholder{
          color: var(--pw-text-highlighted)
        }
      </style>

      <div class="inputTextArea">
        <label>${this.getAttribute('label')}</label>
        <textarea id="w3review" rows="6" cols="50" placeholder="${this.getAttribute('placeholder')}"></textarea>
      </div>
    `

    this.inputElement = this.shadowRoot.querySelector('.inputTextArea textarea')
  }
}

customElements.define(textarea.is, textarea)
export default textarea.is