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
              margin-top: 5%;
              margin-bottom: 8%;
          }
      </style> 
  
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