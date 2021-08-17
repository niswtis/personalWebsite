import '../components/pw-icon'

class ViewFooter extends HTMLElement {
    static get is () {
      return 'pw-view-footer'
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
              flex-direction: row;
              min-width: 790px;
              justify-content: center;
              align-items: center;
              margin-top: 5%;
              width: 100%;
              border-top: solid 4px var(--pw-separator);
              transition: border-top 1s ease;
          }
          
          :host .container label {
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            margin-top: 3%;
            margin-bottom: 3%;
          }

          :host .container .vl {
            border-left: 6px solid var(--pw-separator);
            transition: border-left 1s ease;
            border-radius: 3px;
            height: 60px;
            margin-left: 4%;
          }
          
          :host pw-icon{
            width: 24px; 
            height: 24px;
            margin-left: 4%;
            transform: scale(1.5);
          }
        }
      </style> 
  
      <div class="container">
        <label>Copyright © 2021 Aristeidis Nisotakis</label>
        <div class="vl"></div>
        <pw-icon name = "git2"></pw-icon>
        <pw-icon name = "linkedin"></pw-icon>
        <pw-icon name = "gmail"></pw-icon>
        <pw-icon name = "cv"></pw-icon>
      </div>
        
      `
    }
  }
  
  customElements.define(ViewFooter.is, ViewFooter)
  export default ViewFooter.is