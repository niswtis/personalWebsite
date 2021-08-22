import '../components/pw-button'
import '../components/pw-textfield'
import '../components/pw-textarea'
import HtmlWebpackPlugin = require('html-webpack-plugin')
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
          margin-top: 8%;
          align-items: center;
          flex-direction: column;
          background-color: var(--pw-background-dark);
          transition: background-color 1s ease;
        }

        :host .container {
          display: flex;
          flex-direction: column;
          width: 70%;
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

        :host .nameInput{
          width: 45%;
        }

        :host .emailInput{
          margin-left: 15%;
          width: 45%;
        } 

        :host pw-textarea{
          width: 100%;
          margin-top: 5%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        :host pw-button{
          width: 110px;
          height: 45px;
          margin-top: 5%;
          align-self: flex-end;
          display: flex;
        }
      </style> 
  
      <div class="container">
        <div class="inputTextBoxesContainer">
          <pw-textfield class="nameInput" placeholder="Full Name" label="Full Name"></pw-textfield>
          <pw-textfield class="emailInput" placeholder="Email" label="Email"></pw-textfield>
        </div>
        <pw-textarea label="Message" placeholder="Type your message here..."></pw-textarea>
        <pw-button content='Send Email'></pw-button>
      </div>
      `

      const emailBtn = this.shadowRoot.querySelector('pw-button')
      emailBtn.addEventListener('click', this.sendEmail.bind(this))
    }
    
    sendEmail () {
      const nameElement: HTMLInputElement = this.shadowRoot.querySelector('.nameInput')
      const emailElement: HTMLInputElement = this.shadowRoot.querySelector('.emailInput')
      const messageElement: HTMLInputElement = this.shadowRoot.querySelector('pw-textarea')
      console.log(nameElement, emailElement, messageElement)
      console.log(nameElement.value, emailElement.value, messageElement.value)
    } 
  }

  

  customElements.define(ViewContact.is, ViewContact)
  export default ViewContact.is