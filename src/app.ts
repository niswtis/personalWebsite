class App extends HTMLElement {
  static get is () {
    return 'app'
  }

  constructor () {
    super ()
    
    const shadow = this.attachShadow({mode: 'open'});
    
  }

  connectedCallback () {
    console.log("HORRAY")
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <h1>My name is Aris</h1>
    `
  }
}

customElements.define(App.is, App)