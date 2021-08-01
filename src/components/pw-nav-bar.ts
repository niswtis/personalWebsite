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
        background-color: var(--pw-background-dark);
        transition: background-color 0.5s ease;
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
      }

      div a:hover {
        color: var(--pw-text-highlighted);
      }

      div img {
        color: var(--pw-text-normal);
        width: 25px;
        height: 25px;
      }

      path {
        color: var(--pw-text-normal);
      }

      path:hover {
        color: var(--pw-text-highlighted);
      }

    </style>

    <div>
      <img src="../assets/icons/iconmonstr-weather-1.svg"></img>
      <a>Home</a>
      <a>About</a>
      <a>Background</a>
      <a>Skills</a>
      <a>Contact</a>
     </div> 
    `

    const colorModeBtn = this.shadowRoot.querySelector('img')
    colorModeBtn.addEventListener('click', this.changeColorMode)
  }

  changeColorMode (): void {
    const body = document.body
    const dataTheme = body.getAttribute('data-theme')
    if (dataTheme === 'dark') body.setAttribute('data-theme','light')
    else body.setAttribute('data-theme','dark')

    //change icon svg
    //color of icon should be taken care of from the css vars
    //everything else should be good to go
  }
}


customElements.define(navBar.is, navBar)
export default navBar.is