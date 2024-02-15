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
          margin-top: 3%;
          align-items: center;
          flex-direction: column;
        }

        :host .headerContainer{
          flex-direction: row;
          width: 85%;
          justify-content: center;
          align-items: center;    
        }

        :host .headerContainer h2 {
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Archivo', sans-serif;
          font-size: 30px;
          margin: 0;
          width: fit-content;
          padding-right: 3px;
        }

        :host .container {
            display: flex;
            flex-direction: column;
            width: 85%;
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

        @media only screen and (max-width: 600px) {
          :host .headerContainer h2 {
            font-size: 25px;            
          }

          :host .headerContainer {
            width: 90%;
          }

          :host .background-circle-container div label {
            font-size: 20px;
          }
        }
    </style> 

    <div class="headerContainer">
      <h2>Background</h2>
    </div>
    <div class="container">
      <div class="background-circle-container">
        <pw-background-component src="./src/assets/pictures/pluxbox_new.png" style = '--background-color:#03A7F1;'></pw-background-component>
        <div>
          <label> Full Stack Web Developer at Pluxbox </label>
          <label class="darkerLabel"> (September 2023 - Now) </label>
        </div>
      </div>
      <div class="background-circle-container">
        <!--
          credits
          <a href="https://www.freepik.com/free-vector/man-hazardous-situation_894378.htm#query=carrer%20break&position=7&from_view=search&track=ais">Image by dooder</a> on Freepik
        -->
        <pw-background-component src="./src/assets/pictures/career_break.jpg" style = '--background-color:#03A7F1;'></pw-background-component>
        <div>
          <label> Career Break </label>
          <label class="darkerLabel"> (September 2022 - September 2023) </label>
        </div>
      </div>
      <div class="background-circle-container">
        <pw-background-component src="./src/assets/pictures/pluxbox_new.png" style = '--background-color:#03A7F1;'></pw-background-component>
        <div>
          <label> Web Developer at Pluxbox </label>
          <label class="darkerLabel"> (April 2021 - September 2022) </label>
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