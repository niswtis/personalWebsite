class ViewContact extends HTMLElement {
    static get is () {
      return 'pw-view-contact'
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
              background-color: var(--pw-background-dark);
              transition: background-color 1s ease;
          }
  
          :host .container {
              display: flex;
              flex-direction: column;
              width: 85%;
              min-width: 790px;
              justify-content: center;
              align-items: center;
          }
          
          :host .inputTextBoxesContainer{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
          }

          :host .inputTextBox{
            display: flex;
            flex-direction: column;
            background-color: var(--pw-text-light);
            width: 27%;
          }

          :host .emailInput{
            margin-left: 20%;
          }

          :host .inputTextBox input{
            border: none;
            height: 35px;
            margin: 5px;
            background-color: var(--pw-text-light);
            color: var(--pw-text-dark);
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
          }

          :host .inputTextBox label{
            color: var(--pw-text-dark);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
            margin: 5px; 
          }

          :host .inputTextArea{
            display: flex;
            flex-direction: column;
            border: none;
            height: 35px;
            margin: 5px;
            background-color: var(--pw-text-light);
            color: var(--pw-text-dark);
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
          }

          :host .inputTextArea label{
            color: var(--pw-text-dark);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
            margin: 5px; 
          }

          :host .inputTextArea input{
            border: none;
            height: 35px;
            margin: 5px;
            background-color: var(--pw-text-light);
            color: var(--pw-text-dark);
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
          }
      </style> 
  
      <div class="container">
        <div class="inputTextBoxesContainer">
          <div class="inputTextBox">
            <label>Full Name</label>
            <input type="text" placeholder="Full Name"></input>
          </div>
          <div class="inputTextBox emailInput">
            <label>Email</label>
            <input type="text" placeholder="Email"></input>
          </div>
        </div>
        <div class="inputTextArea">
          <label>Message</label>
          <input type="textarea"></input>
        </div>
      </div>
        
      `
    }
  }
  
  customElements.define(ViewContact.is, ViewContact)
  export default ViewContact.is