import '../components/pw-button'
import '../components/pw-textfield'
import '../components/pw-textarea'
import HtmlWebpackPlugin = require('html-webpack-plugin')
class ViewContact extends HTMLElement {
    private shadow: ShadowRoot

    static get is () {
      return 'pw-view-contact'
    }
  
    constructor () {
      super()
      
      this.shadow = this.attachShadow({mode: 'open'}) as ShadowRoot
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML = `
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

        :host #errorMessage{
          font-family: 'Roboto', sans-serif;
          color: var(--pw-text-error, red);
          margin-top: 10px;
          align-self: flex-start;
          opacity: 0;
          transition: opacity 0.5s ease-out; 
        }

        :host #errorMessage[show]{
          opacity: 1;
        }

        :host 

      </style> 

      <div class="headerContainer">
        <h2>Contact</h2>
      </div>
      <div class="container">
        <div class="inputTextBoxesContainer">
          <pw-textfield class="nameInput" placeholder="Full Name" label="Full Name" title="Full Name"></pw-textfield>
          <pw-textfield class="emailInput" placeholder="Email" label="Email" title="Email"></pw-textfield>
        </div>
        <pw-textarea class="messageInput" label="Message" placeholder="Type your message here..." title="Message"></pw-textarea>
        <label id="errorMessage">This is an error message</label>
        <pw-button content='Send Email' title="Send Email"></pw-button>
      </div>
      `

      const emailBtn = this.shadow.querySelector('pw-button')
      emailBtn.addEventListener('click', this.sendEmail.bind(this))

      const fullNameInput = this.shadow.querySelector('.nameInput') as HTMLElementTagNameMap['pw-textfield']
      const emailInput = this.shadow.querySelector('.emailInput') as HTMLElementTagNameMap['pw-textfield']

      fullNameInput.regexExp = /(^[A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})/
      emailInput.regexExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
    
    sendEmail () {
      const nameElement: HTMLInputElement = this.shadow.querySelector('.nameInput')
      const emailElement: HTMLInputElement = this.shadow.querySelector('.emailInput')
      const messageElement: HTMLInputElement = this.shadow.querySelector('pw-textarea')
      
      if (!nameElement.validity) {
        this.showError('Please enter a valid name')
      }
      else if (!emailElement.validity) {
        this.showError('Please enter a valid email')
      }
      else {
        window.open(`mailto:niswtis@gmail.com?subject=Message from: ${nameElement.value}&cc=${emailElement.value}&body=${messageElement.value}`,'_newtab');
      }
    } 

    showError (message: string) {
      const errorMessage: HTMLLabelElement = this.shadow.querySelector('#errorMessage')
      errorMessage.setAttribute('show','')
      errorMessage.innerHTML = message
      setTimeout(() => {
        errorMessage.removeAttribute('show')
      }, 3000)
    }
  }

  

  customElements.define(ViewContact.is, ViewContact)
  export default ViewContact.is