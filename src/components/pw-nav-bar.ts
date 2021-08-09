import './pw-icon'

class navBar extends HTMLElement {
  static get is () {
    return 'pw-nav-bar'
  }

  constructor () {
    super()
    
    const shadow = this.attachShadow({mode: 'open'})
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
        background-color: transparent;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex: 1 1 auto;
        align-items: center;
      }

      div a {
        padding: 10px;    
        text-align: center;
        line-height: 30px;
        color: var(--pw-text-normal);
        font-family: 'Roboto', sans-serif;
        transition: color 0.5s ease;
        font-size: 19px;
      }

      div a:hover {
        color: var(--pw-text-highlighted);
      }

      div pw-icon {
        width: 20px;
        height: 20px;
      }

    </style>

    <div>
      <pw-icon name = "sun" ></pw-icon>
      <a>Home</a>
      <a>About</a>
      <a>Background</a>
      <a>Skills</a>
      <a>Contact</a>
    </div> 
  `

     const colorModeBtn = this.shadowRoot.querySelector('pw-icon')
     colorModeBtn.addEventListener('click', this.changeColorMode)
  }

  changeColorMode (): void {
    const body = document.body
    const dataTheme = body.getAttribute('data-theme')

    if (dataTheme === 'dark') {
      body.setAttribute('data-theme','light')
      this.setAttribute('name', 'moon')
    }
    else {
      body.setAttribute('data-theme','dark')
      this.setAttribute('name', 'sun')
    }

    console.log(this)
  }
}


customElements.define(navBar.is, navBar)
export default navBar.is