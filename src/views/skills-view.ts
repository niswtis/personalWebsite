import '../components/pw-skill-component'
class ViewSkills extends HTMLElement {
    static get is () {
      return 'pw-view-skills'
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
              margin-top: 10%;
              align-items: center;
              flex-direction: column;
              background-color: var(--pw-background-light);
              transition: background-color 1s ease;
              transform: skewY(-3deg);
          }
  
          :host .headerContainer{
            flex-direction: row;
            width: 85%;
            min-width: 790px;
            justify-content: center;
            align-items: center;    
            margin-top: 4%; 
          }
  
          :host .headerContainer h2 {
            color: var(--pw-text-light);
            transition: color 1s ease;
            font-family: 'Roboto', sans-serif;
            transform: skewY(3deg);
            margin-bottom: 0;
            border-bottom: 2px solid var(--pw-text-light);
            width: fit-content;
            padding-right: 3px;
          }

          :host .container {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 45px;
              grid-auto-rows: minmax(100px, auto);
              flex-direction: row;
              width: 85%;
              min-width: 790px;
              justify-content: center;
              align-items: center;
              transform: skewY(3deg);
              margin-top: 2%;
              margin-bottom: 10%;
          }
      </style> 

      <div class="headerContainer">
        <h2>Skills</h2>
      </div>
      <div class="container">
        <pw-skill-component name="html" label="HTML 5"></pw-skill-component>
        <pw-skill-component name="css" label="CSS 3"></pw-skill-component>
        <pw-skill-component name="typescript" label="Typescript"></pw-skill-component>
        <pw-skill-component name="nodeJs" label="Node JS"></pw-skill-component>
        <pw-skill-component name="graphQl" label="GraphQL"></pw-skill-component>
        <pw-skill-component name="apollo" label="Apollo"></pw-skill-component>
        <pw-skill-component name="git" label="Git"></pw-skill-component>
        <pw-skill-component name="figma" label="Figma"></pw-skill-component>
      </div>
        
      `
    }
  }
  
  customElements.define(ViewSkills.is, ViewSkills)
  export default ViewSkills.is