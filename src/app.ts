import './components/pw-nav-bar'
import './views/home-view'
import './views/about-view'
import './views/background-view'

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
          max-width: 1200px;
        }
      </style>
      <pw-nav-bar></pw-nav-bar>
      <pw-view-home></pw-view-home>
      <pw-view-about></pw-view-about>
      <pw-view-background></pw-view-background>
    `
  }
}

customElements.define(App.is, App)
export default App.is