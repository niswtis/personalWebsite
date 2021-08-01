import './components/pw-nav-bar'
class App extends HTMLElement {
  static get is () {
    return 'pw-app'
  }

  constructor () {
    super()
    
    const shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          flex: 1 1 auto;
        }
      </style>
      <pw-nav-bar></pw-nav-bar>
    `
  }
}

customElements.define(App.is, App)
export default App.is