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
            margin-top: 4%;
            align-items: center;
            flex-direction: column;
        }

        :host .headerContainer{
          flex-direction: row;
          width: 85%;
          min-width: 790px;
          justify-content: center;
          align-items: center;    
        }

        :host .headerContainer h2 {
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Roboto', sans-serif;
          margin: 0;
          border-bottom: 2px solid var(--pw-text-light);
          width: fit-content;
          padding-right: 3px;
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

        :host .background-circle-container div label {
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 23px;
            margin-left: 10%;
        }

        :host .background-circle-container div .darkerLabel {
          filter: brightness(0.5);
        }

        :host .background-circle-container div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 57%;
          text-align: center;
        }
    </style> 

    <div class="headerContainer">
      <h2>Background</h2>
    </div>
    <div class="container">
      <div class="background-circle-container">
        <pw-background-component src="./src/assets/pictures/pluxbox_new.png" style = '--background-color:#03A7F1;'></pw-background-component>
        <div>
          <label> Web Developer at Pluxbox </label>
          <label class="darkerLabel"> (April 2021 - Now) </label>
        </div>
    </div>
      <div class="background-circle-container">
        <pw-background-component src="./src/assets/pictures/pluxbox_old.png" style = '--background-color:#DBDFE6;'></pw-background-component>
        <div>
          <label> Intern Web Developer at Pluxbox </label>
          <label class="darkerLabel"> (October 2020 - April 2021) </label>
        </div>
      </div>
      <div class="background-circle-container">
        <pw-background-component src="./src/assets/pictures/UoC.png" style = '--background-color:#DBDFE6;'></pw-background-component>
        <div>
          <label> Computer Science Department, University of Crete</label>
          <label class="darkerLabel"> (September 2015 - September 2020) </label>
        </div>
      </div>
    </div>
      
    `
  }
}

customElements.define(ViewBackground.is, ViewBackground)
export default ViewBackground.is