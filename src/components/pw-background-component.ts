class backgroundComponent extends HTMLElement {
  static get is () {
    return 'pw-background-component'
  }

  constructor () {
    super()
    
    const shadow = this.attachShadow({mode: 'open'})
    
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback (attrName: string, oldValue:string, newValue:string) {
    this.render()
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>
      :host img{
        width: 250px;
        height: 250px;
        border-radius: 50%; 
        box-shadow: 0px 0px 15px var(--pw-text-light);
        background-color: var(--background-color);
        transition: border 1s ease, background-color 1s ease;
      }
      </style>
      <img src="${this.getAttribute('src')}"></img>
    `
    console.log(this.getAttribute('src'))
  }
}


customElements.define(backgroundComponent.is, backgroundComponent)
export default backgroundComponent.is