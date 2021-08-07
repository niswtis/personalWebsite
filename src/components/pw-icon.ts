import { iconList } from '../assets/icons/icons'
class icon extends HTMLElement {
  static get is () {
    return 'pw-icon'
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
      :host {
        display: flex;
        height: 50px;
        width: 50px;
        background-color: transparent;
        align-items: center;
        animation-name: test;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }

      :host svg{
        fill: var(--pw-text-normal);
        width: 100%;
        height: var(--width);
        transition: fill 0.5s ease;
      }

      :host svg:hover {
        fill: var(--pw-text-highlighted);
      }
    </style>

    ${iconList.get(this.getAttribute('name'))}
    `
  }
}


customElements.define(icon.is, icon)
export default icon.is