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
            align-items: center;
        }

        :host .vl {
            border-left: 4px solid var(--pw-text-normal);
            height: 50px;
            margin: 20px 0px 20px 0px;
        }

        :host .background-circle-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
        }

        :host .background-circle-container.left {
            justify-content: flex-end;
        }

        :host .background-circle-container.right {
            justify-content: flex-start;
        }

        :host .background-circle-container label {
            color: var(--pw-text-normal);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 23px;
        }

        :host .background-circle-container.right label {
            margin-right: 15%;
        }

        :host .background-circle-container.left label {
            margin-left: 15%;
        }


    </style> 

    <div class="container">
      <div class="background-circle-container left">
        <pw-background-component src="../assets/pictures/pluxbox_new.png" style = '--background-color:#03A7F1;'></pw-background-component>
        <label> Web Developer at Pluxbox </label>
    </div>
      <div class="vl"></div>
      <div class="background-circle-container right">
        <label>Web Developer at Pluxbox</label>
        <pw-background-component src="../assets/pictures/pluxbox_old.png" style = '--background-color:#DBDFE6;'></pw-background-component>
      </div>
      <div class="vl"></div>
      <div class="background-circle-container left">
        <pw-background-component src="../assets/pictures/UoC.png" style = '--background-color:#DBDFE6;'></pw-background-component>
        <label>Web Developer at Pluxbox</label>
      </div>
    </div>
      
    `
  }
}

customElements.define(ViewBackground.is, ViewBackground)
export default ViewBackground.is