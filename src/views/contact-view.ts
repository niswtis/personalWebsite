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
              margin-top: 5%;
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
            background-color: var(--pw-background-light);
            transition: background-color 1s ease;
            width: 27%;
            border-radius: 5px;
          }

          :host .nameInput{
            width: 34%;
          }

          :host .emailInput{
            margin-left: 13%;
          }

          :host .inputTextBox input{
            border: none;
            height: 35px;
            margin: 5px;
            background-color: var(--pw-background-light);
            transition: background-color 1s ease, color 1s ease;
            color: var(--pw-text-light);
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
          }

          :host .inputTextBox label{
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            margin: 5px; 
          }

          :host .inputTextArea{
            display: flex;
            flex-direction: column;
            width: 74%;
            border: none;
            margin: 5px;
            background-color: var(--pw-background-light);
            color: var(--pw-text-light);
            transition: background-color 1s ease, color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            margin-top: 5%;
            border-radius: 5px;
          }

          :host .inputTextArea label{
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            margin: 5px; 
          }

          :host .inputTextArea textarea{
            border: none;
            background-color: var(--pw-background-light);
            color: var(--pw-text-light);
            transition: background-color 1s ease, color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            padding: 5px;
            border-radius: 5px;
            resize: vertical;
          }
      </style> 
  
      <div class="container">
        <div class="inputTextBoxesContainer">
          <div class="inputTextBox nameInput">
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
          <textarea id="w3review" rows="6" cols="50" placeholder="Type your message here..."></textarea>
        </div>
      </div>
      `
    }
  }

  customElements.define(ViewContact.is, ViewContact)
  export default ViewContact.is