import './components/pw-nav-bar'
import './views/home-view'
import './views/about-view'
import './views/background-view'
import './views/skills-view'
import './views/contact-view'
import './views/footer-view'

class App extends HTMLElement {
  static get is (): string {
    return 'pw-app'
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback (): void {
    this.render()
  }

  render (): void {
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          flex: 1 1 auto;
          max-width: 1200px;
        }
      </style>

      <pw-nav-bar></pw-nav-bar>
      <pw-view-home id="home"></pw-view-home>
      <pw-view-about id="about"></pw-view-about>
      <pw-view-background id="background"></pw-view-background>
      <pw-view-skills id="skills"></pw-view-skills>
      <pw-view-contact id="contact"></pw-view-contact>
      <pw-view-footer></pw-view-footer>
    `

    const navBar = this.shadowRoot.querySelector('pw-nav-bar')
    navBar.addEventListener('scroll', (evt: CustomEvent) => {
      this.shadowRoot.querySelector(`#${evt.detail.id}`).scrollIntoView({ behavior: 'smooth', block:'center' })
    })
  }
}

customElements.define(App.is, App)
export default App.is