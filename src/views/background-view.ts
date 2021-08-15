import '../components/pw-background-component'
class ViewBackground extends HTMLElement {
  static get is () {
    return 'pw-view-background'
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
        :host {
            display: flex;
            flex: 1 1 auto;
            margin-top: 4vw;
            align-items: center;
            flex-direction: column;
        }

        :host .container {
            display: flex;
            flex-direction: column;
            width: 85%;
            min-width: 790px;
            justify-content: center;
           
        }

        :host .background-circle-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: center;
            margin-top: 6%;
        }

        :host .background-circle-container label {
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 23px;
            margin-left: 10%;
        }
    </style> 

    <div class="container">
      <div class="background-circle-container">
        <pw-background-component src="../assets/pictures/pluxbox_new.png" style = '--background-color:#03A7F1;'></pw-background-component>
        <label> Web Developer at Pluxbox </label>
    </div>
      <div class="background-circle-container">
        <pw-background-component src="../assets/pictures/pluxbox_old.png" style = '--background-color:#DBDFE6;'></pw-background-component>
        <label>Web Developer at Pluxbox</label>
      </div>
      <div class="background-circle-container">
        <pw-background-component src="../assets/pictures/UoC.png" style = '--background-color:#DBDFE6;'></pw-background-component>
        <label>Web Developer at Pluxbox</label>
      </div>
    </div>
      
    `
  }
}

customElements.define(ViewBackground.is, ViewBackground)
export default ViewBackground.is