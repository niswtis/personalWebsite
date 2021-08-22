import './pw-icon'
class skillComponent extends HTMLElement {
  static get is () {
    return 'pw-skill-component'
  }

  constructor () {
    super()
    
    const shadow = this.attachShadow({mode: 'open'})
    
  }

  static get observedAttributes() {
    return ['name', 'label'];
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
      :host {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 25%;
      }

      :host label {
        color: var(--pw-text-light);
        transition: color 1s ease;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin-top: 5%;
      }

      :host pw-icon {
        height: 100px;
        width: 100px;
        transition: all 0.5s ease;
      }

      :host pw-icon:hover {
        height: 130px;
        width: 130px;
      }
    </style>

    <pw-icon name = "${this.getAttribute('name')}" ></pw-icon>
    <label>${this.getAttribute('label')}<label>
    `
  }
}


customElements.define(skillComponent.is, skillComponent)
export default skillComponent.is