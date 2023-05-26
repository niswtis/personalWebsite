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
      :host{
        display: flex;
        height: 45px;
        background-color: var(--pw-background-dark);
        transition: background-color 1s ease;
        position: fixed;
        z-index: 2;
        width: 100%;
        max-width: 1200px;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex: 1 1 auto;
        align-items: center;
      }

      div a {
        padding: 10px;    
        text-align: center;
        line-height: 30px;
        color: var(--pw-text-light);
        font-family: 'Roboto', sans-serif;
        transition: color 0.5s ease;
        font-size: 18px;
        text-decoration: none;
      }

      div a:hover {
        color: var(--pw-text-highlighted);
      }

      div pw-icon {
        width: 20px;
        height: 20px;
        padding: 10px;
      }

      @media only screen and (max-width: 600px) {
        :host {
          height: 60px;
        }

        div a {
          font-size: 20px;
          padding: 16px;    
        }
      }
    </style>

    <div>
      <a href="#home" name="home" title="Home">Home</a>
      <a href="#about" name="about" title="About">About</a>
      <a href="#background" name="background" title="Background">Background</a>
      <a href="#skills" name="skills" title="Skills">Skills</a>
      <a href="#contact" name="contact" title="Contact">Contact</a>
      <pw-icon name = "sun" ></pw-icon>
    </div> 
  `

    const colorModeBtn = this.shadowRoot.querySelector('pw-icon')
    colorModeBtn.addEventListener('click', this.changeColorMode)

    const hyperlinks = this.shadowRoot.querySelectorAll('a')
    for (const hyperlink of hyperlinks) {
      hyperlink.addEventListener('click', evt => {
        const hyperlinkName = (evt.target as HTMLElement).getAttribute('name')
        this.dispatchEvent(new CustomEvent('scroll', { detail: { id: hyperlinkName } }))
      })
    }
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
  }
}


customElements.define(navBar.is, navBar)
export default navBar.is