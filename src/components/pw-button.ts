class button extends HTMLElement {
  static get is (): string {
    return 'pw-button'
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
        :host button{
          background-color: var(--pw-background-light);
          color: var(--pw-text-light);
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          border-radius: 5px;
          border: none;
          width: 100%;
          height: 100%;
          transition: background-color 0.5s ease, color 0.5s ease;
        }

        :host button:hover{
          background-color: var(--pw-text-highlighted);
          color: var(--pw-text-light-static);
        }
      </style>

      <button>${this.getAttribute('content')}</button>
    `
  }
}

customElements.define(button.is, button)
export default button.is